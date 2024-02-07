import os
import numpy as np
import pandas as pd
import plotly.express as px
from sklearn.preprocessing import normalize
from dotenv import load_dotenv
import requests
import json


load_dotenv()


def calculate_scores(index, matrix, weights):
    # Create a pandas DataFrame
    decision_matrix = pd.DataFrame(data=matrix, index=index,
                                   columns=["hospital", "cafe", "market"])
    df = pd.DataFrame(dict(
        w_vector=weights,
        criteria=["hospital", "cafe", "market"]))
    fig = px.line_polar(df, r='w_vector', theta='criteria', line_close=True,
                        title="Importance of Each Criterion")

    fig.update_traces(fill='toself')

    fig.show()

    # Normalization
    decision_matrix_norm = normalize(decision_matrix, axis=0, norm='max')

    # Calculate the result using dot product
    result = np.dot(weights, decision_matrix_norm.transpose())
    result_index = pd.DataFrame(data=result, index=index, columns=["value"])

    # Sort the result
    result_sorted = result_index.sort_values(by=['value'], ascending=False)

    # Plot the result using a bar chart
    fig = px.bar(result_sorted, x=result_sorted.index, y='value',
                 labels={'value': 'Value', 'index': 'Location'},
                 title="Neighbourhood Evaluation",
                 color=result_sorted['value'])
    fig.show()

    return result_sorted


def get_amenities(longitude, latitude, radius, limit, category_id):
    tom_tom_key = os.environ.get('TOM_TOM_KEY')
    try:
        url = f'https://api.tomtom.com/search/2/nearbySearch/.json?key={tom_tom_key}&lat={latitude}&lon={longitude}&radius={radius}&limit={limit}&categorySet={category_id}'
        response = requests.get(url)
    except Exception as e:
        return json.dumps({"Error": str(e)})
    return response.json()