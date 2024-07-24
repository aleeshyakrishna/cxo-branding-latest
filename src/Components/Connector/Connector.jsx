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
  { id: 'Best Resume Templates', text: 'Resume Samples' },
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
            position={'absolute'}
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
        {/* <div class="content-wrapper" style="width: 100%;">
  <div id="diagram" class="e-control e-diagram e-lib e-droppable e-tooltip" style="width: 100%;height: 645px;overflow: hidden;">
    <div id="diagramcontent" tabindex="0" style="width: 100%; height: 645px; position: absolute; left: 0px; top: 0px; overflow: auto; background: transparent; cursor: default;">
      <svg id="diagram_backgroundLayer_svg" width="486" height="628" style="position: absolute; top: 0px; left: 0px; overflow: hidden; pointer-events: none;">
        <g id="diagram_backgroundImageLayer" class="e-background-image-layer"></g>
        <g id="diagram_backgroundLayer" class="e-background-layer">
          <rect id="diagram_backgroundLayerrect" x="114" y="107" width="372" height="359" visibility="visible" transform="rotate(0,114,107)" rx="0" ry="0" opacity="1" pointer-events="none" stroke-width="1" stroke-dasharray="0" fill="transparent"></rect>
        </g>
      </svg>
      <svg id="diagram_gridline_svg" width="486" height="628" class="e-grid-layer" style="position: absolute; top: 0px; left: 0px; overflow: hidden; pointer-events: none;">
        <g id="diagram_gridline" transform="translate(0,0)">
          <rect id="diagram_grid_rect" x="0" y="0" width="100%" height="100%" fill="url(#diagram_pattern)"></rect>
        </g>
        <defs id="diagram_grid_pattern_defn">
          <pattern id="diagram_pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"></pattern>
        </defs>
      </svg>
      <div id="diagram_diagramLayer_div" style="width: 486px; height: 628px; position: absolute; top: 0px; left: 0px; overflow: hidden; pointer-events: none;">
        <svg id="diagram_diagramLayer_svg" width="486" height="628" class="e-diagram-layer" style="pointer-events: all;">
          <g>
            <g id="diagram_diagramLayer" transform="translate(0,0),scale(1)">
              <!-- Original Elements -->
              <g id="cxo_groupElement">
                <rect id="cxo" x="250" y="250" width="100" height="100" visibility="visible" transform="rotate(0,300,300)" rx="0" ry="0" opacity="1" role="img" aria-label="cxo" stroke="transparent" stroke-width="0" stroke-dasharray="none" fill="transparent"></rect>
                <g id="cxo_content_groupElement" transform="translate(0,0)">
                  <path d="M100,50 C100,77.61,77.61,100,50,100 C22.39,100,0,77.61,0,50 C0,22.39,22.39,0,50,0 C77.61,0,100,22.39,100,50 Z" id="cxo_content" transform="rotate(0,300,300)translate(250,250)" visibility="visible" opacity="1" role="img" aria-label="CXO BRANDING" stroke="#024249" stroke-width="1" stroke-dasharray="none" fill="#f4bb40"></path>
                </g>
                <g id="cxo_oV9q1_groupElement" transform="translate(0,0)">
                  <rect id="cxo_oV9q1" x="252.9921875" y="292.8" width="94.015625" height="14.399999999999999" visibility="visible" transform="rotate(0,300,300)" rx="0" ry="0" opacity="1" pointer-events="none" stroke="transparent" stroke-width="0" stroke-dasharray="none" fill="transparent"></rect>
                  <text stroke="transparent" stroke-width="0" stroke-dasharray="none" fill="black" id="cxo_oV9q1_text" visibility="visible" text-decoration="None" transform="rotate(0,300,300)translate(252.9921875,292.8)" opacity="1" role="img" aria-label="cxo_oV9q1" style="font-style: normal; font-weight: bold; font-size: 12px; font-family: Arial;">
                    <tspan x="0" y="10.8">CXO BRANDING</tspan>
                  </text>
                </g>
              </g>
              <g id="Become a Cofounder_groupElement">
                <rect id="Become a Cofounder" x="250" y="106.75999999999999" width="100" height="100" visibility="visible" transform="rotate(0,300,156.76)" rx="0" ry="0" opacity="1" role="img" aria-label="Become a Cofounder" stroke="transparent" stroke-width="0" stroke-dasharray="none" fill="transparent"></rect>
                <g id="Become a Cofounder_content_groupElement" transform="translate(0,0)">
                  <path d="M100,50 C100,77.61,77.61,100,50,100 C22.39,100,0,77.61,0,50 C0,22.39,22.39,0,50,0 C77.61,0,100,22.39,100,50 Z" id="Become a Cofounder_content" transform="rotate(0,300,156.76)translate(250,106.75999999999999)" visibility="visible" opacity="1" role="img" aria-label="Become a Cofounder" stroke="#024249" stroke-width="1" stroke-dasharray="none" fill="#ff0000"></path>
                </g>
                <g id="Become a Cofounder_oV9q1_groupElement" transform="translate(0,0)">
                  <rect id="Become a Cofounder_oV9q1" x="252.9921875" y="149.56" width="94.015625" height="14.399999999999999" visibility="visible" transform="rotate(0,300,156.76)" rx="0" ry="0" opacity="1" pointer-events="none" stroke="transparent" stroke-width="0" stroke-dasharray="none" fill="transparent"></rect>
                  <text stroke="transparent" stroke-width="0" stroke-dasharray="none" fill="black" id="Become a Cofounder_oV9q1_text" visibility="visible" text-decoration="None" transform="rotate(0,300,156.76)translate(252.9921875,149.56)" opacity="1" role="img" aria-label="Become a Cofounder_oV9q1" style="font-style: normal; font-weight: bold; font-size: 12px; font-family: Arial;">
                    <tspan x="0" y="10.8">Become a Cofounder</tspan>
                  </text>
                </g>
              </g>
              <g id="Best Resume Templates_groupElement">
                <rect id="Best Resume Templates" x="400" y="400" width="100" height="100" visibility="visible" transform="rotate(0,450,450)" rx="0" ry="0" opacity="1" role="img" aria-label="Best Resume Templates" stroke="transparent" stroke-width="0" stroke-dasharray="none" fill="transparent"></rect>
                <g id="Best Resume Templates_content_groupElement" transform="translate(0,0)">
                  <path d="M100,50 C100,77.61,77.61,100,50,100 C22.39,100,0,77.61,0,50 C0,22.39,22.39,0,50,0 C77.61,0,100,22.39,100,50 Z" id="Best Resume Templates_content" transform="rotate(0,450,450)translate(400,400)" visibility="visible" opacity="1" role="img" aria-label="Best Resume Templates" stroke="#024249" stroke-width="1" stroke-dasharray="none" fill="#f4bb40"></path>
                </g>
                <g id="Best Resume Templates_oV9q1_groupElement" transform="translate(0,0)">
                  <rect id="Best Resume Templates_oV9q1" x="402.9921875" y="442.8" width="94.015625" height="14.399999999999999" visibility="visible" transform="rotate(0,450,450)" rx="0" ry="0" opacity="1" pointer-events="none" stroke="transparent" stroke-width="0" stroke-dasharray="none" fill="transparent"></rect>
                  <text stroke="transparent" stroke-width="0" stroke-dasharray="none" fill="black" id="Best Resume Templates_oV9q1_text" visibility="visible" text-decoration="None" transform="rotate(0,450,450)translate(402.9921875,442.8)" opacity="1" role="img" aria-label="Best Resume Templates_oV9q1" style="font-style: normal; font-weight: bold; font-size: 12px; font-family: Arial;">
                    <tspan x="0" y="10.8">Best Resume Templates</tspan>
                  </text>
                </g>
              </g>
              <g id="Find an Investor_groupElement">
                <rect id="Find an Investor" x="168.81" y="408.68" width="94.015625" height="14.399999999999999" visibility="visible" transform="rotate(0,215.81,415.88)" rx="0" ry="0" opacity="1" role="img" aria-label="Find an Investor" stroke="transparent" stroke-width="0" stroke-dasharray="none" fill="transparent"></rect>
                <g id="Find an Investor_content_groupElement" transform="translate(0,0)">
                  <path d="M100,50 C100,77.61,77.61,100,50,100 C22.39,100,0,77.61,0,50 C0,22.39,22.39,0,50,0 C77.61,0,100,22.39,100,50 Z" id="Find an Investor_content" transform="rotate(0,215.81,415.88)translate(165.81,365.88)" visibility="visible" opacity="1" role="img" aria-label="Find an Investor" stroke="#024249" stroke-width="1" stroke-dasharray="none" fill="#f4bb40"></path>
                </g>
                <g id="Find an Investor_oV9q1_groupElement" transform="translate(0,0)">
                  <rect id="Find an Investor_oV9q1" x="168.80609375" y="408.68" width="94.015625" height="14.399999999999999" visibility="visible" transform="rotate(0,215.81,415.88)" rx="0" ry="0" opacity="1" pointer-events="none" stroke="transparent" stroke-width="0" stroke-dasharray="none" fill="transparent"></rect>
                  <text stroke="transparent" stroke-width="0" stroke-dasharray="none" fill="black" id="Find an Investor_oV9q1_text" visibility="visible" text-decoration="None" transform="rotate(0,215.81,415.88)translate(168.80609375,408.68)" opacity="1" role="img" aria-label="Find an Investor_oV9q1" style="font-style: normal; font-weight: bold; font-size: 12px; font-family: Arial;">
                    <tspan x="0" y="10.8">Find a Partner</tspan>
                  </text>
                </g>
              </g>
              <!-- New Circle Element -->
              <g id="new_circle_groupElement">
                <circle id="new_circle" cx="200" cy="200" r="50" fill="#00ff00" stroke="#000000" stroke-width="2"></circle>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
        </div> */}

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
