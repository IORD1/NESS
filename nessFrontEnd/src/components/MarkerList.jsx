import React from 'react';

const MarkerList = ({ markers }) => {
    const isButtonDisabled = markers.length < 2;
    const handleClick = () => {
        if (!isButtonDisabled) {
            console.log("analyzing");
        }
      };


  return (
    <div  style={{color:'black'}}>
        <button onClick={handleClick} disabled={isButtonDisabled}>
             Analyze
        </button>
      <h2>List of Markers</h2>
      <ul>
        {markers.map((marker, index) => (
          <li key={index}>
             {index + 1}: {marker.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarkerList;