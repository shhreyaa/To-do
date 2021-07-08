import React, { useState } from "react";
import "./DisplayList.css";
import Cards from "../UI/Cards";
import Button from "../UI/Button";
import btnClass from "../UI/Button.module.css";

const DisplayList = (props) => {
  if (props.toDoList.length === 0) {
    return <Cards className="users">Nothing to see here</Cards>;
  }
  
  return (
    <Cards className="users">
      <ul>
        {props.toDoList.map(({todo, id,complete}) => (
          <li key={id}>
             <span className={complete ? "strike" : ""}>
            {todo}
            </span>
            <button
              className={btnClass.button}
              onClick={() => props.onDone(id)}
            >
              Done
            </button>
            <button
              className={btnClass.button}
              onClick={() => props.delete(id)}
            >
              Delete{" "}
            </button>
          </li>
        ))}
      </ul>
    </Cards>
  );
};

export default DisplayList;
