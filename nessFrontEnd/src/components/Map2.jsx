import React, { useState }  from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import keys from "../keys.json";

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '50vh',
};
const center = {
  lat: 18.5204, // default latitude
  lng: 73.8567, // default longitude18.5204° N, 73.8567
};

const Map2 = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey:keys.googleMapsApiKey,
    libraries,
  });


  const [markers, setMarkers] = useState([]);

  const handleMapClick = (event) => {
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };

    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);

    // Print the coordinates to the console
    console.log('Coordinates:', newMarker);
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
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}
        {/* <Marker position={center} /> */}
      </GoogleMap>
    </div>
  );
};

export default Map2;