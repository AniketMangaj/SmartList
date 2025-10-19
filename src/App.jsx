import React, { useState } from "react";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import ProgressTracker from "./Components/ProgressTracker";

function App() {
  const [tasks, setTasks] = useState([]);

  // Add new task
  const addTask = (task) => {
    setTasks((prev) => [
      ...prev,
      { ...task, id: (crypto?.randomUUID && crypto.randomUUID()) || `${Date.now()}-${Math.random()}` },
    ]);
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Clear all tasks
  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <h1>Welcome to SmartList</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
      <ProgressTracker tasks={tasks} />
      <button className="clear-btn" onClick={clearTasks}>
        <span aria-hidden="true">🗑️</span>
        <span>Clear all</span>
      </button>

    </div>
  );
}

export default App;
