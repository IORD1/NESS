import numpy as np
import pandas as pd
import plotly.express as px
from sklearn.preprocessing import normalize


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