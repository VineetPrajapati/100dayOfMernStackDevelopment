import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, deleteTask, toggleTaskCompletion } = useContext(TaskContext);
  return (
    <div className="mt-6">
      <h2 className="text-3xl p-2 px-4 font-bold">Your Tasks: </h2>
      <ul className="space-y-2 p-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-white p-2 px-4 rounded"
          >
            <span
              className={`flex-1 cursor-pointer text-xl font-normal ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
              onClick={() => toggleTaskCompletion(task.id)}
            >
              {task.title}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 text-xl font-medium hover:underline ml-4"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
