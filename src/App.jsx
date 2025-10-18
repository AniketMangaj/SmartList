import ProgessTracker from "./Components/ProgessTracker";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <div className="App">
      <h1>Welcome to SmartList</h1>
      <TaskForm />
      <TaskList />
      <ProgessTracker />
      <button>Clear All Tasks</button>  
    </div>
  );
}

export default App;