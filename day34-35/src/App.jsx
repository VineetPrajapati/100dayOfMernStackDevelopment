// Dec 13-14, 2024
// Day 34-35: Mini-Project Using Custom Hooks and Context
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./context/TaskContext";

const App = () => {
  return (
    <div className="bg-green-200 w-full h-screen flex justify-center items-center">
      <TaskProvider>
        <div className="bg-green-100 container mx-auto p-4 max-w-2xl rounded">
          <Header />
          <TaskForm />
          <TaskList />
        </div>
      </TaskProvider>
    </div>
  );
};

export default App;
