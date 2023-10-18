import math

# Sample amenity data (amenity_type, latitude, longitude, importance, distance, rating)
amenities = [
    ("School", 40.7128, -74.0060, 5, 1.5, 4.5),
    ("Police Station", 40.7123, -74.0087, 4, 0.8, 4.0),
]

#locatioM
location_latitude = 40.7120
location_longitude = -74.0059

#Calculate
scores = []
for amenity in amenities:
    amenity_type, lat, lon, importance, distance, rating = amenity
    
    radius = 6371  # Earth's radius in kilometers
    lat1 = math.radians(location_latitude)
    lon1 = math.radians(location_longitude)
    lat2 = math.radians(lat)
    lon2 = math.radians(lon)
    
    dlon = lon2 - lon1
    dlat = lat2 - lat1

    a = math.sin(dlat/2)**2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon/2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    
    distance_km = radius * c

    # Calculate the score based on importance, distance, and rating
    amenity_score = importance / distance * rating
    
    scores.append((amenity_type, amenity_score))

# Sort amenities by score in descending order
sorted_scores = sorted(scores, key=lambda x: x[1], reverse=True)



for i, (amenity_type, score) in enumerate(sorted_scores, start=1):
    print(f"{i}. {amenity_type}: {score:.2f}")
