
import React, { useState } from "react";
import "./DisplayList.css";
import Cards from "../UI/Cards";
import Button from "../UI/Button";
import btnClass from '../UI/Button.module.css'


const DisplayList = (props) => {
    const [isDone,setIsDone] = useState(false)
    const[isDeleted,setIsDeleted] =useState(false)
      const deleteHandler = (props) => {
        // const id = props.toDoList[id]
   props.onDelete()
      };
     
      if(props.toDoList.length ===0 ){
          return <Cards className='users'>
              Nothing to see here
          </Cards>
      }
  return (
    <Cards className={`users ${isDone ? "done" : ""}`}>
      <ul>
        {props.toDoList.map((toDoItem) => (
          <li key={toDoItem.id}>
            {toDoItem.todo}
            <button className={btnClass.button} >
              Done
            </button>
            <button
              className={btnClass.button}
              onClick={deleteHandler}
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
