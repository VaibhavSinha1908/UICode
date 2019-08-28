//import the react and react-dom libraries.

import React from "react";

import ReactDOM from "react-dom";

// function getButtonText() {
//   return "Click On Me!";
// }

//create a react component.
const App = () => {
  const buttonText = { text: "Click Me" };

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" type="text"></input>
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

//take a react component and show it on screen.
ReactDOM.render(<App></App>, document.querySelector("#root"));
