import React from 'react';
import "./styles/MarkerList.css";
// import poi from './assests/poiShort.json';
// import poiShort from './assests/poiTemp.json';
// import poiShort2 from './assests/poiShort.json';
import keys from '../keys.json';
// import Button from "../components/Button";

const MarkerList = (props) => {

  const backgroundColors = ["#ec3a5a", "#fb8231", "#20bf6b", "#349cdb", "#3e6dd7", "#8c59d0", "#5f8670", "#ef4040", "#a367b1", "#65b741", "#b2533e"];
  const getRandomIndex = () => Math.floor(Math.random() * backgroundColors.length);




  return (
    <div style={{ color: 'black', padding: "10px" }}  id='markerListContainer'>
      <h2>Locations selected : </h2>
      
      <div id='markerList'>
        {props.markers.map((marker, index) => (
          <div key={index}
            className='markers'
            >
            <div id='markerThumbnail'>
            {/* <iframe
              hidden={true}
              key={index}
              width="60"
              height="45"
              loading="lazy"
              allowFullScreen
              referrerpolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${keys.googleMapsApiKey}&q=Space+Needle,Seattle+WA`}
                >
            </iframe> */}
            </div>
            <div id='markerNameContainer'>
              <div id='markerName'>{marker.name}</div>
              <div id='markerCoordinates'>
                {(marker.lat).toFixed(5)},{(marker.lng).toFixed(5)}
              </div>
              <div id='markerIndex'
              style={{
                color: backgroundColors[getRandomIndex()],
              }}
              >
                {index + 1}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarkerList;