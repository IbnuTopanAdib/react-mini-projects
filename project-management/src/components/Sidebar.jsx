function Sidebar({ projects,  onClickAddButton }) {
    return (
        <aside className="w-full max-w-sm px-6 py-8 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl shadow-lg">
            <h2 className="text-2xl font-bold">Projects</h2>
            <button
                className="mt-6 w-full py-2 px-4 bg-stone-800 hover:bg-stone-700 text-stone-50 font-medium rounded-md transition-colors duration-200"
                onClick={onClickAddButton}
            >
                New Project +
            </button>
            <ul className="mt-8 space-y-4">
                {projects.map((project, index) => (
                    <li
                        key={index}
                        className="py-3 px-4 bg-stone-800 hover:bg-stone-700 text-stone-50 font-medium rounded-md transition-transform transform hover:scale-105"
                    >
                        {project.name}
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Sidebar;
