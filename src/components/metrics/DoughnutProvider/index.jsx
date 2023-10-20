import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutProvider({
  doughnutTitle,
  doughnutLabel,
  doughnutData,
  style,
}) {
  const data = {
    labels: doughnutLabel,
    datasets: [
      {
        label: `Number of ${doughnutTitle}`,
        data: doughnutData,
        backgroundColor: ["#ff823c", "#0096ff", "#323c46"],
        // borderColor: ["#ff823c", "#0096ff", "#323c46"],
        hoverOffset: 4,
        borderWidth: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Doughnut Chart",
    },
    plugins: {
      legend: {
        display: true, // Show the legend
        position: "right", // Position the legend at the top
        labels: {
          boxWidth: 50,
          boxHeight: 20,
          useBorderRadius: true,
          borderRadius: 16,
        },
      },
      tooltip: {
        mode: "index", // Tooltip display mode
        intersect: false, // Show tooltips at all points in the dataset
      },
    },

    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div style={{ ...style }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}

// import React, { PureComponent } from "react";
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
// ];
// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// function DoughnutProvider({
//   doughnutTitle,
//   doughnutLabel,
//   doughnutData,
//   style,
// }) {
//   return (
//     <div style={{ ...style }}>
//       <PieChart width={800} height={400}>
//         <Pie
//           data={data}
//           cx={120}
//           cy={200}
//           innerRadius={60}
//           outerRadius={80}
//           fill="#8884d8"
//           paddingAngle={5}
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//       </PieChart>
//     </div>
//   );
// }

export default DoughnutProvider;
