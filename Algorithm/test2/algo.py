import numpy as np
import json

def load_data(file_path):
    with open(file_path, 'r') as file:
        data = json.load(file)
    return data


def calculate_score(location, priority_sets):
    num_criteria = len(location['amenities'])
    num_priority_sets = len(priority_sets)

    # Step 1: Initialize D matrix
    D = np.zeros((num_criteria, num_priority_sets))

    for j, priority_set in enumerate(priority_sets):
        degree = 0
        for i, criterion in enumerate(location['amenities']):
            g = criterion['importance']
            degree += g
            D[i, j] = degree

    # Step 2: Initialize W matrix
    W = np.zeros((1, num_priority_sets))
    for j in range(num_priority_sets):
        W[0, j] = 1 if D[:, j].max() > 0 else 0

    # Step 3: Calculate threshold
    threshold = np.max(D / W, axis=None)

    # Step 4: Fill W matrix
    for j in range(1, num_priority_sets):
        for k in range(j):
            if np.any(D[:, k] / W[:, k] < threshold):
                W[:, j] = 0
                break

    # Step 5: Calculate final score
    score = np.sum(D * W)

    return score

def calculate_scores(data, priority_sets):
    scores = []
    for location in data['locations']:
        score = calculate_score(location, priority_sets)
        scores.append({'location': location['name'], 'score': score})
    return scores

if __name__ == '__main__':
    # Load data from JSON file
    file_path = 'testdata.json'
    data = load_data(file_path)

    # Define priority sets
    priority_sets = [1, 2, 3]  # Assign priority sets for each criterion

    # Calculate scores
    scores = calculate_scores(data, priority_sets)

    # Print scores
    for score in scores:
        print(f"Location: {score['location']}, Score: {score['score']}")
