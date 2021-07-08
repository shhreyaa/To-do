import { filter } from "minimatch";
import React, { useState } from "react";
import "./App.css";
import AddList from "./Components/ToDo/AddList";
import DisplayList from "./Components/ToDo/DisplayList";
import Btnclass from "./Components/UI/Button.module.css";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addToDoListHandler = (todo, checked) => {
    setToDoList((prevList) => {
      return [
        ...prevList,
        {
          todo: todo,
          priority: checked,
          id: Math.random().toString(),
          complete: false,
        },
      ];
    });
  };
  const deleteHandler = (toDoId) => {
    const newTodos = toDoList.filter((i) => i.id !== toDoId);

    setToDoList(newTodos);
  };
  const doneHandler = (toDoId) => {
    let mapped = toDoList.map((task) => {
      return task.id === toDoId
        ? { ...task, complete: !task.complete }
        : { ...task };
    });

    setToDoList(mapped);
  };
  const filterHandler = () => {
    let filtered = toDoList.filter((task) => task.priority === true);
    setToDoList(filtered);
    console.log(filtered);
  };

  return (
    <div>
      <AddList onAddTodo={addToDoListHandler} />
      <button className={Btnclass.button} onClick={filterHandler}>
        {" "}
        Show only Priority{" "}
      </button>

      <DisplayList
        toDoList={toDoList}
        onDone={(id) => doneHandler(id)}
        delete={(id) => deleteHandler(id)}
      />
    </div>
  );
}

export default App;
