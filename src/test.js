import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();

    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <List todos={todos} />
      <Form
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onAddTodo={handleAddTodo}
      />
    </div>
  );
}

function List({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

function Form({ inputValue, onInputChange, onAddTodo }) {
  return (
    <form onSubmit={onAddTodo}>
      <input type="text" value={inputValue} onChange={onInputChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoList;
