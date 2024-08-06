import React from "react";

export const EditModal = (props) => {
  const { setTodos, todoToEdit, setTodoToEdit } = props;
  return (
    <dialog open>
      <article>
        <h2>Edit todo</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setTodos((prevTodos) =>
              prevTodos.map((prevTodo) => {
                if (prevTodo.id === todoToEdit.id) {
                  return todoToEdit;
                }
                return prevTodo;
              })
            );
            setTodoToEdit(null);
          }}
        >
          <label htmlFor="title">Title</label>
          <input
            id="title"
            required
            type="text"
            value={todoToEdit.title}
            onChange={(e) =>
              setTodoToEdit((prevTodoToEdit) => ({
                ...prevTodoToEdit,
                title: e.target.value,
              }))
            }
          />
          <label htmlFor="priority">Category</label>
          <select
            id="priority"
            value={todoToEdit.priority}
            onChange={(e) =>
              setTodoToEdit((prevTodoToEdit) => ({
                ...prevTodoToEdit,
                priority: e.target.value,
              }))
            }
          >
            <option value="Home">Home</option>
            <option value="Office">Office</option>
            <option value="Shopping">Shopping</option>
            <option value="Gym">Gym</option>
          </select>
          <label htmlFor="status">Status</label>
          <input
            id="status"
            type="checkbox"
            checked={todoToEdit.status}
            onChange={(e) =>
              setTodoToEdit((prevTodoToEdit) => ({
                ...prevTodoToEdit,
                status: e.target.checked,
              }))
            }
          />
          <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setTodoToEdit(null)}>
              Cancel
            </button>
          </div>
        </form>
      </article>
    </dialog>
  );
};
