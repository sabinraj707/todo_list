import { Link } from 'react-router-dom';
export const Filters = (props) => {
  const { filters, setFilters } = props;
  return (
    <article>
      <h2>Filters</h2>
      <button class="btn">
        <Link to={"/Dashboard"}className='signin'>progres</Link></button>
      <form
        style={{ display: "flex", gap: 20 }}
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <label htmFor="title">Title</label>

          <input
            required
            type="text"
            placeholder="Enter title you search"
            value={filters.title}
            onChange={(e) =>
              setFilters((prev) => {
                return { ...prev, title: e.target.value };
              })
            }
          />
        </div>
        <div>
          <label htmFor="category">category</label>
          <select
            required
            value={filters.priority}
            onChange={(e) =>
              setFilters((prev) => {
                return { ...prev, priority: e.target.value };
              })
            }
          >
            <option value="all">All</option>
            <option value="Home">Home</option>
            <option value="Office">Office</option>
            <option value="Shopping">Shopping</option>
            <option value="Gym">Gym</option>
          </select>
        </div>

        <div>
          <label htmFor="status">Status</label>

          <select
            required
            value={filters.status}
            onChange={(e) =>
              setFilters((prev) => {
                return { ...prev, status: e.target.value };
              })
            }
          >
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="todo">Todo</option>
          </select>
        </div>
      </form>
    </article>
  );
};
