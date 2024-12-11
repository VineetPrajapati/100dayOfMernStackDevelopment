import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") return;

    addTask({ id: Date.now(), title: task });
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="w-full p-4 h-20 flex justify-between">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task"
          className="border p-2 w-full rounded-l-lg"
        />
        <button type="submit" className="w-1/3 bg-blue-500 hover:bg-blue-600 p-2 text-white rounded-r-lg">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
