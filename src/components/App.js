import React from "react";
import Heading from "./heading";
import List from "./List";
import Greetings from "./Greetings";

const name = "Shreepad";
const age = 27;
const curDate = new Date();

const curYear = curDate.getFullYear();

function App() {
  return (
    <div>
      <Greetings />

      <h1>My Name is {name} </h1>
      <p>I am {age} years old</p>

      {/* inline style */}
      {/* <h1 style={customStyle} contentEditable="true" spellCheck="true">  */}

      {/* external style */}

      <Heading />

      <List />

      <p>Created By {name}</p>
      <p>Copyright {curYear}</p>
    </div>
  );
}

export default App;
