from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd
import plotly.express as px
from sklearn.preprocessing import normalize
import requests
import json
from math import radians, sin, cos, sqrt, atan2
from datetime import datetime


with open('keys.json') as f:
    hereTrafficKey = json.load(f)['hereTrafficKey']

with open('keys.json') as f:
    googleMapsApiKey = json.load(f)['googleMapsApiKey']
 


app = Flask(__name__)
CORS(app) 

global weights
weights = [0.061728395061728364, 0.030864197530864182, 0.049382716049382686, 0.04320987654320985, 0.030864197530864182, 0.049382716049382686, 0.018518518518518507, 0.05555555555555552, 0.037037037037037014, 0.024691358024691343, 0.024691358024691343, 0.012345679012345671, 0.037037037037037014, 0.018518518518518507, 0.037037037037037014, 0.030864197530864182, 0.04320987654320985, 0.04320987654320985, 0.037037037037037014, 0.030864197530864182, 0.030864197530864182, 0.012345679012345671, 0.04320987654320985, 0.024691358024691343, 0.018518518518518507, 0.030864197530864182, 0.006172839506172836, -0.024691358024691343, 0.049382716049382686, -0.04320987654320985]

namesOfAmmenities = ["Hospital", "Café/Pub", "Health Care Service", "Market", "Public Amenity", "College/University", "Open Parking Area", "School", "Park & Recreation Area", "Movie Theater", "Place of Worship", "Car Wash", "Bank", "Parking Garage", "Police Station", "Library", "Shopping Center", "Pharmacy", "Swimming Pool", "Golf Course", "Fire Station", "Taxi Stand", "Grocery Store", "Fast Food", "Dry Cleaner", "Convenience Store", "Banquet Rooms","Air Quality","Real Estate Rates","Traffic Jam Factor"]

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


def retunAirQuality(lat,long):
    payload = {
            "location": {
                "latitude": lat,
                "longitude": long
            }
        }
    url = f'https://airquality.googleapis.com/v1/currentConditions:lookup?key={googleMapsApiKey}'
    headers = {'Content-Type': 'application/json'}
    response = requests.post(url, json=payload, headers=headers)
    # print(response.json()['indexes'][0]['aqi'])
    with open('Databank/aqi.json', 'r') as file:
        existing_data = json.load(file)

    airQualityData = response.json()
    airQualityData["lat"] = lat
    airQualityData["lng"] = long
    existing_data["data"].append(airQualityData)



    with open('Databank/aqi.json', 'w') as file:
        json.dump(existing_data, file)
    print("saved AIr Quality data")
    return (response.json()['indexes'][0]['aqi'])


def returnTraffic(lat,long,radius):
    url = f'https://data.traffic.hereapi.com/v7/flow?in=circle:{lat},{long};r={radius}&locationReferencing=olr&apiKey={hereTrafficKey}'
    headers = {'Content-Type': 'application/json'}
    response = requests.get(url, headers=headers)
    response_data = response.json()
    total_jam = 0
    total_roads = 0

    for road in response_data['results']:
        if 'description' in road['location']:
            description = road['location']['description']
            length = road['location']['length']
            jam_factor = road['currentFlow']['jamFactor']
            total_jam += road['currentFlow']['jamFactor']
            total_roads += 1
            # print(f"Road: {description}")
            # print(f"Length: {length} meters")
            # print(f"Jam Factor: {jam_factor}")
            # print("-" * 30)
    print("total roads : ", total_roads)
    print("average jam: ",total_jam/total_roads)
    current_datetime = datetime.now()
    new_key = 'datetime'
    new_value = current_datetime.strftime('%Y-%m-%d %H:%M:%S')
    with open('Databank/traffic.json', 'r') as file:
        existing_data = json.load(file)

    for roads in response_data['results']:
        roads[new_key] = new_value
        existing_data["data"].append(roads)



    with open('Databank/traffic.json', 'w') as file:
        json.dump(existing_data, file)
    print("saved Traffic data")

    # return response_data['results']
    return round(total_jam/total_roads, 4), total_roads



def haversine(lat1, lon1, lat2, lon2):
    # Convert decimal degrees to radians
    lat1, lon1, lat2, lon2 = map(radians, [lat1, lon1, lat2, lon2])

    # Haversine formula
    dlon = lon2 - lon1
    dlat = lat2 - lat1
    a = sin(dlat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(dlon / 2) ** 2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))
    distance = 6371 * c  
    return distance

def return_nearest_rate(lat, lon):
    df = pd.read_csv("../Datasets/updated_file.csv")
    min_distance = float('inf')
    nearest_place = None
    rate = None
    imageUrl =None
    areaClass = None
    seeMoreUrl = None
    locationArea = None
    for index, row in df.iterrows():
        place_lat = row['Latitude']
        place_lon = row['Longitude']
        distance = haversine(lat, lon, place_lat, place_lon)
        if distance < min_distance:
            min_distance = distance
            nearest_place = row['name']
            rate = row['rates']
            imageUrl = row['imageurl']
            # areaClass = row['class']
            if pd.isna(row['class']) :
                areaClass = "NotAvbl"
            else:
                areaClass = row["class"]
            seeMoreUrl = row['redirect']
            locationArea = row['area']
    rateinnum = int(''.join(filter(lambda i: i.isdigit(), rate)))
    print(areaClass)

    
    
    return nearest_place,rateinnum,imageUrl,areaClass,seeMoreUrl,locationArea


@app.route('/')
def hello():
    # nearest_place, nearest_rate = return_nearest_rate(18.54149754525427, 73.79255976528276)
    # rateinnum = ''.join(filter(lambda i: i.isdigit(), nearest_rate))
    # return jsonify({"nearest_place" : nearest_place, "rate" : rateinnum})
    # return returnTraffic(18.515752,73.842158,1000)
    # return retunAirQuality(18.55164920241211,73.8434820739746)
    return "Welcome to ness backend ;)"

@app.route('/api/data')
def get_data():
    data = {'message': 'This is JSON data from your backend server!'}
    return jsonify(data)

def calculate_scores(index, matrix, weights):
    # Create a pandas DataFrame
    print(matrix)
    decision_matrix = pd.DataFrame(data=matrix, index=index,
                                   columns=["Hospital", "Café/Pub", "Health Care Service", "Market", "Public Amenity", "College/University", "Open Parking Area", "School", "Park & Recreation Area", "Movie Theater", "Place of Worship", "Car Wash", "Bank", "Parking Garage", "Police Station", "Library", "Shopping Center", "Pharmacy", "Swimming Pool", "Golf Course", "Fire Station", "Taxi Stand", "Grocery Store", "Fast Food", "Dry Cleaner", "Convenience Store", "Banquet Rooms","Air Quality","Real Estate Rates","Traffic Jam Factor"]
)
    df = pd.DataFrame(dict(
        w_vector=weights,
        criteria=["Hospital", "Café/Pub", "Health Care Service", "Market", "Public Amenity", "College/University", "Open Parking Area", "School", "Park & Recreation Area", "Movie Theater", "Place of Worship", "Car Wash", "Bank", "Parking Garage", "Police Station", "Library", "Shopping Center", "Pharmacy", "Swimming Pool", "Golf Course", "Fire Station", "Taxi Stand", "Grocery Store", "Fast Food", "Dry Cleaner", "Convenience Store", "Banquet Rooms","Air Quality","Real Estate Rates","Traffic Jam Factor"]))
    print("df : ")
    print(df)
    #for weight figure
    fig = px.line_polar(df, r='w_vector', theta='criteria', line_close=True,
                   title="Importance of Each Criterion")
    fig.update_traces(fill='toself')
    # fig.show()

    # Normalization
    decision_matrix_norm = decision_matrix
    # decision_matrix_norm = normalize(decision_matrix, axis=0)
    print("dm : ")
    print(decision_matrix)
    print("--------------")
    print(decision_matrix_norm)
    print("-------------------")
    print(decision_matrix_norm.transpose())
    # Calculate the result using dot product
    result = np.dot(weights, decision_matrix_norm.transpose())
    result_index = pd.DataFrame(data=result, index=index, columns=["value"])
    
    print("resulted index")
    print(result_index)
    # Sort the result
    result_sorted = result_index.sort_values(by=['value'], ascending=False)

    # Plot the result using a bar chart
    fig = px.bar(result_sorted, x=result_sorted.index, y='value',
                 labels={'value': 'Value', 'index': 'Location'},
                 title="Neighbourhood Evaluation",
                 color=result_sorted['value'])
    # fig.show()

    return result_sorted


@app.route('/receive_data', methods=['POST'])
def receive_data():
    data = request.get_json()

    # Access the 'locations' key
    locations = data.get('locations', [])
    index = []
    matrix = []
    air_quality=[]
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
        location_air_quality = retunAirQuality(location.get("lat"),location.get("lng"))
        # location_air_quality =  30

        air_quality.append(location_air_quality)

        nearest_place_name,lcoaltion_estate_rates,imageUrl,areaClass,seeMoreUrl,locationArea = return_nearest_rate(location.get("lat"),location.get("lng"))
        real_estate_rate.append(lcoaltion_estate_rates)
        real_estate_name_area.append(nearest_place_name)
        locationImageUrl.append(imageUrl)
        locationClass.append(areaClass)
        print(areaClass)
        locationseeMoreUrl.append(seeMoreUrl)
        locationAreaInPune.append(locationArea)


        location_jam_factor,total_number_roads = returnTraffic(location.get("lat"),location.get("lng"),1000)
        # print(location_jam_factor)
        avg_jame_factor.append(location_jam_factor)
        area_number_roads.append(total_number_roads)



        amenity_counts = [location.get(key, 0) for key in ['7321', '9376', '9663', '7332', '9932', '7377', '7369', '7372', '9362', '7342', '7339', '9155', '7328', '7313', '7322', '9913', '7373', '7326', '7338', '9911', '7392', '9942003', '9361023', '7315015', '9361010', '9361009', '7315146']]
        amenity_counts.append(location_air_quality)
        amenity_counts.append(lcoaltion_estate_rates/1000)
        amenity_counts.append(location_jam_factor)
        
        print(f"Location: {location_name}, Amenities: {amenity_counts}")
        index.append(location_name)
        matrix.append(amenity_counts)

    print("Index:", index)
    print("Matrix:", matrix)
    print("----------------------")
    #passing dataframes to score function
    result = calculate_scores(index, matrix, weights)
    print(result)
      # Convert DataFrame to list of dictionaries
    result_dict_list = result.reset_index().to_dict(orient='records')
    print(result_dict_list)
    # print(result)
    return jsonify({
        'message': 'Data received successfully!',
        "results" : result_dict_list,
        "ammenitiesList" : matrix,
        "givenOrder" : index,
        "namesOfAmmenites" : namesOfAmmenities,
        "weights" : weights,
        "airQuality" : air_quality,
        "realEstateRates" : real_estate_rate,
        "realEstateNames" : real_estate_name_area,
        "avgJamFactor" : avg_jame_factor,
        "totalAreaRoads" : area_number_roads,
        "locationImageUrl" : locationImageUrl,
        "locationClass" : locationClass,
        "locationSeeMoreUrl" : locationseeMoreUrl,
        "locationAreaInPune" : locationAreaInPune
        })



@app.route('/receive_preferences', methods=['POST'])
def computePreferences():
    data = request.get_json()
    listWeight = data.get('list', [])

    print(data)
    print(len(weights))


    for preference in listWeight:
        if(preference == 1):
            amenity_weights["Hospital"] += 0.2
            amenity_weights["Health Care Service"] += 0.2
            amenity_weights["Police Station"] += 0.2
            amenity_weights["Fire Station"] += 0.2
        elif(preference == 2):
            amenity_weights["College/University"] += 0.2  
            amenity_weights["School"] += 0.2 
            amenity_weights["Library"] += 0.2 
        elif(preference == 3):
            amenity_weights["Open Parking Area"] += 0.2
            amenity_weights["Car Wash"] += 0.2
            amenity_weights["Parking Garage"] += 0.2
            amenity_weights["Taxi Stand"] += 0.2


    # Normalize weights so that their sum equals 1
    total_weight = sum(amenity_weights.values())
    normalized_weights = {amenity: weight / total_weight for amenity, weight in amenity_weights.items()}
    weight_array = list(normalized_weights.values())


    print(weight_array)
    print(len(weight_array))
    print("=" * 30)
    # weights = weight_array
    return jsonify({'message': 'Weights received successfully!'})

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


if __name__ == '__main__':
    app.run(port=5000)