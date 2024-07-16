import React, {useState} from 'react';
import './styles/Login.css';
import Button from "./ButtonMain";
import NessLoader from "./NessLoader";
import ButtonLight from './ButtonLight';


const Login = () => {

    const [input, setInput] = useState({
        username: "",
        password: "",
      });
    function loginWithGoogle(){
        window.open(`${window.location.origin}/preferences`, '_self'); 

        // window.open('http://localhost:5173/preferences', '_self'); 
    }

    async function loginLocal() {
        const data = {
            username: input.username,
            password: input.password
        }
        const response = await fetch('http://localhost:5000/api/v1/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        const token = result.access_token;
        // const token = ""
        console.log(token)
        if(token){
            localStorage.setItem("token", token);
            window.open(`${window.location.origin}/preferences`, '_self'); 
        }
    }
    function redirectRegister() {
        window.open(`${window.location.origin}/register`, '_self');
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
                            <div className='login'>
                                <input
                                    className='user'
                                    type="text"
                                    placeholder="Username"
                                    value={input.username}
                                    onChange={(e) => setInput({ ...input, username: e.target.value })}
                                />
                                <input
                                    className='user'
                                    type="password"
                                    placeholder="Password"
                                    value={input.password}
                                    onChange={(e) => setInput({ ...input, password: e.target.value })}
                                />
                                <div className='loginButton'>
                                <ButtonLight text={"Login"} onClick={()=> loginLocal()} style={{
                                    fontSize: '15px',
                                    fontWeight: "600",
                                    width: "80%",
                                    padding: '5px',
                                    height: "80%",
                                }} />
                                <ButtonLight text={"Register"} onClick={()=> redirectRegister()} style={{
                                    fontSize: '15px',
                                    fontWeight: "600",
                                    width: "80%",
                                    padding: '5px',
                                    height: "80%",
                                }} />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;


