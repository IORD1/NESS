import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import keys from "../keys.json";
import MarkerList from './MarkerList';
import "./styles/map.css";
import Button from './Button';
import ButtonLight from './ButtonLight';
// import poiShort from './assests/poiTemp.json';
import poiShort from './assests/poiShort.json';
import locatoinDataTest from "../../../Temporary/testLocationData.json";
import BarChart from './AmmenityBarPlot';
import RadarChat from "./WeightsRadialPlot.jsx"


const center = {
  lat: 18.5204,
  lng: 73.8567,
};

const Map2 = (props) => {
  const [libraries] = useState(['places']);
  
    const [markers, setMarkers] = useState([]);
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [mapWidth, setMapWdith] = useState("75vw");
    const [resultAvailable, setResultAvailable] = useState(false);
    const [results, setResults] = useState({});
    let [rankingIndex, setRankingIndex] = useState(1);


  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: keys.googleMapsApiKey,
    libraries,
  });  


  const mapContainerStyle = {
    width: mapWidth,
    height: '100vh',
    transition: "all 1s ease-in-out"
  };


  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }  

  function openPreferences(){
    window.open('http://localhost:5173/preferences', '_self'); 
}    



  const isButtonDisabled = markers.length < 2;
  const handleClick = () => {
    if (!isButtonDisabled) {
      console.log("analyzing");
      getData();

    }
  };


  async function getData2(){
    await postDataToBackend(locatoinDataTest);
    console.log("got back here");
    setMapWdith("25vw");
    setResultAvailable(true);
    document.getElementById("MapDock").style.width = "75vw";
  }


  const handleMapClick = async (event) => {
    const addMarker = async () => {
      const newMarker = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        serial: markers.length + 1,
        name: "N/A",
      };

      // Fetch location name from OpenCage API
      newMarker.name = await fetchLocationInfo(newMarker.lat, newMarker.lng);

      setMarkers((prevMarkers) => [...prevMarkers, newMarker]);

      // console.log('Coordinates:', newMarker);
    };

    addMarker();

  };

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);

  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  const fetchLocationInfo = async (lat, lng) => {
    const apiKey = keys.openCageApiKey;
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      const suburb = data.results[0]?.components?.suburb;
      const town = data.results[0]?.components?.town;
      const road = data.results[0]?.components?.road;
      console.log(data.results[0]?.components);
      if (suburb) {
        return suburb;
      } else if (town) {
        return town;
      } else if (road) {
        return road;
      }
    } catch (error) {
      console.error('Error fetching location information:', error);
    }
  };


  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  const fetchData = async (lat,lon,radius,limit,categoryId) =>{
    try {
      const response = await fetch(
        `https://api.tomtom.com/search/2/nearbySearch/.json?key=${keys.tomTomKey}&lat=${lat}&lon=${lon}&radius=${radius}&limit=${limit}&categorySet=${categoryId}`
      );

      const data = await response.json();
      const count = data.summary.numResults;
      console.log(count);
      return count;
    } catch (error) {
      console.error(`Error fetching amenity count for ${category.name}:`, error);
    }
  };
  async function getData() {
    props.setIsLoading(true);
    const locationCounts = [];
    const locationData = { locations: [] };


    for (const location of markers) {
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
    setResults(result);
  }

  return (
    <div id='mapContainer'>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        onClick={handleMapClick}
        options={{
          mapTypeControl: false,
        }}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={marker} onClick={() => handleMarkerClick(marker)} />
        ))}
        {selectedMarker && (
          <InfoWindow
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            onCloseClick={handleInfoWindowClose}
          >
            {/*  zIndex does not work ig */}
            <div style={{ color: 'black', zIndex: 12, paddingRight: "13px", fontWeight: "500" }}>
              {selectedMarker.serial}.  {selectedMarker.name}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
      <div id='MapDock'>
        {resultAvailable ?  
        <div id='resultContainer'>
          <p id='resultsHeading'>Results</p>
          <p id='rankingHeading'>Rankings</p>
          <div id='rankingHolder'>
            {results.results.map((l,index)=>{
                return <div className='resultsChips' key={index}>
                  <div id='rankingIndex' >{index + 1}</div>
                  {l.index}
                  <div id='rankingScore'>{l.value.toFixed(1)}</div>
                  </div>
            })}


            <p id='rankingHeading'>Ammenities</p>
            <BarChart data={results} />
            {/* <RadarChat data={results} /> */}
          </div>
        </div>
      :
      <>
      <div id='mapDockLocationsContainer'>
          <MarkerList markers={markers} isLoading={props.isLoading} setIsLoading={props.setIsLoading}/>

        </div>
        <div id='mapDockButtonContainer'>
          <div id='buttonHolder'>
            <Button text={"Compare"}
            disable={isButtonDisabled}
            onClick={()=>{handleClick()}}
            style={{
              fontSize: '15px',
              fontWeight: "600",
              width: "90%"
            }}
            />
          </div>

          <div id='buttonHolder'>

          <ButtonLight text={"Change Preferences"} 
          onClick={() => {openPreferences()}}
          style={{
            fontSize: '15px',
            fontWeight: "600",
            width: "90%",
            paddin : "0px"
          }}
          />
          </div>
        </div></>
      
      }
      </div>

    </div>
  );
};

export default Map2;