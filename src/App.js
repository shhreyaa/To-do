
import React, { useState } from "react";
import "./App.css";
import AddList from "./Components/ToDo/AddList";
import DisplayList from "./Components/ToDo/DisplayList";
import Btnclass from "./Components/UI/Button.module.css";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [useFilter, setUseFilter] = useState(false);

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

  const filterChangeHandler = () => {
    const priorityTask = toDoList.filter((task) => {
      return task.priority === true;
    });
    setUseFilter(true);
    setFilterList(priorityTask);
    console.log(filterList);
    console.log(useFilter);
  };
  const allChangeHandler=()=> {
     setUseFilter(false);

  }

  return (
    <div>
      <AddList onAddTodo={addToDoListHandler} />
      <button className={Btnclass.button} onClick={filterChangeHandler}>
        {" "}
        Show only Priority{" "}
      </button>
      <button className={Btnclass.button} onClick={allChangeHandler}>
        {" "}
        Show all{" "}
      </button>
      {useFilter === true ? (
        <DisplayList
          // toDoList={useFilter ? {toDoList}:{filterList}}
          toDoList={filterList}
          onDone={(id) => doneHandler(id)}
          delete={(id) => deleteHandler(id)}
        />
      ) : (
        <DisplayList
          // toDoList={useFilter ? {toDoList}:{filterList}}
          toDoList={toDoList}
          onDone={(id) => doneHandler(id)}
          delete={(id) => deleteHandler(id)}
        />
      )}
    </div>
  );
}

export default App;
