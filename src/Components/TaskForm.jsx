import React from 'react';

export default function TaskForm() {
  return (
    <form>
      <div>
        <input type="text" placeholder="Enter your task here"/>
        <button type='submit'>Add Task</button>
      </div>
      <div>
        <label>
          Priority:
          <select>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
      </div>
      <div>
        <label>
            Category:
            <select>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="others">Others</option>
            </select>
        </label>
      </div>
    </form>
  );
}
