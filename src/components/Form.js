import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
export const Form = (props) => {
  const { setTodos } = props;

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");

  return (
    <article>
      <h2>TODO FORM</h2>
        <button class="btn">
        <Link to={"/Login"}className='signin'>logout</Link></button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newTodo = {
            id: Math.random(), 
            title,
            priority,
            status: false, 
          };
          setTodos((todos) => [...todos, newTodo]);
          setTitle("");
          setPriority("");
        }}
      >
        <input
          required 
          type="text"
          placeholder="Todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          required
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="" hidden>
            Select category
          </option>
          <option value="Home">Home</option>
            <option value="Office">Office</option>
            <option value="Shopping">Shopping</option>
            <option value="Gym">Gym</option>
        </select>
        <button>Submit</button>
      </form>
    </article>
  );
};
