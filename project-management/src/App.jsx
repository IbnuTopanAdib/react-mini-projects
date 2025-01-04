import InputProject from "./components/InputProject";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);
  const [addButtonClicked, setAddButtonClicked] = useState(false);

  function addProject(project) {
    setProjects((prevProjects) => {
      return [...prevProjects, project];
    });
  }

  function handleAddButton() {
    setAddButtonClicked(true);
  }



  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar projects={projects} onClickAddButton={ handleAddButton } />
        {<InputProject addProject={addProject} />}
      </main>
    </>
  );
}

export default App;
