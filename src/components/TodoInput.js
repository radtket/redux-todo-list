import React, { useState } from "react";
import uuid from "uuid/v4";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../actions/todos";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const addTodo = newTodo => dispatch(addTodoAction(newTodo));

  const onChange = ({ target }) => {
    setTodo(target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const isTodoBlank = todo.trim() === "";

    if (isTodoBlank) {
      return;
    }

    addTodo({
      id: uuid(),
      name: todo,
      complete: false,
    });

    setTodo("");
  };

  return (
    <form {...{ onSubmit }}>
      <div className="form-div">
        <input
          name="todo"
          onChange={onChange}
          placeholder="Add a todo"
          type="text"
          value={todo}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default TodoInput;
