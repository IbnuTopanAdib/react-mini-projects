import noProjectImage from '../assets/no-projects.png';

function NoSelectedProject({ onStartAddProject }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center m-auto">
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="w-40 h-40 object-contain mb-8"
      />
      <h2 className="text-2xl font-bold text-gray-700 mb-2">
        No Project Selected
      </h2>
      <p className="text-gray-500 mb-6">
        Select a project or get started with a new one
      </p>
      <button
        onClick={onStartAddProject}
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Create New Project
      </button>
    </div>
  );
}

export default NoSelectedProject;
