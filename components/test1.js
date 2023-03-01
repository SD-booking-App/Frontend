

// import Draggable from "react-draggable";
// function App(){
  // const eventLogger = (e, data) => {
  //   localStorage.setItem('defaultPosition', { valueX: parseFloat(data.x), valueY: parseFloat(data.y )});
  //   console.log(data);
  // };
//   return(
  //   <div>
  //   <Draggable defaultPosition={{ x: 0, y: 0 }} onStop={eventLogger}>
  //   <h2 style={{ cursor: 'grab' }}>
  //     dragable
  //   </h2>
  // </Draggable>
  //     </div>
//   );
// }
// export default App

// import { Grid, Card, Text } from "@nextui-org/react";

// export default function App() {
//   const MockItem = ({ text }) => {
//     return (
//       <Card css={{ h: "$20", $$cardColor: '$colors$primary' }}>
//         <Card.Body>
//           <Text h6 size={15} color="white" css={{ m: 0 }}>
//             {text}
//           </Text>
//         </Card.Body>
//       </Card>
//     );
//   };
//   return (
//     <Grid.Container gap={2} justify="center">
//       <Grid xs={6}>
//         <MockItem text="1 of 2" />
//       </Grid>
//       <Grid xs={6}>
//         <MockItem text="2 of 2" />
//       </Grid>
//       <Grid xs={6}>
//         <MockItem text="1 of 3" />
//       </Grid>
//       <Grid xs={3}>
//         <MockItem text="2 of 3" />
//       </Grid>
//       <Grid xs={3}>
//         <MockItem text="3 of 3" />
//       </Grid>
//       <Grid xs={3}>
//         <MockItem text="1 of 4" />
//       </Grid>
//       <Grid xs={3}>
//         <MockItem text="2 of 4" />
//       </Grid>
//       <Grid xs={3}>
//         <MockItem text="3 of 4" />
//       </Grid>
//       <Grid xs={3}>
//         <MockItem text="4 of 4" />
//       </Grid>
//       <Grid xs={3}>
//         <MockItem text="1 of 3" />
//       </Grid>
//       <Grid xs={6}>
//         <MockItem text="2 of 3" />
//       </Grid>
//       <Grid xs={3}>
//         <MockItem text="3 of 3" />
//       </Grid>
//     </Grid.Container>
//   );
// }

// import React from 'react';
// import Draggable from 'react-draggable';
// import { useState } from "react";
// import { Resizable } from "re-resizable";
// export default function App() {
  // const [state, setState] = useState({ width: 320, height: 200 });
  // const eventLogger = (e, data) => {
  //   localStorage.setItem('defaultPosition', { valueX: parseFloat(data.x), valueY: parseFloat(data.y )});
  //   console.log(data);
  // };
  // console.log(state)
//   return (
  //   <div style={{ display: 'block', width: 700, padding: 30 }}>
  //     <h4>React-Draggable Module</h4>
  //     <div style={{ width: 660, height: 'auto' }}>
  //     <div>
  //   <Draggable defaultPosition={{ x: 0, y: 0 }} onStop={eventLogger}>
  //   <h2 style={{ cursor: 'grab' }}>
  //   <Resizable
  //        style={{ marginLeft: 500, marginTop: 200, border: "1px solid black" }}
  //        size={{ width: state.width, height: state.height }}
  //        onResizeStop={(e, direction, ref, d) => {
  //           setState({
  //              width: state.width + d.width, height: state.height + d.height,});
  //           }}>
  //        Sample with size
  //     </Resizable>
  //   </h2>
  // </Draggable>
  //     </div>
  //     </div>
  //   </div>
//   );
// }

// final code

// import { FaRocket } from 'react-icons/fa';
// import React from 'react';
// import Draggable from 'react-draggable';
// import { useState } from "react";
// import { Resizable } from "re-resizable";
// function IconWorkspace() {
//   const [icons, setIcons] = useState([]);
//   const [nextId, setNextId] = useState(1);
//   // const [layout,setLayout]=useState([])
//   // const [lis,setLis]=useState([]);
//   console.warn(icons)

//   const handleAddIcon = () => {
//     const newIcon = { id: nextId, url:"Desk",layout:{i: 'a', x: 0, y: 0, w: 1, h: 2} }; // Hardcoded icon URL
//     setIcons([...icons, newIcon]);
//     setNextId(nextId + 1); // Increment the counter for the next ID
    
//   };

//   const handleRemoveIcon = (id) => {
//     setIcons(icons.filter((icon) => icon.id !== id));
//   };
//   const [state, setState] = useState({ width: 320, height: 200 });
//   const eventLogger = (e, data) => {
//     localStorage.setItem('defaultPosition', { valueX: parseFloat(data.x), valueY: parseFloat(data.y )});
//     console.log(data);
//   };
//   console.log(state)

//   return (
//     <div style={{ backgroundColor: "lightgray", padding: "20px" ,width:"1200px",height:"700px",margin:"150px"}}>
//       <h1>Icon Workspace</h1>
//       <button onClick={handleAddIcon}>
//         <FaRocket />
//       </button>
//       <div style={{ display: "flex", flexWrap: "wrap" }}>
//           {icons.map((icon) => (
//             <div key={icon.id} style={{ margin: "10px" }}>
//                 <div style={{ display: 'block', width: 700, padding: 30 }}>
//                 {/* <h4>React-Draggable Module</h4> */}
//                   <div style={{ width: 660, height: 'auto' }}>
//                     <div>
//                       <Draggable defaultPosition={{ x: 0, y: 0 }} onStop={eventLogger}>
//                         <h2 style={{ cursor: 'grab' }}>
//                           <Resizable
//                             style={{ marginLeft: 500, marginTop: 200, border: "1px solid black" }}
//                             size={{ width: state.width, height: state.height }}
//                             onResizeStop={(e, direction, ref, d) => {
//                             setState({
//                             width: state.width + d.width, height: state.height + d.height,});
//                           }}>
//                             Sample with size
//                           </Resizable>
//                         </h2>
//                       </Draggable>
//                     </div>
//                   </div>
//                 </div>
//             </div>
//         ))}
//       </div>
//       <div>
//         <ul>
//           {icons.map((icon) => (
//             <li key={icon.id}>{icon.id}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default IconWorkspace;


// import React, { useState } from 'react';
// import { WidthProvider, Responsive } from 'react-grid-layout';
// import 'react-grid-layout/css/styles.css';
// import 'react-resizable/css/styles.css';
// const ResponsiveGridLayout = WidthProvider(Responsive);

// const MyGrid = () => {
//   const [layouts, setLayouts] = useState({});

//   const onLayoutChange = (newLayout) => {
//     setLayouts({ lg: newLayout });
//   };

//   const handleResize = (layout, oldItem, newItem) => {
//     // handle resize logic here
//   };

//   const boxes = [
//     { id: 'box1', position: { x: 0, y: 0 }, size: { w: 3, h: 2 }, content: 'Box 1' },
//     { id: 'box2', position: { x: 3, y: 0 }, size: { w: 3, h: 2 }, content: 'Box 2' },
//     { id: 'box3', position: { x: 6, y: 0 }, size: { w: 3, h: 2 }, content: 'Box 3' },
//     { id: 'box4', position: { x: 9, y: 0 }, size: { w: 3, h: 2 }, content: 'Box 4' },
//   ];
//   console.warn(layouts)
//   return (
//     <ResponsiveGridLayout
//       className="layout"
//       layouts={layouts}
//       onLayoutChange={onLayoutChange}
//       rowHeight={30}
//       breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
//       cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
//       draggableHandle=".drag-handle"
//       margin={[10, 10]}
//     >
//       {boxes.map((box) => (
//         <div key={box.id} data-grid={{ ...box.position, ...box.size }} className="grid-box">
//           <div className="drag-handle">Drag Handle</div>
//           <div className="content">{box.content}</div>
//         </div>
//       ))}
//     </ResponsiveGridLayout>
//   );
// };

// export default MyGrid;

// import React, { useState } from 'react';
// import { ResizableBox } from 'react-resizable';
// import 'react-resizable/css/styles.css';

// const MyGrid = () => {
//   const [boxes, setBoxes] = useState([
//     { id: 'box1', position: { x: 0, y: 0 }, size: { width: 200, height: 150 }, content: 'Box 1' },
//     { id: 'box2', position: { x: 1, y: 0 }, size: { width: 200, height: 150 }, content: 'Box 2' },
//     { id: 'box3', position: { x: 2, y: 0 }, size: { width: 200, height: 150 }, content: 'Box 3' },
//     { id: 'box4', position: { x: 3, y: 0 }, size: { width: 200, height: 150 }, content: 'Box 4' },
//   ]);

//   const onResize = (index, size) => {
//     setBoxes((prevBoxes) => {
//       const newBoxes = [...prevBoxes];
//       newBoxes[index].size = size;
//       return newBoxes;
//     });
//   };
//   console.log(boxes)

//   return (
//     <div className="grid-container">
//       {boxes.map((box, index) => (
//         <ResizableBox
//           key={box.id}
//           width={box.size.width}
//           height={box.size.height}
//           onResize={(event, { size }) => onResize(index, size)}
//           className="grid-box"
//         >
//           <div className="content">{box.content}</div>
//         </ResizableBox>
//       ))}
//     </div>
//   );
// };

// export default MyGrid;


// import React, { useState } from 'react';
// import { ResizableBox } from 'react-resizable';
// import 'react-resizable/css/styles.css';

// const MyGrid = () => {
//   const [boxes, setBoxes] = useState([
//     { id: 'box1', size: { width: 200, height: 150 }, content: 'Box 1' },
//     { id: 'box2', size: { width: 200, height: 150 }, content: 'Box 2' },
//     { id: 'box3', size: { width: 200, height: 150 }, content: 'Box 3' },
//     { id: 'box4', size: { width: 200, height: 150 }, content: 'Box 4' },
//   ]);

//   const onResize = (index, size) => {
//     setBoxes((prevBoxes) => {
//       const newBoxes = [...prevBoxes];
//       newBoxes[index].size = size;
//       return newBoxes;
//     });
//   };

//   const addBox = () => {
//     const newBox = { id: `box${boxes.length + 1}`, size: { width: 200, height: 150 }, content: `Box ${boxes.length + 1}` };
//     setBoxes((prevBoxes) => [...prevBoxes, newBox]);
//   };

//   return (
//     <div className="grid-container">
//       {boxes.map((box, index) => (
//         <ResizableBox
//           key={box.id}
//           width={box.size.width}
//           height={box.size.height}
//           onResize={(event, { size }) => onResize(index, size)}
//           className="grid-box"
//         >
//           <div className="content">{box.content}</div>
//         </ResizableBox>
//       ))}
//       <button onClick={addBox}>Add Box</button>
//     </div>
//   );
// };

// export default MyGrid;

// import React, { useState } from 'react';
// import { ResizableBox } from 'react-resizable';
// import 'react-resizable/css/styles.css';
// import Draggable from 'react-draggable';

// const MyGrid = () => {
//   const [boxes, setBoxes] = useState([

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

//   const addBox = () => {
//     const newBox = {
//       id: `box${boxes.length + 1}`,
//       position: { x: 0, y: 0 },
//       size: { width: 200, height: 150 },
//       content: `Box ${boxes.length + 1}`,
//     };
//     setBoxes((prevBoxes) => [...prevBoxes, newBox]);
//   };

//   return (
//     <div className="grid-container">
//       {boxes.map((box, index) => (
//         <Draggable
//           key={box.id}
//           handle=".drag-handle"
//           defaultPosition={box.position}
//           onStop={(event, data) => onStop(index, event, data)}
//         >
//           <ResizableBox
//             width={box.size.width}
//             height={box.size.height}
//             onResize={(event, { size }) => onResize(index, size)}
//             className="grid-box"
//           >
//             <div className="content">
//               <div className="drag-handle">Drag here</div>
//               {box.content}
//             </div>
//           </ResizableBox>
//         </Draggable>
//       ))}
//       <button onClick={addBox}>Add Box</button>
//     </div>
//   );
// };

// export default MyGrid;

// import React, { useState } from 'react';
// import { ResizableBox } from 'react-resizable';
// import 'react-resizable/css/styles.css';
// import Draggable from 'react-draggable';
// import { FaRocket } from 'react-icons/fa';

// const MyGrid = () => {
//   const [boxes, setBoxes] = useState([
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

//   const addBox = () => {
//     const newBox = {
//       id: `box${boxes.length + 1}`,
//       position: { x: 0, y: 0 },
//       size: { width: 200, height: 150 },
//       content: <FaRocket/>,
//     };
//     setBoxes((prevBoxes) => [...prevBoxes, newBox]);
//   };

//   return (
//     <div className="grid-container">
//       {boxes.map((box, index) => (
//         <Draggable
//           key={box.id}
//           handle=".drag-handle"
//           defaultPosition={box.position}
//           onStop={(event, data) => onStop(index, event, data)}
//         >
//           <ResizableBox
//             width={box.size.width}
//             height={box.size.height}
//             onResize={(event, { size }) => onResize(index, size)}
//             className="grid-box"
//           >
//             <div className="content">
//               <div className="drag-handle">Drag here</div>
//               {box.content}
//             </div>
//           </ResizableBox>
//         </Draggable>
//       ))}
//       <button onClick={addBox} className="add-box-button">
//         <FaRocket />
//       </button>
//     </div>
//   );
// };

// export default MyGrid;

// Finalest code

import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import Draggable from 'react-draggable';
import { FaRocket } from 'react-icons/fa';
import './MyLayout.css';

const MyGrid = () => {
  const [boxes, setBoxes] = useState([
    // { id: 'box1', position: { x: 20, y: 20 }, size: { width: 200, height: 150 }, content: 'Box 1' },
    // { id: 'box2', position: { x: 240, y: 20 }, size: { width: 200, height: 150 }, content: 'Box 2' },
    // { id: 'box3', position: { x: 460, y: 20 }, size: { width: 200, height: 150 }, content: 'Box 3' },
    // { id: 'box4', position: { x: 680, y: 20 }, size: { width: 200, height: 150 }, content: 'Box 4' },
  ]);

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
      console.log(newBoxes,"sdhjbjhdsdhvv")
      return newBoxes;
    });
  };

  const addBox = () => {
    const newBox = {
      id: `box${boxes.length + 1}`,
      position: { x: 20, y: 20 },
      size: { width: 200, height: 150 },
      content: `Desk ${boxes.length+1}`,
      className:"Desk-icon",
    };
    setBoxes((prevBoxes) => [...prevBoxes, newBox]);
  };
  console.warn(boxes,"here")

  const boxElements = boxes.map((box, index) => (
    <Draggable key={box.id} handle=".drag-handle" defaultPosition={box.position} onStop={(event, data) => onStop(index, event, data)}>
      <ResizableBox width={box.size.width} height={box.size.height} onResize={(event, { size }) => onResize(index, size)} className="grid-box" >
        <div className="content">
          <div className="drag-handle">Drag</div>
          {box.content}
        </div>
      </ResizableBox>
    </Draggable>
  ));

  return (
    <div className="grid-container">
      <div className="grid-workspace">
        {boxElements}
      </div>
      <div className="add-box">
        <div className="rocket-icon" onClick={addBox}>
          <image src="./Desk1.png" alt="BigCo Inc. logo"/>
        </div>
      </div>
    </div>
  );
};

export default MyGrid;