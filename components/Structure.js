// import { useState } from 'react';
// import { ResizableBox } from 'react-resizable';
// import Draggable from 'react-draggable';
// // import { FaRocket } from 'react-icons/fa';

// const Structure = () => {
//   const [boxes, setBoxes] = useState([
//     // { id: 'box1', position: { x: 20, y: 20 }, size: { width: 200, height: 150 }, content: 'Box 1' },
//     // { id: 'box2', position: { x: 240, y: 20 }, size: { width: 200, height: 150 }, content: 'Box 2' },
//     // { id: 'box3', position: { x: 460, y: 20 }, size: { width: 200, height: 150 }, content: 'Box 3' },
//     // { id: 'box4', position: { x: 680, y: 20 }, size: { width: 200, height: 150 }, content: 'Box 4' },
//   ]);

//   const onResize = (index, size) => {
//     setBoxes((prevBoxes) => {
//       const newBoxes = [...prevBoxes];
//       newBoxes[index].size = size;
//       return newBoxes;
//     });
//   };

//   const onStop = (index, event, data) => {
//     setBoxes((prevBoxes) => {
//       const newBoxes = [...prevBoxes];
//       newBoxes[index].position = { x: data.x, y: data.y };
//       return newBoxes;
//     });
//   };



//   const INITIAL_POSITION = { x: 20, y: 20 };

//   const addBox = () => {
//     const newBox = {
//       id: `box${boxes.length + 1}`,
//       position: INITIAL_POSITION,
//       size: { width: 200, height: 150 },
//       content: `Desk ${boxes.length + 1}`,
//       className: "Desk-icon",
//     };
//     setBoxes([...boxes, newBox]);
//   };
// console.warn(boxes)

// const boxElements = boxes.map((box, index) => (
  
//   <Draggable key={box.id} handle=".drag-handle" defaultPosition={box.position} onStop={(event, data) => onStop(index, event, data)}>
//     <ResizableBox width={box.size.width} height={box.size.height} onResize={(event, { size }) => onResize(index, size)} className="grid-box">
//       <div className="content drag-handle">
//         {/* <div className="drag-handle">Drag</div> */}
//         {box.content}
//       </div>
//     </ResizableBox>
//   </Draggable>
// ));


//   return (
//     <div className="grid-container mt-[10px] ">
//       <div className="grid-workspace flex flex-center justify-center ml-[300px]">
//         {boxElements}
//       </div>
//       <div className="fixed">
//         <div className="Desk-icon" onClick={addBox}>
//           <img src="./assets/logo.png" alt="BigCo Inc. logo" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Structure;

import { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import Draggable from 'react-draggable';

const Structure = () => {
  const [boxes, setBoxes] = useState([]);

  const [selectedBoxes, setSelectedBoxes] = useState([]);

  const onResize = (index, size) => {
    setBoxes((prevBoxes) => {
      const newBoxes = [...prevBoxes];
      newBoxes[index].size = size;
      return newBoxes;
    });
  };

  const onStop = (index, event, data) => {
    setBoxes((prevBoxes) => {
      const newBoxes = [...prevBoxes];
      newBoxes[index].position = { x: data.x, y: data.y };
      if (newBoxes[index].group) {
        newBoxes[index].group.forEach((box) => {
          const i = prevBoxes.indexOf(box);
          newBoxes[i].position = { x: box.position.x + data.x - box.groupOffset.x, y: box.position.y + data.y - box.groupOffset.y };
        });
      }
      return newBoxes;
    });
  };

  const handleClick = (event, box) => {
    if (event.shiftKey) {
      if (selectedBoxes.includes(box.id)) {
        setSelectedBoxes((prevSelectedBoxes) =>
          prevSelectedBoxes.filter((selectedBox) => selectedBox !== box.id)
        );
      } else {
        setSelectedBoxes((prevSelectedBoxes) => [...prevSelectedBoxes, box.id]);
      }
    } else {
      setSelectedBoxes([box.id]);
    }
  };



  const INITIAL_POSITION = { x: 20, y: 20 };

  const addBox = () => {
    const newBox = {
      id: `box${boxes.length + 1}`,
      position: INITIAL_POSITION,
      size: { width: 200, height: 150 },
      content: `Desk ${boxes.length + 1}`,
      className: "desk-box",
      selected:false,
    };
    setBoxes([...boxes, newBox]);
  };

  

  const handleBoxClick = (boxId) => {
    const isSelected = selectedBoxes.includes(boxId);
    if (isSelected) {
      setSelectedBoxes(selectedBoxes.filter(id => id !== boxId));
    } else {
      setSelectedBoxes([...selectedBoxes, boxId]);
    }
  };  
  
  const handleContextMenu = (event) => {
    event.preventDefault();
    if (selectedBoxes.length > 0) {
      const group = selectedBoxes.map((index) => boxes[index]);
      setBoxes([...boxes.filter((_, i) => !selectedBoxes.includes(i)), { group }]);
      setSelectedBoxes([]);
    }
  };
  
  const boxElements = boxes.map((box, index) => (
    <Draggable
      key={box.id}
      handle=".drag-handle"
      defaultPosition={box.position}
      onStop={(event, data) => onStop(index, event, data)}
    >
      <ResizableBox
        width={box.size.width}
        height={box.size.height}
        onResize={(event, { size }) => onResize(index, size)}
        className={`grid-box ${box.selected ? "selected" : ""}`}
        onClick={() => {
          if (selectedBoxes.includes(index)) {
            setSelectedBoxes(selectedBoxes.filter((i) => i !== index));
          } else {
            setSelectedBoxes([...selectedBoxes, index]);
          }
        }}
      >
        <div className="content drag-handle">{box.content}</div>
      </ResizableBox>
    </Draggable>
  ));

  return (
    <div className="grid-container" onContextMenu={handleContextMenu}>
    <div className="grid-workspace">{boxElements}</div>
    <div className="absolute top-[200px] left-[820px]">
      <div className="Desk-icon" onClick={addBox}>
        <img src="./assets/logo.png" alt="BigCo Inc. logo" />
      </div>
    </div>
  </div>
  );
};

export default Structure;