import React from 'react';
import "./styles/preferences.css";
import Button from "./ButtonMain";
import NessLoader from "./NessLoader";
import ButtonLight from './ButtonLight';
import preferencesList from './assests/poiShort.json';
import { useState } from 'react';
// import {ReactComponent as AddTodo} from "../../assets/safe.svg";

const Preferences = (props) => {
    const [userPreferencesList, setUserPreferencesList] = useState([]);
    function submitPreferences(){
        console.log(userPreferencesList);
        const preferencesData = { list: userPreferencesList };
        postPrefrencesToBackend(preferencesData)
        window.open(`${window.location.origin}/homescreen`, '_self'); 
        // window.open('http://localhost:5173/homescreen', '_self'); 
    }

    function savePreferences(id){
        if (userPreferencesList.includes(id)) {
            setUserPreferencesList(userPreferencesList.filter(itemId => itemId !== id));
        } else {
            setUserPreferencesList([...userPreferencesList, id]);
        }
    }


    async function postPrefrencesToBackend(data) {
        const response = await fetch('https://ness-cpww.onrender.com/receive_preferences', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
      
        const result = await response.json();
        console.log(result);
      }



    


  return (
        <div id='splash-screen'>

        <div id='Preferences-container'>
            <div id='Preferences-frirstSection'>

            </div>
            <div id="Preferences-secondSection">
               
                <div id='PreferencesButtons'>
                    <p id='PreferencesText'>Choose Preferences</p>
                    <div id='preferncesContainer'>
                        {preferencesList.preferences.map((category) => (
                            <div key={category.id} 
                            className={`PreferencesChip ${userPreferencesList.includes(category.id) ? 'selected' : ''}`}
                            onClick={()=>{savePreferences(category.id)}}>
                                    <div className='preferenceIcons'></div>
                                    <p>{category.name}</p>
                            </div>
                            ))}
                    </div>
                    <div id='PreferencesButtonsCenter'>
                        <div id='buttonSplashHolder'>
                            <Button text={"Save"} 
                            onClick={() => submitPreferences()}
                            style={{
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

export default Preferences;