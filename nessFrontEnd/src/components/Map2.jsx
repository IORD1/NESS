import React, { useState, useEffect }  from 'react';
import { GoogleMap, useLoadScript, Marker,InfoWindow } from '@react-google-maps/api';
import keys from "../keys.json";
import MarkerList from './MarkerList';


const mapContainerStyle = {
    width: '100vw',
    height: '50vh',
};
const center = {
    lat: 18.5204,
    lng: 73.8567,
};

const Map2 = () => {
    const [ libraries ] = useState(['places']);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey:keys.googleMapsApiKey,
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
          name: "this",
        };
  
        // Fetch suburb information from OpenCage Geocoding API
        newMarker.name = await fetchLocationInfo(newMarker.lat, newMarker.lng);
  
        setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
  
        // Print the coordinates
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
    const apiKey = '9f2a38022fd64d4c983d577de08c4926'; // Replace with your OpenCage API key
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const suburb = data.results[0]?.components?.suburb;
      const town = data.results[0]?.components?.town;
      const road = data.results[0]?.components?.road;
        // console.log( data.results[0]?.components);
      if (suburb) {
        return suburb;
      } else if (town) {
        return town;
      }else if(road){
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
    <div>
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
          <Marker key={index} position={marker} onClick={() => handleMarkerClick(marker)}/>
        ))}
        {selectedMarker && (
          <InfoWindow
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            onCloseClick={handleInfoWindowClose}
          >
            {/*  zIndex does not work ig */}
            <div style={{ color: 'black', zIndex:12 }}>
            {selectedMarker.serial} : {selectedMarker.name}          
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
      <MarkerList markers={markers}/>
    </div>
  );
};

export default Map2;