import { useState } from "react";
import "./Shape.css";

function Shape({}) {
  let [coordinates, setCoordinates] = useState([x, y]);
  function asPercentage(value: Number) {
    return value.toString() + "%";
  }
  return (
    <div
      draggable="true"
      onDragEnd={(e) => {
        console.log(e);
        setCoordinates([
          ((e.pageX - 25) / window.innerWidth) * 100,
          ((e.pageY - 25) / window.innerHeight) * 100,
        ]);
      }}
      style={{
        left: asPercentage(coordinates[0]),
        top: asPercentage(coordinates[1]),
      }}
    >
      <polygon className="triangle" />
    </div>
  );
}

export default Shape;
