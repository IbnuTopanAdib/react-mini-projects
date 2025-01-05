import InputProject from "./components/InputProject";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import NoSelectedProject from "./components/NoSelectedProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddProject(project) {
    const projectId = Math.random();
    const newProject = { ...project, id: projectId };
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      }
    })
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(projectId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }

  function handleAddTask(task) {
    const taskId = Math.random();
    const newTask = {
      id: taskId,
      projectId: projectsState.selectedProjectId,
      task: task,
    };
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onAddTask={handleAddTask}
      tasks={projectsState.tasks}
      onDeleteProject={handleDeleteProject}
      onDeleteTask={handleDeleteTask}
    />
  );



  if (projectsState.selectedProjectId === null) {
    content = (
      <InputProject onAddProject={handleAddProject} onCancelAddProject={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = (
      <NoSelectedProject onStartAddProject={handleStartAddProject} />
    );
  }



  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          projects={projectsState.projects}
          onStartAddProject={handleStartAddProject}
          onSelectProject={handleSelectProject}
        />
        {content}
      </main>
    </>
  );
}

export default App;
