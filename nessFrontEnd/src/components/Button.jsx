import React from 'react';
import './styles/button.css';


const Button = ({ text, onClick, style, ...otherProps }) => {
  const defaultStyle = {
    display : "flex",
    flexDirection: "row",
    justifyContent : "center",
    fontWeight: "900",
    alignItems : "center",
    padding : '14px 47px',
    gap : '8px',
    width: "auto",
    height: "66px",

    borderRadius: "16px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontSize: "17px",
    lineHeight: "23px",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#D9D9D9",

  };

  const mergedStyle = { ...defaultStyle, ...style };

  return (
    <button id='buttonunit' onClick={onClick} style={mergedStyle} {...otherProps}>
      {text}
    </button>
  );
};

export default Button;


