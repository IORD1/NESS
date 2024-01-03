import Button from "./components/Button"
import "./App.css";
// import Loading from "./components/Loading";
import Loader from "./components/Loader";
import Map2 from "./components/Map2";
import PoiOjbect from './poi.json';
import PoiList from "./components/PoiList";
import React,{useState} from "react";


function App() {
  const [isLoading, setIsLoading] = useState(false);


  return (
    <>
    {isLoading ? <div className="isLoading"><p>Loading....</p></div> : <></>}
    {/* <Map2 isLoading={isLoading} setIsLoading={setIsLoading}/> */}
      {/* <PoiList /> */}
    </>
  )
}

export default App;
