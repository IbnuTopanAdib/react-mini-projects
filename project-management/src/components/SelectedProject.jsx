import Task from "./Task";

function SelectedProject({ project, onAddTask, onDeleteProject, onDeleteTask, tasks }) {

    const selectedTasks = tasks.filter(task => task.projectId === project.id);

    return (
        <div className="flex flex-col w-full h-full max-w-4xl m-auto px-6 py-8 bg-white rounded-lg shadow-lg">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-700">{project.name || "Project Name"}</h1>
                <button
                    onClick={onDeleteProject}
                    className="py-2 px-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition duration-200"
                >
                    Delete Project
                </button>
            </div>
            <p className="text-stone-500 mb-4">{project.dueDate || "Project Date"}</p>
            <p className="text-gray-500 mb-6">{project.description || "Project Description"}</p>
            <hr className="mb-6" />

            {/* Tasks Section */}
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Tasks</h2>
            <Task onAddTask={onAddTask} tasks={selectedTasks} onDeleteTask ={onDeleteTask} />
        </div>
    );
}

export default SelectedProject;
