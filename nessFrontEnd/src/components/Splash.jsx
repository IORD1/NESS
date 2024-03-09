import React from 'react';
import './styles/splash.css';
import Button from "./ButtonMain";
import NessLoader from "./NessLoader";


const Splash = () => {

  function openLogin(){
    window.open(`${window.location.origin}/login`, '_self'); 
    // window.open('http://localhost:5173/login', '_self'); 
  }


  return (
    <div id='splash-screen'>
      <div id='splash-container'>
        <div id='splashlogo'>
          <NessLoader />
        </div>
        <div id='buttonSplashHolder'>
          <div id='splashtext'>Find the nest you deserve</div>
            <Button text={"Get Started"} 
            onClick={() => openLogin()}
            style={{
            fontSize: '15px',
            fontWeight: "600",
            width: "80%",
          }}/>

        </div>
      </div>
    </div>
  );
};

export default Splash;


