import React from "react";
import Classes from "./Cards.module.css";

const Cards = (props) => {
  return (
    <div className={`${Classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Cards;

// import React from 'react'
// import Classes from "./Cards.module.css"

// const Cards = (props)=>{return (
//     <div className= {`${Classes.card} ${props.className}`} >
//     {props.children}</div>
// )}

// export default Cards
