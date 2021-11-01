import React from "react";
import ReactDOM from "react-dom";

// Build a react component
const App = () => {
    return (
        <div>
            <label className="" htmlFor="name">Enter a name:</label>
            <input type="text" id="name" />
            <button style={{ backgroundColor:"blue", color:"white" }}>Submit</button>
        </div>
    );
}
// take the component and display to the screen
ReactDOM.render(
  <App />,
  document.querySelector("#root")
);

