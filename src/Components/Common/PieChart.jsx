// import React, { Component } from "react";
import { ResponsivePie } from "@nivo/pie";
// import { oneOfType, number, string, object, array, bool } from "prop-types";

// class PieChart extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div className="donut-chart-container" style={{ width, height }}>
//         <div className="center-info">
//           {!!numberCenter && <div style={numberStyle}>{numberCenter}</div>}
//           {textCenter && <span style={textStyle}>{textCenter}</span>}
//         </div>
//         <ResponsivePie
//           data={data}
//           margin={{
//             top: 2,
//             right: 2,
//             bottom: 2,
//             left: 2
//           }}
//           innerRadius={innerRadius}
//           colors={colors}
//           borderWidth={1}
//           borderColor={{ from: "color", modifiers: [["darker", 0.1]] }}
//           enableRadialLabels={false}
//           enableSlicesLabels={false}
//           isInteractive={isInteractive}
//         />
//       </div>
//     );
//   }
// }

// PieChart = {
//   data: [
//     {
//       id: "Withdrow",
//       label: "Withdrow",
//       value: 65,
//       color: "rgba(6, 142, 208, 1)"
//     },
//     {
//       id: "Deposit",
//       label: "Deposit",
//       value: 35,
//       color: "rgba(52, 89, 149, 1)"
//     }
//   ],
//   colors: ["rgba(52, 89, 149, 1)", "rgba(6, 142, 208, 1)"],
//   numberStyle: { fontWeight: "bold", fontSize: 24 },
//   innerRadius: 0.7,
//   width: 200,
//   height: 200,
//   isInteractive: true
// };

// export default PieChart;


import React from 'react'

export default function PieChart() {
  return (
    <ResponsivePie
      data={
        [
          {
            id: "Withdrow",
            label: "Withdrow",
            value: 65,
            color: "rgba(6, 142, 208, 1)"
          },
          {
            id: "Deposit",
            label: "Deposit",
            value: 35,
            color: "rgba(52, 89, 149, 1)"
          }
        ]
      }
      margin={{ top: 20, right: 10, bottom: 20, left: 10 }}
      innerRadius={0.65}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      colors={["rgba(52, 89, 149, 1)", "rgba(6, 142, 208, 1)"]}
      borderColor={{
        from: 'color',
        modifiers: [
          [
            'brighter',
            0.2
          ]
        ]
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [
          [
            'brighter',
            6
          ]
        ]
      }}
    />
  )
}
