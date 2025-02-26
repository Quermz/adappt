import React from "react";
import "./App.css";
import Shape from "./components/Shape";

function App() {
  return (
    <div className="container">
      <Shape x={10} y={10} />
      <Shape x={40} y={10} />
      <Shape x={10} y={40} />
      <Shape x={25} y={25} />
      <Shape x={40} y={40} />
      <div className="quadrant topLeft" />
      <div className="quadrant topRight" />
      <div className="quadrant bottomLeft" />
      <div className="quadrant bottomRight" />
    </div>
  );
}

export default App;
