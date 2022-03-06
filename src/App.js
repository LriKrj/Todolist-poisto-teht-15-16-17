import React, { useState } from "react";
import "./App.css";
import Todotable from "./components/todotable";

function App() {
  const [desc, setDesc] = useState({ desc: "", date: "" });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setDesc({ ...desc, [event.target.name]: event.target.value });
  };

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, desc]);
  };

  const deleteClicked = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <label>Description:</label>
        <input
          type="text"
          name="desc"
          value={desc.desc}
          onChange={inputChanged}
        />
        <label>Date:</label>
        <input
          type="text"
          name="date"
          value={desc.date}
          onChange={inputChanged}
        ></input>
        <input type="submit" value="Add" />
      </form>
      <Todotable todos={todos} delete={deleteClicked} />
      
    </div>
  );
}

export default App;
