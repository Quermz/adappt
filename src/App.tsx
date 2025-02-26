import React from "react";
import "./App.css";
import Shape from "./components/Shape";

function App() {
  return (
    <div className="container">
      <Shape x={25} y={25} />
      <div className="quadrant topLeft" />
      <div className="quadrant topRight" />
      <div className="quadrant bottomLeft" />
      <div className="quadrant bottomRight" />
    </div>
  );
}

export default App;
