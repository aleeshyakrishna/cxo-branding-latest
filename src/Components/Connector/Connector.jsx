import * as React from 'react';
import { DiagramComponent, Inject, UndoRedo, NodeConstraints, SnapConstraints } from '@syncfusion/ej2-react-diagrams';
import { Point } from '@syncfusion/ej2-diagrams';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import './font-icons.css'
// Initialize the nodes for the diagram
let cxo = [
  { id: 'cxo', text: 'CXO BRANDING' },
  { id: 'Become a Cofounder', text: 'Become a Cofounder' },
  { id: 'Become a Freelancer', text: 'Become a Freelancer' },
  { id: 'Best Resume Templates', text: 'Best Resume Templates' },
  { id: 'Find an Investor', text: 'Find an Investor' },
  { id: 'Become an Investor', text: 'Become an Investor' },
];

// Arrange the nodes in a circular path
let count = 5;
let space = 80;
let radius = (count * 100 + space * count) / (2 * Math.PI);
cxo[0].offsetX = 300;
cxo[0].offsetY = 300;
let delta = 360 / 5;
let angle = 270;
for (let i = 1; i < 6; i++) {
  let offset = Point.transform({ x: 300, y: 300 }, angle, radius);
  cxo[i].offsetX = offset.x;
  cxo[i].offsetY = offset.y;
  angle += delta;
}

// Initialize the connectors for the diagram
let connections = [];
for (let i = 1; i < 6; i++) {
  connections.push({ sourceID: cxo[i].id, targetID: 'cxo' }); // Connect each node to the center node
}

// Define custom styles
const SAMPLE_CSS = `
  .image-pattern-style {
    background-color: white;
    background-size: contain;
    background-repeat: no-repeat;
    height: 75px;
    width: calc((100% - 12px) / 3);
    cursor: pointer;
    border: 1px solid #D5D5D5;
    background-position: center;
    float: left;
  }

  .image-pattern-style:hover {
    border-color: gray;
    border-width: 2px;
  }

  .row {
    margin-left: 0px;
    margin-right: 0px;
  }

  .row-header {
    font-size: 13px;
    font-weight: 500;
  }

  .e-selected-style {
    border-color: #006CE6;
    border-width: 2px;
  }

  .e-checkbox-wrapper .e-label {
    font-size: 12px;
  }
`;

let diagramInstance;
let node;

function Connector() {
  function renderComplete() {
    diagramInstance.fitToPage();
    document.getElementById('appearance').onclick = (args) => {
      let target = args.target;
      let selectedElement = document.getElementsByClassName('e-selected-style');
      if (selectedElement.length) {
        selectedElement[0].classList.remove('e-selected-style');
      }
      if (target.className === 'image-pattern-style') {
        for (let i = 0; i < diagramInstance.nodes.length; i++) {
          node = diagramInstance.nodes[i];
          switch (target.id) {
            case 'preview0':
              applyStyle(node, 0, undefined, ~NodeConstraints.Shadow, undefined, undefined, target);
              break;
            case 'preview1':
              applyStyle(node, 2, undefined, ~NodeConstraints.Shadow, undefined, undefined, target);
              break;
            case 'preview2':
              applyStyle(node, 2, '5 5', ~NodeConstraints.Shadow, undefined, undefined, target);
              break;
            case 'preview3':
              applyStyle(node, 2, '5 5', ~NodeConstraints.Shadow, 'Radial', undefined, target);
              break;
            case 'preview4':
              let shadow = {
                angle: 45,
                distance: 15,
                opacity: 0.5,
                color: 'grey',
              };
              applyStyle(node, 2, '5 5', NodeConstraints.Shadow, undefined, shadow, target);
              break;
          }
        }
      }
    };
  }

  function applyStyle(node, width, array, con, type, sh, target) {
    node.style.fill = '#f4bb40'; // Set node fill color
    node.style.strokeWidth = width;
    node.style.strokeColor = '#024249';
    node.style.strokeDashArray = array;
    if (!type) {
      node.style.gradient.type = 'None';
    } else {
      let gradient;
      gradient = {
        cx: 50,
        cy: 50,
        fx: 50,
        fy: 50,
        stops: [
          { color: '#00555b', offset: 0 },
          { color: '#f4bb40', offset: 90 }, // Use node fill color
        ],
        type: 'Radial',
      };
      node.style.gradient = gradient;
    }
    if (con & NodeConstraints.Shadow) {
      node.shadow = { angle: 45, distance: 15, opacity: 0.3, color: 'grey' };
      node.constraints |= con;
    } else {
      node.constraints &= con;
    }
    node.annotations[0].style.color = 'black'; // Set font color
    diagramInstance.dataBind();
    target.classList.add('e-selected-style');
  }

  function setNodeAspectConstraints(args) {
    for (let i = 0; i < diagramInstance.nodes.length; i++) {
      let node = diagramInstance.nodes[i];
      if (args.checked) {
        node.constraints |= NodeConstraints.AspectRatio;
      } else {
        node.constraints &= ~NodeConstraints.AspectRatio;
      }
      diagramInstance.dataBind();
    }
  }

  function setNodeLockConstraints(args) {
    for (let i = 0; i < diagramInstance.nodes.length; i++) {
      let node = diagramInstance.nodes[i];
      if (args.checked) {
        node.constraints &= ~(NodeConstraints.Resize | NodeConstraints.Rotate | NodeConstraints.Drag);
        node.constraints |= NodeConstraints.ReadOnly;
      } else {
        node.constraints |= NodeConstraints.Default & ~NodeConstraints.ReadOnly;
      }
    }
    diagramInstance.dataBind();
  }

  return (
    <div className="control-pane no-scrollbar" >
      <style>{SAMPLE_CSS}</style>
      <div className="col-lg-8 control-section">
        <div className="content-wrapper" style={{ width: '100%' }}>
          <DiagramComponent
            id="diagram"
            ref={(diagram) => (diagramInstance = diagram)}
            width={'100%'}
            height={'645px'}
            nodes={cxo}
            connectors={connections}
            getNodeDefaults={(obj) => {
              obj.width = 100;
              obj.height = 100;
              obj.shape = { type: 'Basic', shape: 'Ellipse' };
              obj.style = { fill: '#f4bb40', strokeColor: '#024249' }; // Set default node style
              obj.annotations = [
                {
                  content: obj.text,
                  margin: { left: 10, right: 10 },
                  style: {
                    color: 'black', // Set font color
                    fill: 'none',
                    strokeColor: 'none',
                    bold: true,
                  },
                },
              ];
              obj.constraints = NodeConstraints.Default & ~NodeConstraints.Drag;
              return obj;
            }}
            getConnectorDefaults={(obj) => {
              obj.targetDecorator.style = {
                fill: '#024249',
                strokeColor: '#024249',
              };
              return { style: { strokeColor: '#024249', strokeWidth: 2 } };
            }}
            snapSettings={{ constraints: SnapConstraints.None }}
          >
            <Inject services={[UndoRedo]} />
          </DiagramComponent>
        </div>
      </div>
    </div>
  );
}

export default Connector;






// import * as React from 'react';
// import { DiagramComponent, Inject, UndoRedo, NodeConstraints, SnapConstraints } from '@syncfusion/ej2-react-diagrams';
// import './font-icons.css'

// // Initialize the nodes for the diagram
// let cxo = [
//   { id: 'cxo', text: 'CXO BRANDING' },
//   { id: 'Become a Cofounder', text: 'Become a Cofounder' },
//   { id: 'Become a Freelancer', text: 'Become a Freelancer' },
//   { id: 'Best Resume Templates', text: 'Best Resume Templates' },
//   { id: 'Find an Investor', text: 'Find an Investor' },
//   { id: 'Become an Investor', text: 'Become an Investor' },
// ];

// // Initialize the connectors for the diagram
// let connections = [];
// for (let i = 1; i < 6; i++) {
//   connections.push({ sourceID: cxo[i].id, targetID: 'cxo' }); // Connect each node to the center node
// }

// // Define custom styles
// const SAMPLE_CSS = `
//   .image-pattern-style {
//     background-color: white;
//     background-size: contain;
//     background-repeat: no-repeat;
//     height: 75px;
//     width: calc((100% - 12px) / 3);
//     cursor: pointer;
//     border: 1px solid #D5D5D5;
//     background-position: center;
//     float: left;
//   }

//   .image-pattern-style:hover {
//     border-color: gray;
//     border-width: 2px;
//   }

//   .row {
//     margin-left: 0px;
//     margin-right: 0px;
//   }

//   .row-header {
//     font-size: 13px;
//     font-weight: 500;
//   }

//   .e-selected-style {
//     border-color: #006CE6;
//     border-width: 2px;
//   }

//   .e-checkbox-wrapper .e-label {
//     font-size: 12px;
//   }
// `;

// let diagramInstance;
// let angleIncrement = 0.5; // Adjust the speed of rotation as needed

// function animateNodes() {
//   let centerX = 300; // Center X of the circle
//   let centerY = 300; // Center Y of the circle
//   let radius = 200;  // Radius of the circle
//   let nodes = diagramInstance.nodes.filter(n => n.id !== 'cxo'); // Exclude the central node
//   let initialAngles = nodes.map((_, index) => (index * (360 / nodes.length))); // Initial fixed angles for each node

//   function updatePositions() {
//     initialAngles = initialAngles.map(angle => (angle + angleIncrement) % 360); // Update angles

//     nodes.forEach((node, index) => {
//       let angle = initialAngles[index];
//       let radians = angle * (Math.PI / 180);
//       let offsetX = centerX + radius * Math.cos(radians);
//       let offsetY = centerY + radius * Math.sin(radians);
//       node.offsetX = offsetX;
//       node.offsetY = offsetY;
//     });

//     diagramInstance.dataBind();
//     requestAnimationFrame(updatePositions); // Continue animation
//   }

//   updatePositions(); // Start animation
// }

// function Connector() {
//   function renderComplete() {
//     diagramInstance.fitToPage();
//     animateNodes(); // Start animation when diagram is rendered
//   }

//   function applyStyle(node, width, array, con, type, sh, target) {
//     node.style.fill = '#f4bb40'; // Set node fill color
//     node.style.strokeWidth = width;
//     node.style.strokeColor = '#024249';
//     node.style.strokeDashArray = array;
//     if (!type) {
//       node.style.gradient.type = 'None';
//     } else {
//       let gradient;
//       gradient = {
//         cx: 50,
//         cy: 50,
//         fx: 50,
//         fy: 50,
//         stops: [
//           { color: '#00555b', offset: 0 },
//           { color: '#f4bb40', offset: 90 }, // Use node fill color
//         ],
//         type: 'Radial',
//       };
//       node.style.gradient = gradient;
//     }
//     if (con & NodeConstraints.Shadow) {
//       node.shadow = { angle: 45, distance: 15, opacity: 0.3, color: 'grey' };
//       node.constraints |= con;
//     } else {
//       node.constraints &= con;
//     }
//     node.annotations[0].style.color = 'black'; // Set font color
//     diagramInstance.dataBind();
//     target.classList.add('e-selected-style');
//   }

//   function setNodeAspectConstraints(args) {
//     for (let i = 0; i < diagramInstance.nodes.length; i++) {
//       let node = diagramInstance.nodes[i];
//       if (args.checked) {
//         node.constraints |= NodeConstraints.AspectRatio;
//       } else {
//         node.constraints &= ~NodeConstraints.AspectRatio;
//       }
//       diagramInstance.dataBind();
//     }
//   }

//   function setNodeLockConstraints(args) {
//     for (let i = 0; i < diagramInstance.nodes.length; i++) {
//       let node = diagramInstance.nodes[i];
//       if (args.checked) {
//         node.constraints &= ~(NodeConstraints.Resize | NodeConstraints.Rotate | NodeConstraints.Drag);
//         node.constraints |= NodeConstraints.ReadOnly;
//       } else {
//         node.constraints |= NodeConstraints.Default & ~NodeConstraints.ReadOnly;
//       }
//     }
//     diagramInstance.dataBind();
//   }

//   return (
//     <div className="control-pane no-scrollbar">
//       <style>{SAMPLE_CSS}</style>
//       <div className="col-lg-8 control-section">
//         <div className="content-wrapper" style={{ width: '100%' }}>
//           <DiagramComponent
//             id="diagram"
//             ref={(diagram) => (diagramInstance = diagram)}
//             width={'100%'}
//             height={'645px'}
//             nodes={cxo}
//             connectors={connections}
//             getNodeDefaults={(obj) => {
//               obj.width = 100;
//               obj.height = 100;
//               obj.shape = { type: 'Basic', shape: 'Ellipse' };
//               obj.style = { fill: '#f4bb40', strokeColor: '#024249' }; // Set default node style
//               obj.annotations = [
//                 {
//                   content: obj.text,
//                   margin: { left: 10, right: 10 },
//                   style: {
//                     color: 'black', // Set font color
//                     fill: 'none',
//                     strokeColor: 'none',
//                     bold: true,
//                   },
//                 },
//               ];
//               obj.constraints = NodeConstraints.Default & ~NodeConstraints.Drag;
//               return obj;
//             }}
//             getConnectorDefaults={(obj) => {
//               obj.targetDecorator.style = {
//                 fill: '#024249',
//                 strokeColor: '#024249',
//               };
//               return { style: { strokeColor: '#024249', strokeWidth: 2 } };
//             }}
//             snapSettings={{ constraints: SnapConstraints.None }}
//             created={renderComplete} // Trigger animation on creation
//           >
//             <Inject services={[UndoRedo]} />
//           </DiagramComponent>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Connector;
