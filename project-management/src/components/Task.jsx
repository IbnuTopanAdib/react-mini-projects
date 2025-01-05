import TextInput from "./Inputs/TextInput";
import { useState } from "react";

function Task({ onAddTask, tasks, onDeleteTask }) {

    console.log(tasks);
    const [task, setTask] = useState("");
    const [error, setError] = useState("");

    function handleChange(event) {
        setTask(event.target.value);
    }

    function handleError() {
        if (!task.trim()) {
            return "Task is required";
        }
        return "";
    }

    function handleSubmit(event) {
        event.preventDefault();
        const error = handleError();
        if (error) {
            setError(error);
            return;
        }
        onAddTask(task);
        setTask("");
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="flex items-center gap-4">
                <TextInput
                    name="task"
                    placeholder="Enter task"
                    onChange={handleChange}
                    value={task || ""}
                    error={error}
                />
                <button
                    className="py-2 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-200"
                >
                    Add
                </button>
            </form>
            {tasks.length > 0 && (
                <ul className="mt-6 space-y-2 bg-gray-100 p-4 rounded-md shadow-md">
                    {tasks.map((task, index) => (
                        <li key={task.id || index} className="flex text-gray-800 font-bold border-b border-gray-200 py-2">
                            {task.task || "Unnamed Task"}
                            <button
                                className="ml-auto text-red-600 hover:text-red-700 focus:outline-none"
                                onClick={() => onDeleteTask(task.id)}
                            >Clear</button>
                        </li>
                    ))}
                </ul>
            )}


        </>
    );
}

export default Task;
