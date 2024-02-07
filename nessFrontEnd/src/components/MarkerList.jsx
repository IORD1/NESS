import React from 'react';
import poi from './assests/poiShort.json';
import poiShort from './assests/poiTemp.json';
import poiShort2 from './assests/poiShort.json';
import keys from '../keys.json';
import Button from "../components/Button";

const MarkerList = (props) => {
  const isButtonDisabled = props.markers.length < 2;
  const handleClick = () => {
    if (!isButtonDisabled) {
      console.log("analyzing");
      getData(props.markers);

    }
  };




  const backgroundColors = ["#ec3a5a", "#fb8231", "#20bf6b", "#349cdb", "#3e6dd7", "#8c59d0", "#5f8670", "#ef4040", "#a367b1", "#65b741", "#b2533e"];
  const getRandomIndex = () => Math.floor(Math.random() * backgroundColors.length);




  return (
    <div style={{ color: 'black', padding: "10px" }}>
      <h2>Locations selected : </h2>
      
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