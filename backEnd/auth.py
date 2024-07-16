import json

from flask import Flask, request, jsonify, send_file
from pymongo.mongo_client import MongoClient
import hashlib
from flask_jwt_extended import create_access_token, JWTManager, jwt_required, get_jwt_identity
import datetime
import os
from flask_cors import CORS
from utils import calculate_scores, get_amenities, returnTraffic, return_nearest_rate, retunAirQuality
import shutil

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
uri = os.environ.get('DATABASE_URL')
# uri = "mongodb://localhost:27017"
# Create a new client and connect to the server
client = MongoClient(uri)
print("hello")
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

db = client['ness']
users = db["users"]

global weights
weights = [0.061728395061728364, 0.030864197530864182, 0.049382716049382686, 0.04320987654320985, 0.030864197530864182, 0.049382716049382686, 0.018518518518518507, 0.05555555555555552, 0.037037037037037014, 0.024691358024691343, 0.024691358024691343, 0.012345679012345671, 0.037037037037037014, 0.018518518518518507, 0.037037037037037014, 0.030864197530864182, 0.04320987654320985, 0.04320987654320985, 0.037037037037037014, 0.030864197530864182, 0.030864197530864182, 0.012345679012345671, 0.04320987654320985, 0.024691358024691343, 0.018518518518518507, 0.030864197530864182, 0.006172839506172836, -0.024691358024691343, 0.049382716049382686, -0.04320987654320985]
global radiusGlobal
radiusGlobal = 1000
namesOfAmmenities = ["Hospital", "Café/Pub", "Health Care Service", "Market", "Public Amenity", "College/University", "Open Parking Area", "School", "Park & Recreation Area", "Movie Theater", "Place of Worship", "Car Wash", "Bank", "Parking Garage", "Police Station", "Library", "Shopping Center", "Pharmacy", "Swimming Pool", "Golf Course", "Fire Station", "Taxi Stand", "Grocery Store", "Fast Food", "Dry Cleaner", "Convenience Store", "Banquet Rooms","Air Quality","Real Estate Rates","Traffic Jam Factor"]
global amenity_weights
amenity_weights = {
    "Hospital": 0.1,
    "Café/Pub": 0.05,
    "Health Care Service": 0.08,
    "Market": 0.07,
    "Public Amenity": 0.05,
    "College/University": 0.08,
    "Open Parking Area": 0.03,
    "School": 0.09,
    "Park & Recreation Area": 0.06,
    "Movie Theater": 0.04,
    "Place of Worship": 0.04,
    "Car Wash": 0.02,
    "Bank": 0.06,
    "Parking Garage": 0.03,
    "Police Station": 0.06,
    "Library": 0.05,
    "Shopping Center": 0.07,
    "Pharmacy": 0.07,
    "Swimming Pool": 0.06,
    "Golf Course": 0.05,
    "Fire Station": 0.05,
    "Taxi Stand": 0.02,
    "Grocery Store": 0.07,
    "Fast Food": 0.04,
    "Dry Cleaner": 0.03,
    "Convenience Store": 0.05,
    "Banquet Rooms": 0.01,
    "Air Quality": -0.04,
    "Real Estate Rates" : 0.08,
    "Traffic Jam Factor" : -0.07
}

global ammneitiescopy
ammneitiescopy = {
    "Hospital": 0.1,
    "Café/Pub": 0.05,
    "Health Care Service": 0.08,
    "Market": 0.07,
    "Public Amenity": 0.05,
    "College/University": 0.08,
    "Open Parking Area": 0.03,
    "School": 0.09,
    "Park & Recreation Area": 0.06,
    "Movie Theater": 0.04,
    "Place of Worship": 0.04,
    "Car Wash": 0.02,
    "Bank": 0.06,
    "Parking Garage": 0.03,
    "Police Station": 0.06,
    "Library": 0.05,
    "Shopping Center": 0.07,
    "Pharmacy": 0.07,
    "Swimming Pool": 0.06,
    "Golf Course": 0.05,
    "Fire Station": 0.05,
    "Taxi Stand": 0.02,
    "Grocery Store": 0.07,
    "Fast Food": 0.04,
    "Dry Cleaner": 0.03,
    "Convenience Store": 0.05,
    "Banquet Rooms": 0.01,
    "Air Quality": -0.04,
    "Real Estate Rates" : 0.08,
    "Traffic Jam Factor" : -0.07
}




@app.route("/api/v1/register", methods=["POST"])
def register():
    try:
        new_user = request.get_json()
        new_user["password"] = hashlib.sha256(new_user["password"].encode("utf-8")).hexdigest()
        doc = users.find_one({"username": new_user["username"]})
        if not doc:
            users.insert_one(new_user)
            return jsonify({'msg': 'User created successfully', 'status': 201}), 201
        else:
            return jsonify({'msg': 'Username already exists', 'status': 409}), 409
    except Exception as e:
        return {
            "msg": "Something went wrong",
            "error": str(e),
            "data": None,
        }, 500


jwt = JWTManager(app)
app.config['JWT_SECRET_KEY'] =  os.environ.get('JWT_SECRET_KEY')
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = datetime.timedelta(days=1)


@app.route("/api/v1/login", methods=["POST"])
def login():
    try:
        login_details = request.get_json()
        print(login_details['username'])
        user_from_db = users.find_one({'username': login_details['username']})
        print(user_from_db)
        if user_from_db:
            encrypted_password = hashlib.sha256(login_details['password'].encode('utf-8')).hexdigest()
            print(encrypted_password)
            if encrypted_password == user_from_db['password']:
                access_token = create_access_token(identity=user_from_db['username'])
                return jsonify(access_token=access_token), 200
        return jsonify({'msg': 'username or password is incorrect'}), 401
    except Exception as e:
        return {
            "msg": "Something went wrong",
            "error": str(e),
            "data": None
        }, 500


@app.route("/api/v1/users", methods=['GET'])
@jwt_required()
def profile():
    current_user = get_jwt_identity()
    user_from_db = users.find_one({"username": current_user})
    if user_from_db:
        del user_from_db['_id'], user_from_db['password']
        return jsonify({'profile': user_from_db}), 200
    else:
        return jsonify({'msg': 'Profile not found'}), 404


# Define a sample endpoint
@app.route('/')
def hello():
    return 'try api/data'


# Define an endpoint that returns JSON data
@app.route('/api/v1/data')
@jwt_required()
def get_data():
    # current_user = get_jwt_identity()
    # if current_user:
    #     data = {'message': 'This is JSON data from your backend server!'}
    #     return jsonify(data)
    # else:
    #     return jsonify({"msg": "Auth error!!"})
    data = {'message': 'This is JSON data from your backend server!'}
    return jsonify(data)

@app.route('/get_data')
@jwt_required()
def downloaddata():
    return send_file("Databank/data.json", as_attachment=True)

@app.route('/wipe_data')
@jwt_required()
def wipeAllData():
    open("Databank/data.json", 'w').close()
    shutil.copyfile("Databank/copy.json", "Databank/data.json")
    return "ALL DATA WIPED <> from main data file <>"


@app.route('/refreshBackend')
# @jwt_required()
def refreshApp():
    global radiusGlobal
    radiusGlobal = 1000

    global amenity_weights
    global ammneitiescopy
    amenity_weights = ammneitiescopy

    return jsonify({'message': 'App backend refreshed'}), 200


@app.route('/api/v1/receive_data', methods=['POST'])
@jwt_required()
def receive_data():
    data = request.get_json()
    global radiusGlobal

    # Access the 'locations' key
    locations = data.get('locations', [])
    if len(locations) == 0:
        return jsonify({
            'message': 'No locations chosen!'
        }), 400

    index = []
    matrix = []
    air_quality = []
    real_estate_rate = []
    real_estate_name_area = []
    avg_jame_factor = []
    area_number_roads = []
    locationImageUrl = []
    locationClass = []
    locationseeMoreUrl = []
    locationAreaInPune = []
    # creating dataframes
    for location in locations:
        temp = []
        location_name = location.get('name')
        # print(location.get("lat"))
        # print(location.get("lng"))
        location_air_quality = retunAirQuality(location.get("lat"), location.get("lng"))
        # location_air_quality =  30

        air_quality.append(location_air_quality)

        nearest_place_name, lcoaltion_estate_rates, imageUrl, areaClass, seeMoreUrl, locationArea = return_nearest_rate(location.get("lat"), location.get("lng"))
        real_estate_rate.append(lcoaltion_estate_rates)
        real_estate_name_area.append(nearest_place_name)
        locationImageUrl.append(imageUrl)
        locationClass.append(areaClass)
        print(areaClass)
        locationseeMoreUrl.append(seeMoreUrl)
        locationAreaInPune.append(locationArea)

        location_jam_factor, total_number_roads = returnTraffic(location.get("lat"), location.get("lng"), radiusGlobal)
        # print(location_jam_factor)
        avg_jame_factor.append(location_jam_factor)
        area_number_roads.append(total_number_roads)

        amenity_counts = [location.get(key, 0) for key in
                          ['7321', '9376', '9663', '7332', '9932', '7377', '7369', '7372', '9362', '7342', '7339',
                           '9155', '7328', '7313', '7322', '9913', '7373', '7326', '7338', '9911', '7392', '9942003',
                           '9361023', '7315015', '9361010', '9361009', '7315146']]
        amenity_counts.append(location_air_quality)
        amenity_counts.append(lcoaltion_estate_rates / radiusGlobal)
        amenity_counts.append(location_jam_factor)

        print(f"Location: {location_name}, Amenities: {amenity_counts}")
        index.append(location_name)
        matrix.append(amenity_counts)

    print("Index:", index)
    print("Matrix:", matrix)
    print("----------------------")
    # passing dataframes to score function
    result = calculate_scores(index, matrix, weights)
    print(result)
    # Convert DataFrame to list of dictionaries
    result_dict_list = result.reset_index().to_dict(orient='records')
    print(result_dict_list)
    # print(result)
    return jsonify({
        'message': 'Data received successfully!',
        "results": result_dict_list,
        "ammenitiesList": matrix,
        "givenOrder": index,
        "namesOfAmmenites": namesOfAmmenities,
        "weights": weights,
        "airQuality": air_quality,
        "realEstateRates": real_estate_rate,
        "realEstateNames": real_estate_name_area,
        "avgJamFactor": avg_jame_factor,
        "totalAreaRoads": area_number_roads,
        "locationImageUrl": locationImageUrl,
        "locationClass": locationClass,
        "locationSeeMoreUrl": locationseeMoreUrl,
        "locationAreaInPune": locationAreaInPune
    })

@app.route('/receive_preferences', methods=['POST'])
@jwt_required()
def computePreferences():
    global weights  # Declare weights as a global variable

    data = request.get_json()
    listWeight = data.get('list', [])

    print(listWeight)
    print(len(weights))
    dynamicWeights = [0.4,0.3,0.2,0.05,0.025,0.015,0.01]
    indexOfWeight = 0
    print("-"*30)
    print("Weights : ")
    print(amenity_weights)


    for preference in listWeight:
        if(preference == 1):
            amenity_weights["Hospital"] += dynamicWeights[indexOfWeight]
            amenity_weights["Health Care Service"] += dynamicWeights[indexOfWeight]
            amenity_weights["Police Station"] += dynamicWeights[indexOfWeight]
            amenity_weights["Fire Station"] += dynamicWeights[indexOfWeight]
            amenity_weights["Pharmacy"] += dynamicWeights[indexOfWeight]
        elif(preference == 2):
            amenity_weights["College/University"] += dynamicWeights[indexOfWeight]
            amenity_weights["School"] += dynamicWeights[indexOfWeight]
            amenity_weights["Library"] += dynamicWeights[indexOfWeight]
        elif(preference == 3):
            amenity_weights["Open Parking Area"] += dynamicWeights[indexOfWeight]
            amenity_weights["Car Wash"] += dynamicWeights[indexOfWeight]
            amenity_weights["Parking Garage"] += dynamicWeights[indexOfWeight]
            amenity_weights["Taxi Stand"] += dynamicWeights[indexOfWeight]
            amenity_weights["Traffic Jam Factor"] -= dynamicWeights[indexOfWeight]
        elif(preference == 4):
            amenity_weights["Movie Theater"] += dynamicWeights[indexOfWeight]
            amenity_weights["Park & Recreation Area"] += dynamicWeights[indexOfWeight]
            amenity_weights["Banquet Rooms"] += dynamicWeights[indexOfWeight]
            amenity_weights["Café/Pub"] += dynamicWeights[indexOfWeight]
            amenity_weights["Golf Course"] -= 0.2
            amenity_weights["Swimming Pool"] -= 0.2
        elif(preference == 5):
            amenity_weights["Air Quality"] -= dynamicWeights[indexOfWeight]
        elif(preference == 6):
            amenity_weights["Shopping Center"] += dynamicWeights[indexOfWeight]
            amenity_weights["Market"] += dynamicWeights[indexOfWeight]
            amenity_weights["Public Amenity"] += dynamicWeights[indexOfWeight]
            amenity_weights["Grocery Store"] += dynamicWeights[indexOfWeight]
            amenity_weights["Fast Food"] += dynamicWeights[indexOfWeight]
            amenity_weights["Dry Cleaner"] += dynamicWeights[indexOfWeight]
            amenity_weights["Convenience Store"] += dynamicWeights[indexOfWeight]
            amenity_weights["Bank"] += dynamicWeights[indexOfWeight]
            amenity_weights["Place of Worship"] += dynamicWeights[indexOfWeight]
        elif(preference == 7):
            amenity_weights["Real Estate Rates"] += dynamicWeights[indexOfWeight]
        indexOfWeight += 1


    # Normalize weights so that their sum equals 1
    # total_weight = sum(amenity_weights.values())
    total_weight = sum(abs(weight) for weight in amenity_weights.values())

    normalized_weights = {amenity: weight / total_weight for amenity, weight in amenity_weights.items()}
    weight_array = list(normalized_weights.values())

    print("-"*30)
    print("Before perference weights : ")
    print(weights)
    print("-"*30)
    print("After preferences weights are :")
    print(weight_array)
    print(len(weight_array))
    print("-"*30)
    print(amenity_weights)
    weights = weight_array
    print("-"*30)

    return jsonify({'message': 'Weights received successfully!'}) , 200


@app.route('/get_json_data_dummy', methods=['POST'])
def get_json_data():
    try:
        # Read the JSON data from the file
        # with open('responses/defaultresponse.json', 'r') as file:
        #     json_data = file.read()
        # return jsonify(json_data), 200
        f = open('responses/defaultresponse.json')
        data = json.load(f)
        return data,200

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/append_data', methods=['POST'])
@jwt_required()
def append_data():
    try:
        data = request.get_json()
        listAmmenities = data.get('results', [])
        with open('Databank/data.json', 'r') as file:
            existing_data = json.load(file)

        for items in listAmmenities:
            existing_data["data"].append(items)



        with open('Databank/data.json', 'w') as file:
            json.dump(existing_data, file)
        print("saved data")
        return jsonify({'message': 'Data appended successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/receive_radius', methods=['POST'])
@jwt_required()
def computeWeights():
    global radiusGlobal
    data = request.get_json()
    radius = data.get('radius')
    radiusGlobal = radius
    print("-"*30)
    print("Radius saved as (in meters): ")
    print(radiusGlobal)
    print("-"*30)


    return jsonify({'message': "Saved Radius" , "newRadius" : radiusGlobal}), 200

@app.route('/api/v1/get_amenities', methods=["GET"])
@jwt_required()
def send_amenities():
    try:
        request_json = request.args.to_dict()
        amenities = get_amenities(request_json['longitude'], request_json['latitude'], request_json['radius'], request_json['limit'], request_json['category_id'])
        return amenities, 201
    except Exception as e:
        return jsonify({"Error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)