import React from "react";

export const TodoListItem = (props) => {
  const { todo, setTodos, setTodoToEdit } = props;
  return (
    <tr>
      <td>{todo.title}</td>
      <td>{todo.priority}</td>
      <td>
        <input type="checkbox" checked={todo.status} readOnly />
      </td>
      <td>
        <div style={{ display: "flex", gap: 20 }}>
          <button onClick={() => setTodoToEdit(todo)}>Edit</button>
          <button
            onClick={() =>
              setTodos((todos) =>
                todos.filter((todoToCheck) => todo.id !== todoToCheck.id)
              )
            }>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};
