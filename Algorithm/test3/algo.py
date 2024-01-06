# Create a Pandas DataFrame from a Numpy array and specify the index column and column headers

# import required libraries
import numpy as np
import pandas as pd

# creating a numpy array (score of each criterion)
rate = np.array([[24, 5, 2, 20, 3],
                [12, 2, 1, 13, 2],
                [6, 3, 2, 15, 2],
                [12, 7, 3, 19, 4]])

# generating the Pandas data frame

decision_matrix = pd.DataFrame(data = rate,
                        index = ["A", "B", "C", "D"],
                        columns = ["opening_hours",
                                "location", "equipment", "membership_fee","cleanliness"])

# printing the data frame
print(decision_matrix)


#Importance of each criterion

import plotly.express as px
import pandas as pd
weights=[0.45, 0.2,0.15,0.1 ,0.2]
df = pd.DataFrame(dict(
    w_vector=weights,
    criteria=['Opening hours','Location','Equipment','Membership Fee','Cleanliness']))
fig = px.line_polar(df, r='w_vector', theta='criteria', line_close=True,
                   title="Importance of Each Criterion")

fig.update_traces(fill='toself')

fig.show()


decision_matrix['location'] = 1/decision_matrix['location']
decision_matrix['membership_fee']= 1/decision_matrix['membership_fee']


print(decision_matrix)


# Normalization is a process for rescaling the real values of a numeric attribute into a range from 0 to 1
from sklearn.preprocessing import normalize
decision_matrix_norm = normalize(decision_matrix, axis=0, norm='max')
decision_matrix_norm


result = np.dot(weights,decision_matrix_norm.transpose())
result_index = pd.DataFrame(data = result,
    index = ["A", "B", "C", "D"],
    columns = ["value"])
result_sorted = result_index.sort_values(by=['value'], ascending = False)
print(result_sorted)

print(result_sorted['value'].plot(kind='bar', xlabel='Fitness Center', ylabel= 'Value',rot=0,colormap='coolwarm'))
