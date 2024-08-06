import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dashboard from'./dashboard.css';
const Dashboard = () => {
  const [tasks, setTasks] = useState({
    home: { total: 10, completed: 7 },
    office: { total: 8, completed: 4 },
    shopping: { total: 6, completed: 3 },
  });

  const calculatePercentage = (completed, total) => {
    return total === 0 ? 0 : Math.round((completed / total) * 100);
  };

  const handleInputChange = (category, field, value) => {
    setTasks((prevTasks) => {
      const newValue = Number(value);
      const newTasks = { ...prevTasks };

      if (field === 'completed' && newValue > newTasks[category].total) {
        newTasks[category][field] = newTasks[category].total;
      } else {
        newTasks[category][field] = newValue;
      }

      return newTasks;
    });
  };

  return (
    <div className="dashboard">
      <h1>Task Completion Dashboard</h1>
      <Link to="/Home" className="home-button">Back</Link>
      {Object.keys(tasks).map((category) => (
        <div key={category} className="category">
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${calculatePercentage(tasks[category].completed, tasks[category].total)}%` }}
            ></div>
          </div>
          <p>{calculatePercentage(tasks[category].completed, tasks[category].total)}%</p>
          <div className="input-group">
            <label>
              Total tasks:
              <input
                type="number"
                min="0"
                value={tasks[category].total}
                onChange={(e) => handleInputChange(category, 'total', e.target.value)}
              />
            </label>
            <label>
              Completed tasks:
              <input
                type="number"
                min="0"
                max={tasks[category].total}
                value={tasks[category].completed}
                onChange={(e) => handleInputChange(category, 'completed', e.target.value)}
              />
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Dashboard;