import "../App.css";

// import Loading from "./components/Loading";
import Loader from "./Loader";
import Map2 from "./Map2";
import PoiOjbect from '../poi.json';
import { ProgressBox } from "./PogressBox";

import React,{useState} from "react";

function HomeScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [numberLoaded,setNumberLoaded] = useState(0);
  const [totalToBeLoaded, setTotalToBeLoaded] = useState(54);


  return (
    <>
    {/* <div id='Logout-button'>
        <Button text={"Google"} 
        onClick={() => loginWithGoogle()}
        style={{
            fontSize: '15px',
            fontWeight: "600",
            width: "80%",
        }} />

    </div> */}
    {isLoading ? 
    <div className="isLoading">
        
        <div>Loading....<ProgressBox numberLoaded={numberLoaded} totalToBeLoaded={totalToBeLoaded}/></div>
    </div> 
    : <></>}
    <Map2 
      isLoading={isLoading} 
      setIsLoading={setIsLoading} 
      numberLoaded={numberLoaded}
      setNumberLoaded={setNumberLoaded}
      setTotalToBeLoaded={setTotalToBeLoaded}
      />
    </>
  )
}


export default HomeScreen;
