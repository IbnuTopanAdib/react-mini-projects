import { useState, useRef } from "react";

export default function Player() {
  const [name, setName] = useState("");
  const enteredName = useRef();

  function handleSetName() {
    setName(enteredName.current.value);
    enteredName.current.value = "";
  }


  return (
    <section id="player">
      <h2>Welcome {name ? name : "Unknown Entity"}</h2>
      <p>
        <input type="text" ref={enteredName}/>
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
