import React from "react";

export default function ProgressTracker({ tasks }) {
  const completed = tasks.filter((t) => t.completed).length;
  const total = tasks.length;
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="progress-tracker">
      <p>
        Completed {completed} of {total} tasks
      </p>
      <p>Progress: {progress}%</p>
      <div
        className="progress-bar"
        style={{
          width: "100%",
          background: "#ddd",
          height: "10px",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            background: "green",
            height: "100%",
            borderRadius: "5px",
          }}
        />
      </div>
    </div>
  );
}
