import React, { useEffect, useRef } from 'react';
import '../styles/ResultMeter.css';

const ResultMeter = () => {

  let aqi = 0;
  let deg = calculateValue(aqi);
  let intervalId;
  const currentAqi = document.getElementById("current-aqi");
  const indicator = document.getElementById("indicator");

  function calculateValue(aqi) {
    return (aqi / 500) * 350 + 5;
  }
  function updateValues() {
    aqi++;
      deg = calculateValue(aqi);
      console.log(`AQI: ${aqi}, DEG: ${deg.toFixed(2)}`);
      currentAqi.innerText= aqi;
    indicator.style.rotate =`${deg}deg`;
  //current AQI simulation number 250
    if (aqi === 250) {
      clearInterval(intervalId);
    }
  }
  
      intervalId = setInterval(updateValues, 30);
  useEffect(() => {
    // const calculateValue = (aqi) => (aqi / 500) * 350 + 5;

    // let aqi = 0;
    // let deg = calculateValue(aqi);
    // let intervalId;

    // const updateValues = () => {
    //   aqi++;
    //   deg = calculateValue(aqi);
    //   console.log(`AQI: ${aqi}, DEG: ${deg.toFixed(2)}`);
    //   currentAqiRef.current.innerText = aqi;
    //   indicatorRef.current.style.transform = `rotate(${deg}deg)`;
      
    //   // current AQI simulation number 250
    //   if (aqi === 250) {
    //     clearInterval(intervalId);
    //   }
    // };

    // intervalId = setInterval(updateValues, 30);

    // return () => {
    //   clearInterval(intervalId);
    // };




  }, []);

  return (
    <div id="bgAirQuality">
  <div id="meter">
    <h1 id="current-aqi">---</h1>
    <p>

      <svg height="15px" viewBox="0 0 315 359" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="PM">
          <circle id="Ellipse 1" cx="158" cy="27" r="27" />
          <circle id="Ellipse 2" cx="222" cy="68" r="27" />
          <circle id="Ellipse 3" cx="288" cy="109" r="27" />
          <circle id="Ellipse 4" cx="92" cy="67" r="27" />
          <circle id="Ellipse 5" cx="27" cy="109" r="27" />
          <circle id="Ellipse 6" cx="92.5" cy="141.5" r="26.5" />
          <circle id="Ellipse 7" cx="157" cy="101" r="27" />
          <circle id="Ellipse 8" cx="157.5" cy="174.5" r="26.5" />
          <circle id="Ellipse 9" cx="223" cy="142" r="26" />
          <circle id="Ellipse 10" cx="27" cy="178" r="21" />
          <circle id="Ellipse 11" cx="92" cy="210" r="21" />
          <circle id="Ellipse 12" cx="157" cy="243" r="21" />
          <circle id="Ellipse 13" cx="223" cy="210" r="21" />
          <circle id="Ellipse 14" cx="288" cy="178" r="21" />
          <circle id="Ellipse 15" cx="288" cy="236" r="16" />
          <circle id="Ellipse 16" cx="223" cy="268" r="16" />
          <circle id="Ellipse 17" cx="157" cy="301" r="16" />
          <circle id="Ellipse 18" cx="92" cy="268" r="16" />
          <circle id="Ellipse 19" cx="27" cy="236" r="16" />
          <circle id="Ellipse 20" cx="27.5" cy="282.5" r="10.5" />
          <circle id="Ellipse 21" cx="92.5" cy="315.5" r="10.5" />
          <circle id="Ellipse 22" cx="157.5" cy="348.5" r="10.5" />
          <circle id="Ellipse 23" cx="222.5" cy="315.5" r="10.5" />
          <circle id="Ellipse 24" cx="288.5" cy="282.5" r="10.5" />
        </g>
      </svg> AQI</p>
    <div id="indicator"></div>
  </div>
</div>
  );
};

export default ResultMeter;
