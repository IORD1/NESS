import requests
import os
from dotenv import load_dotenv
load_dotenv()
tomTomKey = os.environ.get('TOM_TOM_KEY')
print(tomTomKey)
lat = 18.5204
lon = 73.8567
radius = 1000
limit = 80
categoryId = 7315
url = f'https://api.tomtom.com/search/2/nearbySearch/.json?key={tomTomKey}&lat={lat}&lon={lon}&radius={radius}&limit={limit}&categorySet={categoryId}'
# url = "https://api.tomtom.com/search/2/nearbySearch/.json?key=xmxGMdoBMndNBwY7f657yHwqWb6e0VKG&lat=18.5204&lon=73.8567&radius=1000&limit=80"
response = requests.get(url)


response_json = response.json()
print(response_json)