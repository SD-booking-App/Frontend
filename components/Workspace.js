import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';

function App() {
  const [shapes, setShapes] = useState([]);

  const handleAddSquare = () => {
    const newSquare = {
      id: `square-${shapes.length + 1}`,
      type: 'square',
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      angle: 0
    };
    setShapes([...shapes, newSquare]);
  };

  const handleAddCircle = () => {
    const newCircle = {
      id: `circle-${shapes.length + 1}`,
      type: 'circle',
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      angle: 0
    };
    setShapes([...shapes, newCircle]);
  };

  const handleCopy = (shape) => {
    const newShape = {
      ...shape,
      id: `${shape.id}-copy`,
      x: shape.x + 10,
      y: shape.y + 10
    };
    setShapes([...shapes, newShape]);
  };

  const handleDrag = (index, event, ui) => {
    const { x, y } = ui;
    const newShapes = [...shapes];
    newShapes[index] = { ...newShapes[index], x, y };
    setShapes(newShapes);
  };

  const handleResize = (index, direction, ref, delta, position) => {
    const { width, height } = ref.style;
    const newShapes = [...shapes];
    newShapes[index] = { ...newShapes[index], width, height };
    setShapes(newShapes);
  };

  const handleRotate = (index, angle) => {
    const newShapes = [...shapes];
    newShapes[index] = { ...newShapes[index], angle };
    setShapes(newShapes);
  };

  return (
    <div>
      <button onClick={handleAddSquare}>Add Square</button>
      <button onClick={handleAddCircle}>Add Circle</button>
      {shapes.map((shape, index) => {
        return (
          <Draggable
            key={shape.id}
            handle=".handle"
            onDrag={(event, ui) => handleDrag(index, event, ui)}
          >
            <ResizableBox
              className="box"
              width={shape.width}
              height={shape.height}
              onResize={(event, direction, ref, delta, position) =>
                handleResize(index, direction, ref, delta, position)
              }
            >
              <div
                className={`shape ${shape.type}`}
                style={{
                  transform: `rotate(${shape.angle}deg)`
                }}
              >
                <div className="handle"></div>
                <div className="copy" onClick={() => handleCopy(shape)}>
                  Copy
                </div>
              </div>
            </ResizableBox>
          </Draggable>
        );
      })}
    </div>
  );
}

export default App;