import React, { useState, useEffect } from 'react';

import './styles/nessLoader.css';


const NessLoader = () => {

    const [showLetters, setShowLetters] = useState(true);

    


    return (
        <div id='loaderContainer'>
            <div id='logoBorder'>
                {showLetters && (
                    <>
                        <div className='logoLetter' id='logoLetterN'>N</div>
                    </>
                )}
                <div className='logoEHolder'>
                    <div className='logoE'></div>
                    <div className='logoE'></div>
                    <div className='logoE'></div>
                </div>

                {showLetters && (
                    <>
                        <div className='logoLetter'>S</div>
                        <div className='logoLetter'>S</div>
                    </>
                )}


            </div>
        </div>
    );
};

export default NessLoader;


