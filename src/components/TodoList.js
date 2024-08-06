import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = (props) => {
  const { todos, setTodos, setTodoToEdit } = props;

  if (todos.length === 0) {
    return (
      <article>
       <p>Todo list is empty. Use form above 👆 to add some todos.</p>
      </article>
    );
  }

  return (
    <article>
      <h2>Todo list</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              setTodos={setTodos}
              setTodoToEdit={setTodoToEdit}
            />
          ))}
        </tbody>
      </table>
    </article>
  );
};
