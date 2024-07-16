import Button from "./components/ButtonMain"
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Loading from "./components/Loading";
import Loader from "./components/Loader";
import Map2 from "./components/Map2";
import PoiOjbect from './poi.json';
import PoiList from "./components/PoiList";
import React,{useState} from "react";
import Splash from "./components/Splash";
import Login from "./components/Login";
import HomeScreen from "./components/HomeScreen";
import Preferences from "./components/Preferences";
import Register from "./components/Register";
function App() {
  const [isLoading, setIsLoading] = useState(false);


  return (
    <>
    {/* {isLoading ? <div className="isLoading"><p>Loading....</p></div> : <></>}
    <Map2 isLoading={isLoading} setIsLoading={setIsLoading}/>
      <PoiList /> */}

    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/preferences" element={<Preferences />}/>
        <Route path="/homescreen" element={<HomeScreen />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </Router>

    </>
  )
}


export default App;
