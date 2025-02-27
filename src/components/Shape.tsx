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
  //Change shape based on coordinates
  function findShapeType() {
    let [x, y] = [...coordinates];
    if (x >= 50 && y > 50) {
      return "triangle";
    } else if (x > 50 && y < 50) {
      return "hexagon";
    } else if (x < 50 && y > 50) {
      return "square";
    }
    return "circle";
  }

  function handleDrag(e: React.DragEvent<HTMLDivElement>) {
    let x = checkBounds((e.pageX / window.innerWidth) * 100);

    let y = checkBounds((e.pageY / window.innerHeight) * 100);

    setCoordinates([x, y]);
  }

  //Ensure user does not move shape completely out of view
  function checkBounds(coordinate: number) {
    if (coordinate > 100) {
      return 100;
    } else if (coordinate < 0) {
      return 0;
    }
    return coordinate;
  }
  return (
    <div
      className="shapeContainer"
      draggable="true"
      onDragEnd={handleDrag}
      style={{
        position: "absolute",
        left: asPercentage(coordinates[0]),
        top: asPercentage(coordinates[1]),
      }}
    >
      <div className={"shape " + findShapeType()} />
    </div>
  );
}

export default Shape;
