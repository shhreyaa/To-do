import React, { useState } from "react";
import "./App.css";
import AddList from "./Components/ToDo/AddList";
import DisplayList from "./Components/ToDo/DisplayList";

function App() {
  const [toDoList, setToDoList] = useState([]);
 

  const addToDoListHandler = (todo,checked) => {
    setToDoList((prevList) => {
      return [
        ...prevList,
        {
          todo: todo,
          priority:checked,
          id: Math.random().toString(),
        },
      ];
    });
  };
  const deleteHandler = (toDoId)=>{
  const newTodos = toDoList.filter((_, id) => id !== toDoId);

  setToDoList(newTodos);


  }
 

  return (
    <div>
      <AddList onAddTodo={addToDoListHandler} />
      <DisplayList toDoList={toDoList} onDelete={deleteHandler}/>
    </div>
  );
}

export default App;
