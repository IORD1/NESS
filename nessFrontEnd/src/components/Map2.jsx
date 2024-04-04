import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import keys from "../keys.json";
import MarkerList from "./MarkerList";
import "./styles/map.css";
import "./styles/mapMobile.css";
import ButtonMain from "./ButtonMain";
import ButtonLight from "./ButtonLight";
// import poiShort from './assests/poiTemp.json';
import poiShort from "./assests/poiShort.json";
import locatoinDataTest from "../../../Temporary/testLocationData.json";
import BarChart from "./graphs/AmmenityBarPlot.jsx";
import RadarChat from "./graphs/WeightsRadialPlot.jsx";
import ResultHistogram from "./graphs/ResultHistogram.jsx";
// import ResultMeter from './graphs/AirQualityMeter.jsx';
import AirQualityChart from "./graphs/BasicAirQuality.jsx";
import TrafficPlot from "./graphs/TrafficPlot.jsx";
import RealEsateRatePlot from "./graphs/RealEstateRatePlot.jsx";
// import { CSVLink } from 'react-json-csv'; // Or use Papa or xlsx components
// const { GoogleGenerativeAI } = require("@google/generative-ai");
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(keys.genAiKey);
import MarkDownView from "./MarkDownView.jsx";
import { Button } from "./ui/button";
import { Drawer } from "./ui/drawer";
import { SetRadius } from "./SetRadius";
import { AlertSaved } from "./AlertSaved";
import PoiList from "./PoiList";
import { Cross2Icon } from "@radix-ui/react-icons";

const center = {
  lat: 18.5204,
  lng: 73.8567,
};

const Map2 = (props) => {
  const [libraries] = useState(["places"]);

  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [mapWidth, setMapWdith] = useState("75vw");
  const [mapHeight, setMapHeight] = useState("100vh");
  const [resultAvailable, setResultAvailable] = useState(false);
  const [results, setResults] = useState({});
  let [rankingIndex, setRankingIndex] = useState(1);
  const [enlarged, setEnlarged] = useState(false);
  const [promptResutl, setPromtResult] = useState("");

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: keys.googleMapsApiKey,
    libraries,
  });

  const ammenitiData = { results: [] };

  const mapContainerStyle = {
    width: mapWidth,
    height: mapHeight,
    transition: "all 1s ease-in-out",
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function openPreferences() {
    window.open(`${window.location.origin}/preferences`, "_self");
    // window.open('http://localhost:5173/preferences', '_self');
  }

  useEffect(() => {
    const handleResize = () => {
      // Update map width based on viewport width
      if (resultAvailable) {
        setMapWdith(window.innerWidth <= 768 ? "100vw" : "25vw");
      } else {
        setMapWdith(window.innerWidth <= 768 ? "100vw" : "75vw");
      }

<<<<<<< HEAD
      const refreshBackend = async () => {
        // const response = await fetch("https://ness-cpww.onrender.com/refreshBackend");
        const response = await fetch("http://localhost:5000/refreshBackend");
        console.log(response);
      }

      refreshBackend();

||||||| 79f2415
      const refreshBackend = async () => {
        const response = await fetch("https://ness-cpww.onrender.com/refreshBackend");
        console.log(response);
      }

      refreshBackend();

=======
      // const refreshBackend = async () => {
      //   const response = await fetch("https://ness-cpww.onrender.com/refreshBackend");
      //   console.log(response);
      // }
>>>>>>> 4ff72edb8210793965de8cc6b16348a937b3890b

      // refreshBackend();
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once initially to set the correct map width
    handleResize();

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isButtonDisabled = markers.length < 2;
  const handleClick = () => {
    if (!isButtonDisabled) {
      console.log("analyzing");
      getData();
    }
  };

  async function run(prompt) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    setPromtResult(text);
  }

  async function getData2() {
    // run();
    await postDataToBackend(locatoinDataTest);
    console.log("got back here");
    setResultAvailable(true);
    window.innerWidth <= 768 ? setMapWdith("100vw") : setMapWdith("25vw");
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
      console.error("Error fetching location information:", error);
    }
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  const fetchData = async (lat, lon, radius, limit, categoryId) => {
    try {
      const response = await fetch(
        `https://api.tomtom.com/search/2/nearbySearch/.json?key=${keys.tomTomKey}&lat=${lat}&lon=${lon}&radius=${radius}&limit=${limit}&categorySet=${categoryId}`
      );

      const data = await response.json();
      const count = data.summary.numResults;
      // console.log(data.results[0])
      for (const singleAmmenitiy of data.results) {
        ammenitiData.results.push(singleAmmenitiy);
      }
      // console.log(ammenitiData);

      // // await saveDataToBackend(ammenitiData);
      // Convert JSON data to CSV format
      // const headers = [
      //   // Array of strings representing CSV column headers
      //   { label: 'Name', key: 'name' },
      //   { label: 'PhNo', key: 'phno' },
      //   { label: 'Category', key: 'cat' },
      //   { label: 'lat', key: 'lat' },
      //   { label: 'lng', key: 'lng' },
      // ];

      // const jsonData = [
      //   // Array of objects representing your data
      // ];
      // data.results.forEach(location => {
      //   const name = location.poi.name;
      //   const latitude = location.position.lat;
      //   const longitude = location.position.lon;
      //   const phno = location.poi.phone || 'N/A';
      //   const cat = location.poi.categories[0] || 'N/A';
      //   console.log(`Name: ${name}, Latitude: ${latitude}, Longitude: ${longitude}`);
      //   jsonData.push({ name: name,PhNo:phno,Category: cat,  lat: latitude, lng: longitude });
      // });

      // console.log(jsonData);

      // Append CSV data to the file or create a new file if it doesn't exist
      console.log(count);
      console.log(data);
      return count;
    } catch (error) {
      console.error(`Error fetching amenity count for `, error);
    }
  };
  async function getData() {
    props.setIsLoading(true);
    props.setTotalToBeLoaded(27 * markers.length);
    console.log(27 * markers.length);

    const locationCounts = [];
    const locationData = { locations: [] };

    for (const location of markers) {
      console.log(location.name);
      const locationCount = {
        name: location.name,
        lat: location.lat,
        lng: location.lng,
      };

      for (const ammenity of poiShort.list) {
        console.log(ammenity);
        const count = await fetchData(
          location.lat,
          location.lng,
          1000,
          100,
          ammenity.id
        );
        locationCount[ammenity.id] = count;
        // await sleep(700);

        props.setNumberLoaded((prevNumberLoaded) => prevNumberLoaded + 1);
      }
      locationData.locations.push(locationCount);
      console.log("------^^^^^^^-------");
    }

    console.log(locationCounts);
    console.log(locationData);
    console.log(ammenitiData);

    await saveDataToBackend(ammenitiData);
    await postDataToBackend(locationData);
    props.setIsLoading(false);
    console.log("got back here");
    window.innerWidth <= 768 ? setMapWdith("100vw") : setMapWdith("25vw");
    // setMapWdith("25vw");
    setResultAvailable(true);
    document.getElementById("MapDock").style.width = "75vw";
  }

  async function saveDataToBackend(data) {
<<<<<<< HEAD
    // const response = await fetch('https://ness-cpww.onrender.com/append_data', {
    const response = await fetch('http://localhost:5000/append_data', {
      method: 'POST',
||||||| 79f2415
    const response = await fetch('https://ness-cpww.onrender.com/append_data', {
      method: 'POST',
=======
    const response = await fetch("https://ness-cpww.onrender.com/append_data", {
      method: "POST",
>>>>>>> 4ff72edb8210793965de8cc6b16348a937b3890b
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
    setResults(result);
  }

  function generatePrompt(result) {
    console.log(result);
    var flag = 0;
    let locationNameString = "";
    result.results.map((name) => {
      locationNameString += `${name.index} and, `;
    });
    let compareLocations = `${result.results[0].index} is better than rest of them which are `;
    result.results.map((name) => {
      if (flag == 0) {
        flag = 1;
      } else {
        compareLocations += name.index;
        compareLocations += " and, ";
      }
    });
    let promptNumberSentence = "";
    var cityCount = 0;
    result.givenOrder.map((name) => {
      promptNumberSentence += `${name} has the following number of ammenities which are : `;
      for (let i = 0; i < 27; i++) {
        promptNumberSentence += `${result.namesOfAmmenites[i]} -> ${result.ammenitiesList[cityCount][i]}, `;
      }
      cityCount++;
      promptNumberSentence += "and, ";
    });

    let costPerFeetPrompt = "";
    var numberOfAreas = result.givenOrder.length;
    for (let i = 0; i < numberOfAreas; i++) {
      costPerFeetPrompt += `${result.givenOrder[i]} has rate of ${result.realEstateRates[i]} and ,`;
    }

    let averageTrafficPrompt = "";
    for (let i = 0; i < numberOfAreas; i++) {
      averageTrafficPrompt += `${result.givenOrder[i]} has the traffic jam factor of ${result.avgJamFactor[i]} and ,`;
    }

    let prompt =
      "I want to compare two or more locations which are " +
      locationNameString +
      " and " +
      compareLocations +
      "and I want you to tell me why it is better than other considering the following data ." +
      promptNumberSentence +
      "the cost of real estate based on the ruppess per square feet is as following : " +
      costPerFeetPrompt +
      ". The Average Traffic jam factor(0 is low, 10 is absolutely high traffic) gives the average number of traffic for the given location which is as follows : " +
      averageTrafficPrompt +
      " . Now give me explanation compairing them.";
    console.log(prompt);
    console.log("-------------------------------");
    run(prompt);
  }

  // --------------Change this------------------receive_data---get_json_data_dummy

  async function postDataToBackend(data) {
<<<<<<< HEAD
  // const response = await fetch('https://ness-cpww.onrender.com/receive_data', {
  const response = await fetch('http://localhost:5000/receive_data', {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
||||||| 79f2415
    const response = await fetch('https://ness-cpww.onrender.com/receive_data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
=======
    const response = await fetch(
      "https://ness-cpww.onrender.com/receive_data",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

>>>>>>> 4ff72edb8210793965de8cc6b16348a937b3890b
    const result = await response.json();
    console.log(result);
    setResults(result);
    window.innerWidth <= 768 ? setMapHeight("25vh") : setMapHeight("100vh");
    generatePrompt(result);
  }

  function openDetailedView(index) {
    window.open(results.locationSeeMoreUrl[index], "_blank");
  }

  function enlargeMe(id) {
    if (!enlarged) {
      console.log("enlarged");
      document.getElementById(id).classList.add("enlarged");
      setEnlarged(true);
    } else {
      document.getElementById(id).classList.remove("enlarged");
      setEnlarged(false);
    }
  }

  function handleRemoveLocation(selectedMarker) {
    console.log(selectedMarker);
    const updatedMarkers = markers.filter(
      (marker) => marker !== selectedMarker
    );
    setMarkers(updatedMarkers);
    setSelectedMarker(null);
  }

  return (
    <div id="mapContainer">
      <SetRadius />

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        id="mapMobile"
        zoom={10}
        center={center}
        onClick={handleMapClick}
        options={{
          mapTypeControl: false,
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker}
            onClick={() => handleMarkerClick(marker)}
          />
        ))}
        {selectedMarker && (
          <InfoWindow
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            onCloseClick={handleInfoWindowClose}
          >
            {/*  zIndex does not work ig */}
            <div
              style={{
                color: "black",
                zIndex: 12,
                paddingRight: "13px",
                fontWeight: "500",
                paddingBottom: "30px",
                display: "flex",
                gap: "40px",
                fontSize: "1.3em",
              }}
            >
              {selectedMarker.serial}. <br /> {selectedMarker.name}
              <div id="selectedMarkersBox">
                <div>
                  <Button
                    variant="destructive"
                    style={{
                      FontFace: "Nunito",
                      gap: "5px",
                      mariginTop: "10px",
                    }}
                    onClick={() => {
                      handleRemoveLocation(selectedMarker);
                    }}
                  >
                    Remove
                  </Button>
                </div>
                <div>
                  <Button
                    variant="secondary"
                    style={{
                      FontFace: "Nunito",
                      gap: "5px",
                      mariginTop: "10px",
                    }}
                    onClick={() => {
                      handleInfoWindowClose();
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
      <div id="MapDock">
        {resultAvailable ? (
          <div id="resultContainer">
            <p id="resultsHeading">Results</p>
            <p id="rankingHeading">Rankings</p>
            <div id="rankingHolder">
              {results.results.map((l, index) => {
                return (
                  <div
                    className="resultsChips"
                    key={index}
                    onClick={() => {
                      openDetailedView(index);
                    }}
                  >
                    <div id="rankingIndex">{index + 1}</div>
                    <div id="rankingImage">
                      <img src={results.locationImageUrl[index]}></img>
                    </div>
                    {l.index}
                    <div id="rankingScore">{l.value.toFixed(1)}</div>
                    <div id="rankingClass">{results.locationClass[index]}</div>
                  </div>
                );
              })}

              {/* <ResultMeter /> */}

              <div
                className="plotContainers"
                onClick={() => {
                  enlargeMe("originalResults");
                }}
                id="originalResults"
              >
                <p id="rankingHeading">Result Comparison</p>
                <ResultHistogram results={results.results} />
              </div>

              <div
                className="plotContainers"
                onClick={() => {
                  enlargeMe("amentitesDestribuition");
                }}
                id="amentitesDestribuition"
              >
                <p id="rankingHeading">
                  Ammenities Distribution across locations
                </p>
                <BarChart data={results} />
              </div>
              <div
                className="plotContainers"
                onClick={() => {
                  enlargeMe("weightsOfammenities");
                }}
                id="weightsOfammenities"
              >
                <p id="rankingHeading">Weights for Ammenities</p>
                <RadarChat
                  weights={results.weights}
                  amenityNames={results.namesOfAmmenites}
                />
              </div>
              <div
                className="plotContainers"
                onClick={() => {
                  enlargeMe("airqualityGraphsId");
                }}
                id="airqualityGraphsId"
              >
                <p id="rankingHeading">Air Quality for Locations</p>
                <AirQualityChart
                  airQualityData={results.airQuality}
                  locatoinsNames={results.givenOrder}
                />
              </div>
              <div
                className="plotContainers"
                onClick={() => {
                  enlargeMe("averageTrafficPlotId");
                }}
                id="averageTrafficPlotId"
              >
                <p id="rankingHeading">Average Traffic</p>
                <TrafficPlot
                  jamFactor={results.avgJamFactor}
                  locatoinsNames={results.givenOrder}
                />
              </div>
              <div
                className="plotContainers"
                onClick={() => {
                  enlargeMe("realEstatePlotId");
                }}
                id="realEstatePlotId"
              >
                <p id="rankingHeading">Average Real Estate Rates</p>
                <RealEsateRatePlot
                  Rates={results.realEstateRates}
                  locatoinsNames={results.givenOrder}
                />
              </div>

              <div
                className="plotContainers"
                onClick={() => {
                  enlargeMe("promptResults");
                }}
                id="promptResults"
              >
                <MarkDownView markdownText={promptResutl} />
              </div>

              <PoiList />
            </div>
          </div>
        ) : (
          <>
            <div id="mapDockLocationsContainer">
              <MarkerList
                markers={markers}
                isLoading={props.isLoading}
                setIsLoading={props.setIsLoading}
              />
            </div>
            <div id="mapDockButtonContainer">
              <div id="buttonHolder">
                <ButtonMain
                  text={"Compare"}
                  disable={isButtonDisabled}
                  onClick={() => {
                    handleClick();
                  }}
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    width: "90%",
                  }}
                />
              </div>

              <div id="buttonHolder">
                <ButtonLight
                  text={"Change Preferences"}
                  onClick={() => {
                    openPreferences();
                  }}
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    width: "90%",
                    paddin: "0px",
                  }}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Map2;
