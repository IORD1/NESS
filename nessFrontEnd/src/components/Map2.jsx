import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import keys from "../keys.json";
import MarkerList from './MarkerList';
import "./styles/map.css";
import Button from './Button';
import ButtonLight from './ButtonLight';

const mapContainerStyle = {
  width: '75vw',
  height: '100vh',
};
const center = {
  lat: 18.5204,
  lng: 73.8567,
};

const Map2 = (props) => {
  const [libraries] = useState(['places']);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: keys.googleMapsApiKey,
    libraries,
  });


  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

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
        <div id='mapDockLocationsContainer'>
      <MarkerList markers={markers} isLoading={props.isLoading} setIsLoading={props.setIsLoading}/>

        </div>
        <div id='mapDockButtonContainer'>
          <div id='buttonHolder'>
            <Button text={"Compare"}
            style={{
              fontSize: '15px',
              fontWeight: "600",
              width: "90%"
            }}
            />
          </div>

          <div id='buttonHolder'>

          <ButtonLight text={"Change Preferences"} 
          style={{
            fontSize: '15px',
            fontWeight: "600",
            width: "90%",
            paddin : "0px"
          }}
          />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Map2;