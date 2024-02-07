import "../App.css";

// import Loading from "./components/Loading";
import Loader from "./Loader";
import Map2 from "./Map2";
import PoiOjbect from '../poi.json';
import PoiList from "./PoiList";
import React,{useState} from "react";

function HomeScreen() {
  const [isLoading, setIsLoading] = useState(false);


  return (
    <>
    {isLoading ? <div className="isLoading"><p>Loading....</p></div> : <></>}
    <Map2 isLoading={isLoading} setIsLoading={setIsLoading}/>
      <PoiList />



    </>
  )
}


export default HomeScreen;
