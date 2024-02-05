from flask import Flask, request, jsonify
from pymongo.mongo_client import MongoClient
import hashlib
from flask_jwt_extended import create_access_token, JWTManager, jwt_required, get_jwt_identity
import datetime
import os

app = Flask(__name__)
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

if __name__ == '__main__':
    app.run(debug=True)