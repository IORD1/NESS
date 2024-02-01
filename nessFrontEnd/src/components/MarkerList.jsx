import React from 'react';
import poi from './assests/poiShort.json';
import poiShort from './assests/poiTemp.json';
import poiShort2 from './assests/poiShort.json';
import keys from '../keys.json';

const MarkerList = (props) => {
  const isButtonDisabled = props.markers.length < 2;
  const handleClick = () => {
    if (!isButtonDisabled) {
      console.log("analyzing");
      getData(props.markers);

    }
  };


  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const backgroundColors = ["#ec3a5a", "#fb8231", "#20bf6b", "#349cdb", "#3e6dd7", "#8c59d0", "#5f8670", "#ef4040", "#a367b1", "#65b741", "#b2533e"];
  const getRandomIndex = () => Math.floor(Math.random() * backgroundColors.length);

  const fetchData = async (lat,lon,radius,limit,categoryId) =>{
    try {
      const response = await fetch(
        `https://api.tomtom.com/search/2/nearbySearch/.json?key=${keys.tomTomKey}&lat=${lat}&lon=${lon}&radius=${radius}&limit=${limit}&categorySet=${categoryId}`
      );

      const data = await response.json();
      const count = data.summary.numResults;
        console.log(count)
      return count;
    } catch (error) {
      console.error(`Error fetching amenity count for ${category.name}:`, error);
    }
  };
  async function getData() {
    props.setIsLoading(true);
    const locationCounts = [];
    const locationData = { locations: [] };


    for (const location of props.markers) {
      console.log(location.name);
      const locationCount = { name: location.name };

      for (const ammenity of poiShort.list) {
        console.log(ammenity);
        const count = await fetchData(location.lat,location.lng,1000,100,ammenity.id);
        locationCount[ammenity.id] = count;
        await sleep(1000);
      }
      locationData.locations.push(locationCount);
      console.log("------^^^^^^^-------");
    }

    console.log(locationCounts);
    console.log(locationData);
    await postDataToBackend(locationData);
    props.setIsLoading(false);
  }


  async function postDataToBackend(data) {
    const response = await fetch('http://localhost:5000/receive_data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    const result = await response.json();
    console.log(result);
  }


  return (
    <div style={{ color: 'black', padding: "10px" }}>
      <button onClick={handleClick} disabled={isButtonDisabled}>
        Analyze
      </button>
      <h2>Locations selected</h2>
      <div style={{ display: 'flex', flexWrap: "wrap", gap: "10px" }}>
        {props.markers.map((marker, index) => (
          <div key={index}
            style={{
              color: "white",
              backgroundColor: backgroundColors[getRandomIndex()],
              padding: "0px 5px 0px 5px",
              borderRadius: "5px",
              fontSize: "1.2em"

            }}
          >
            {index + 1}: {marker.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarkerList;