import React from "react";
import "./App.css";
import Shape from "./components/Shape";

function App() {
  return (
    <div className="container">
      <Shape />
      <div className="quadrant topLeft" />
      <div className="quadrant topRight" />
      <div className="quadrant bottomLeft" />
      <div className="quadrant bottomRight" />
    </div>
  );
}

export default App;
