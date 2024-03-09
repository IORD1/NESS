// PoiList.jsx
import React from 'react';
import keys from "../keys.json";
import poiImpCate from "./assests.json";
import poiImpCate2 from "../poi.json";

const PoiList = () => {

const backgroundColors = ["#ec3a5a", "#fb8231","#20bf6b","#349cdb","#3e6dd7","#8c59d0","#5f8670","#ef4040","#a367b1","#65b741","#b2533e"];

const getRandomIndex = () => Math.floor(Math.random() * backgroundColors.length);







  const handleNameClick = (id, name) => {
    console.log(`Clicked on Parent ID: ${id}`);
    console.log({ name, id });
  };
    return (
        <div style={{padding:"20px"}}>
        <h2 style={{color:"black"}}>Ammenites : </h2>
        <div style={{display:'flex', flexWrap:"wrap", gap:"10px"}}>
            {poiImpCate.list.map((category) => (
            <div key={category.id}>
                 <button
                    onClick={() => handleNameClick(category.id, category.name)}
                    style={{
                        color: "white",
                        backgroundColor: backgroundColors[getRandomIndex()],
                        padding : "3px 8px 3px 8px",
                        borderRadius : "4px"

                    }}
                    >
                    {category.name}
                </button>
            </div>
            ))}
        </div>
        </div>
    );
    };

    export default PoiList;
