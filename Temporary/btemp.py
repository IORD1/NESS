import numpy as np
import pandas as pd
import geopandas as gpd
from sklearn.metrics import pairwise_distances

class NeighbourhoodEvaluationScoringSystem:

    def __init__(self, amenities_df, local_database_df):
        self.amenities_df = amenities_df
        self.local_database_df = local_database_df

    def calculate_amenity_score(self, amenity, location, distance, rating):
        # Calculate the importance of the amenity
        importance = self.amenities_df[amenity]["importance"]

        # Calculate the distance penalty
        distance_penalty = 1 - (distance / self.amenities_df[amenity]["range"])

        # Calculate the rating penalty
        rating_penalty = 1 - rating / self.amenities_df[amenity]["max_rating"]

        # Calculate the amenity score
        amenity_score = importance * distance_penalty * rating_penalty

        return amenity_score

    def calculate_score(self, location):
        # Calculate the score for each amenity
        amenity_scores = []
        for amenity in self.amenities_df.columns:
            # Get the amenities in the vicinity of the location
            amenities = self.amenities_df[amenity][self.amenities_df.distance_to_location(location) <= self.amenities_df[amenity]["range"]]

            # Calculate the score for each amenity
            amenity_score = 0
            for amenity_row in amenities.itertuples():
                amenity_score += self.calculate_amenity_score(amenity, location, amenity_row.distance_to_location, amenity_row.rating)

            # Add the amenity score to the list of amenity scores
            amenity_scores.append(amenity_score)

        # Calculate the overall score
        overall_score = np.mean(amenity_scores)

        return overall_score

    def compare_and_rank_locations(self, locations):
        # Calculate the score for each location
        location_scores = []
        for location in locations:
            location_score = self.calculate_score(location)
            location_scores.append(location_score)

        # Rank the locations based on their scores
        ranked_locations = np.argsort(location_scores)[::-1]

        return ranked_locations

    def generate_graphs_and_visualizations(self, ranked_locations):
        # Generate a bar chart of the scores for each location
        bar_chart = pd.DataFrame(ranked_locations).plot.bar()
        bar_chart.set_title("Neighbourhood Evaluation Scores")

        # Generate a scatter plot of the scores for each location against the distance to the city center
        scatter_plot = pd.DataFrame(ranked_locations, columns=["location", "score", "distance_to_city_center"]).plot.scatter(x="distance_to_city_center", y="score")
        scatter_plot.set_title("Neighbourhood Evaluation Scores vs. Distance to City Center")

        # Generate a pie chart of the average score for each amenity type
        pie_chart = self.amenities_df.groupby("amenity_type").mean().plot.pie(y="score", legend=False)
        pie_chart.set_title("Average Neighbourhood Evaluation Scores by Amenity Type")

        return bar_chart, scatter_plot, pie_chart

    def explain_rankings(self, ranked_locations):
        # Get the top ranked location
        top_ranked_location = ranked_locations[0]

        # Get the scores for the top ranked location
        top_ranked_location_scores = self.calculate_scores(top_ranked_location)

        # Explain why the top ranked location is at first place
        explanation = ""
        for amenity, score in top_ranked_location_scores.items():
            explanation += f"{amenity}: {score}\n"

        return explanation



#Testing code with temprorary data
amenities_df = pd.DataFrame({
    "amenity_type": ["school", "police station", "supermarket"],
    "importance": [3, 2, 1],
    "range": [1000, 500, 200],
    "max_rating": 5
})

local_database_df = pd.DataFrame({
    "road_accessibility": [4, 3, 2],
    "noise_levels": [3, 2, 1],
    "parking_spaces": [2, 1, 0],
    "green_spaces": [5, 4, 3]
})


scoring_system = NeighbourhoodEvaluationScoringSystem(amenities_df, local_database_df)

# Calculate the score for a location
location = (37.7833, -122.4167)
score = scoring_system.calculate_score(location)

# Print the score
print(score)


# Compare and rank multiple locations
locations = [(37.7833, -122.4167), (37.7883, -122.4333), (37.7783, -122.4033)]
ranked_locations = scoring_system.compare_and_rank_locations(locations)

# Print the ranked locations
print(ranked_locations)



# Generate graphs and visualizations
bar_chart, scatter_plot, pie_chart = scoring_system.generate_graphs_and_visualizations(ranked_locations)

# Display the graphs
bar_chart.show()
scatter_plot.show()
pie_chart.show()


# Explain the rankings
explanation = scoring_system.explain_rankings(ranked_locations)

# Print the explanation
print(explanation)
