import { useState } from "react";
import "./Shape.css";

interface shapeCoordinates {
  x: number;
  y: number;
}

function Shape(props: shapeCoordinates) {
  let [coordinates, setCoordinates] = useState([props.x, props.y]);
  function asPercentage(value: Number) {
    return value.toString() + "%";
  }
  // function findShapeType() {
  //   let [x, y] = [...coordinates];
  //   if(x>=50 && test)
  // }
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
        position: "absolute",
        left: asPercentage(coordinates[0]),
        top: asPercentage(coordinates[1]),
      }}
    >
      <div className="circle" />
    </div>
  );
}

export default Shape;
