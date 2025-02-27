# adappt

Drag-and-Drop Shape Transformation Application

### Quick Start

`npm i`

To install dependenices

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Overview

- This application is built using Typescript and React.

- I chose to represent the coordinates of the shapes as a percentage of the windows view width and height. This was so that upon resizing the screen the shapes would remain in the same place proportionally.

- The shapes scale based on the view width to conform to different screens sizes such as mobile.

- The function handleDrag within my Shape component is triggered by the onDragEvent. Based on the coordinates of the users mouse when the shape is released it updates the shapes coordiantes.

- I included boundary checking to ensures users dont drag shapes beyond where they are accessible.

- I got the clip path values for my hexagon, triangle and square from https://css-generators.com/polygon-shape/
