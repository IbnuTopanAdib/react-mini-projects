function Sidebar({ projects, onStartAddProject, onSelectProject }) {
    return (
      <aside className="h-screen w-full max-w-md px-6 py-8 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl shadow-lg flex flex-col">
        <h2 className="text-2xl font-bold mb-4 border-b border-stone-700 pb-2">
          Projects
        </h2>
        <button
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 text-white font-medium rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-stone-900"
          onClick={onStartAddProject }
        >
          + New Project
        </button>
        <ul className="mt-6 space-y-4">
          {projects.map((project, index) => (
            <li
              key={index}
                  className="py-3 px-4 bg-stone-800 hover:bg-stone-700 text-stone-50 font-medium rounded-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() => onSelectProject(project.id)}
            >
              {project.name}
            </li>
          ))}
        </ul>
      </aside>
    );
  }

  export default Sidebar;
