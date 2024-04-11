import os
import numpy as np
import pandas as pd
import plotly.express as px
from sklearn.preprocessing import normalize
from dotenv import load_dotenv
import requests
import json
import datetime
from math import radians, sin, cos, sqrt, atan2
load_dotenv()


def calculate_scores(index, matrix, weights):
    # Create a pandas DataFrame
    print(matrix)
    decision_matrix = pd.DataFrame(data=matrix, index=index,
                                   columns=["Hospital", "Café/Pub", "Health Care Service", "Market", "Public Amenity",
                                            "College/University", "Open Parking Area", "School",
                                            "Park & Recreation Area", "Movie Theater", "Place of Worship", "Car Wash",
                                            "Bank", "Parking Garage", "Police Station", "Library", "Shopping Center",
                                            "Pharmacy", "Swimming Pool", "Golf Course", "Fire Station", "Taxi Stand",
                                            "Grocery Store", "Fast Food", "Dry Cleaner", "Convenience Store",
                                            "Banquet Rooms", "Air Quality", "Real Estate Rates", "Traffic Jam Factor"]
                                   )
    df = pd.DataFrame(dict(
        w_vector=weights,
        criteria=["Hospital", "Café/Pub", "Health Care Service", "Market", "Public Amenity", "College/University",
                  "Open Parking Area", "School", "Park & Recreation Area", "Movie Theater", "Place of Worship",
                  "Car Wash", "Bank", "Parking Garage", "Police Station", "Library", "Shopping Center", "Pharmacy",
                  "Swimming Pool", "Golf Course", "Fire Station", "Taxi Stand", "Grocery Store", "Fast Food",
                  "Dry Cleaner", "Convenience Store", "Banquet Rooms", "Air Quality", "Real Estate Rates",
                  "Traffic Jam Factor"]))
    print("df : ")
    print(df)
    # for weight figure
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


def get_amenities(longitude, latitude, radius, limit, category_id):
    tom_tom_key = os.environ.get('TOM_TOM_KEY')
    try:
        url = f'https://api.tomtom.com/search/2/nearbySearch/.json?key={tom_tom_key}&lat={latitude}&lon={longitude}&radius={radius}&limit={limit}&categorySet={category_id}'
        response = requests.get(url)
    except Exception as e:
        return json.dumps({"Error": str(e)})
    return response.json()


def retunAirQuality(lat,long):
    payload = {
            "location": {
                "latitude": lat,
                "longitude": long
            }
        }
    googleMapsApiKey = os.environ.get("GOOGLE_MAP_KEY")
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
    # return (response.json()['indexes'][0]['aqi'])
    return 33


def returnTraffic(lat,long,radius):
    hereTrafficKey = os.environ.get("HERE_TRAFFIC_KEY")
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
    return nearest_place, rateinnum, imageUrl, areaClass, seeMoreUrl, locationArea