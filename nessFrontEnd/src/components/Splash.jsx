import React from 'react';
import './styles/splash.css';
import Button from "./Button";
import NessLoader from "./NessLoader";


const Splash = () => {

  function openLogin(){
    window.open('http://localhost:5173/login', '_self'); 
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
            width: "50%",
          }}/>

        </div>
      </div>
    </div>
  );
};

export default Splash;


