import React from "react";

export default function TaskForm({ addTask }) {
  const [task, setTask] = React.useState("");
  const [priority, setPriority] = React.useState("medium");
  const [category, setCategory] = React.useState("personal");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask({ text: task, priority, category, completed: false });
      setTask("");
      setPriority("medium");
      setCategory("personal");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div>
        <input
          type="text"
          placeholder="Enter your task here"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </div>
      <div>
        <label>
          Priority:
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <label>
          Category:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="others">Others</option>
          </select>
        </label>
      </div>
    </form>
  );
}
