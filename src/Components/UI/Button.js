import React from "react";
import Classes from './Button.module.css'
const Button = (props) => {
  
  return <button className={Classes.button}>{props.children}</button>;
};

export default Button;
