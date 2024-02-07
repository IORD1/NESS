from flask import Flask, request, jsonify
from pymongo.mongo_client import MongoClient
import hashlib
from flask_jwt_extended import create_access_token, JWTManager, jwt_required, get_jwt_identity
import datetime
import os
from flask_cors import CORS
from utils import calculate_scores, get_amenities


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


@app.route("/api/v1/users", methods=["POST"])
def register():
    try:
        new_user = request.get_json()
        new_user["password"] = hashlib.sha256(new_user["password"].encode("utf-8")).hexdigest()
        doc = users.find_one({"username": new_user["username"]})
        if not doc:
            users.insert_one(new_user)
            return jsonify({'msg': 'User created successfully'}), 201
        else:
            return jsonify({'msg': 'Username already exists'}), 409
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


@app.route('/api/v1/receive_data', methods=['POST'])
@jwt_required()
def receive_data():
    data = request.get_json()

    # Access the 'locations' key
    locations = data.get('locations', [])
    index = []
    matrix = []
    # Iterate through each location and print the array
    for location in locations:
        temp = []
        location_name = location.get('name')
        amenity_counts = [location.get(key, 0) for key in ['7321', '7332', '9376']]

        print(f"Location: {location_name}, Amenities: {amenity_counts}")
        index.append(location_name)
        matrix.append(amenity_counts)

    print("Index:", index)
    print("Matrix:", matrix)
    weights = [0.45, 0.2, 0.35]
    result = calculate_scores(index, matrix, weights)
    print(result)
    return jsonify({'message': 'Data received successfully!'})


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