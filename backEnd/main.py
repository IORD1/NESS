from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd
import plotly.express as px
from sklearn.preprocessing import normalize
import requests


app = Flask(__name__)
CORS(app) 


def retunAirQuality(lat,long):
    payload = {
            "location": {
                "latitude": lat,
                "longitude": long
            }
        }
    url = 'https://airquality.googleapis.com/v1/currentConditions:lookup?key=AIzaSyDRuGZrusl95uc4EBV2wUKApvV28J2NKvU'
    headers = {'Content-Type': 'application/json'}
    response = requests.post(url, json=payload, headers=headers)
    print(response.json()['indexes'][0]['aqi'])

    return response.json()



@app.route('/')
def hello():
    # return retunAirQuality(19.219012, 73.167206)

@app.route('/api/data')
def get_data():
    data = {'message': 'This is JSON data from your backend server!'}
    return jsonify(data)

def calculate_scores(index, matrix, weights):
    # Create a pandas DataFrame
    decision_matrix = pd.DataFrame(data=matrix, index=index,
                                   columns=["hospital", "cafe", "market"])
    df = pd.DataFrame(dict(
        w_vector=weights,
        criteria=["hospital", "cafe", "market"]))
    print("df : ")
    print(df)
    #for weight figure
    fig = px.line_polar(df, r='w_vector', theta='criteria', line_close=True,
                   title="Importance of Each Criterion")
    fig.update_traces(fill='toself')
    fig.show()

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
    fig.show()

    return result_sorted


@app.route('/receive_data', methods=['POST'])
def receive_data():
    data = request.get_json()

    # Access the 'locations' key
    locations = data.get('locations', [])
    index = []
    matrix = []

    # creating dataframes 
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
    #passing dataframes to score function
    result = calculate_scores(index, matrix, weights)

    # print(result)
    return jsonify({'message': 'Data received successfully!'})



if __name__ == '__main__':
    app.run(port=5000)