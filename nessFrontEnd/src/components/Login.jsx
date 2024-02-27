import React from 'react';
import './styles/Login.css';
import Button from "./ButtonMain";
import NessLoader from "./NessLoader";
import ButtonLight from './ButtonLight';


const Login = () => {

    function loginWithGoogle(){
        window.open('http://localhost:5173/preferences', '_self'); 
    }


    return (
        <div id='splash-screen'>

            <div id='Login-container'>
                <div id='Login-frirstSection'>

                </div>
                <div id="Login-secondSection">
                    <div id='loginLogo'>
                        <NessLoader />
                    </div>
                    <div id='loginButtons'>
                        <p id='loginText'>Login with</p>
                        <div id='loginButtonsCenter'>
                            <div id='buttonSplashHolder'>
                                <Button text={"Google"} 
                                onClick={() => loginWithGoogle()}
                                style={{
                                    fontSize: '15px',
                                    fontWeight: "600",
                                    width: "80%",
                                }} />

                            </div>
                            <p>Or</p>
                            <div id='buttonSplashHolder'>
                                <ButtonLight text={"Email"} style={{
                                    fontSize: '15px',
                                    fontWeight: "600",
                                    width: "80%",
                                }} />

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;


