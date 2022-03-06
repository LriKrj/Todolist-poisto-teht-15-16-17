import React, { useState } from "react";
import "./App.css";

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
      <table>
        <tr>
          <th>Date</th>
          <th>Description</th>
        </tr>

        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.date}</td>
              <td>{todo.desc}</td>
              <td>
                <button onClick={() => deleteClicked(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
