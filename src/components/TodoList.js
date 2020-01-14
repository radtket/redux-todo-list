import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodoAction, deleteTodoAction } from "../actions/todos";

const TodoList = () => {
  const { todos } = useSelector(state => {
    return state.todos;
  });

  const dispatch = useDispatch();

  const toggleTodo = todoId => dispatch(toggleTodoAction(todoId));
  const deleteTodo = todoId => dispatch(deleteTodoAction(todoId));

  return (
    <ul className="todo-list">
      {todos.map(({ id, complete, name }) => (
        <li key={id}>
          <input
            checked={complete}
            onChange={() => {
              toggleTodo(id);
            }}
            type="checkbox"
          />
          <span className={complete ? "complete" : null}>{name}</span>
          <button
            className="delete-button"
            onClick={() => {
              deleteTodo(id);
            }}
            type="button"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
