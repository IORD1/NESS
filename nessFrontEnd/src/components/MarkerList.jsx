import React from 'react';
import poi from './assests/poiShort.json';
import poiShort from './assests/poiTemp.json';
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
    } catch (error) {
      console.error(`Error fetching amenity count for ${category.name}:`, error);
    }
  };

  async function getData() {
    props.setIsLoading(true);
    for (const location of props.markers) {
      console.log(location.name);
      for (const ammenity of poiShort.list) {
        console.log(ammenity);
        await fetchData(location.lat,location.lng,1000,80,ammenity.id);
        await sleep(1000);
      }
      console.log("------^^^^^^^-------");
    }
    props.setIsLoading(false);
  }




  return (
    <div style={{ color: 'black', padding: "10px" }}>
      <button onClick={handleClick} disabled={isButtonDisabled}>
        Analyze
      </button>
      <h2>List of props.Markers</h2>
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