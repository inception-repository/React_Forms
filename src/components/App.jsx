import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    // console.log("Changed");
    // console.log();
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
    setName(event.target.value);
  }

  function handleClicked(event) {
    setHeading(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <form onClick={handleClicked}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          // value={name}
        />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
