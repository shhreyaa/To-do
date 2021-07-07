import React, { useState } from "react";
import Button from "../UI/Button";
import Cards from "../UI/Cards";
import Classes from "./AddList.module.css";

const AddList = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const[checked,setChecked]=useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredTodo.trim().length === 0) {
      return;
    }
    console.log(enteredTodo);
    console.log(checked);
    props.onAddTodo(enteredTodo, checked);
    setEnteredTodo("");
    setChecked(false)
  };
  const todoHandler = (event) => {
    setEnteredTodo(event.target.value);
  };
  const priorityHandler = (event) => {
    setChecked(!checked);
    
    
  };
  return (
    <Cards className={Classes.input}>
      <form onSubmit={submitHandler}>
        <label>Enter your to-do for today</label>
        <input type="text" value={enteredTodo} onChange={todoHandler}></input>
        <label > High Priority </label>
        <input
          type="checkbox"
          id="priority"
          name="high"
        checked={checked}
          value="priority"
          onChange = {priorityHandler}
        ></input>

        <Button type="submit"> Submit </Button>
      </form>
    </Cards>
  );
};

export default AddList;
