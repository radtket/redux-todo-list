import React from "react";
import "./App.css";

// Inputs
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="main">
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
