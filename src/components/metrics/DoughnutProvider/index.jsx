import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useMediaQuery } from "react-responsive";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutProvider({
  doughnutTitle,
  doughnutLabel,
  doughnutData,
  style,
}) {
  const [toggle, setToggle] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: "780px" });

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
    // responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Doughnut Chart",
    },
    plugins: {
      legend: {
        display: true, // Show the legend
        position: toggle ? "right" : "top", // Position the legend at the top
        labels: {
          boxWidth: 50,
          boxHeight: 20,
          useBorderRadius: true,
          borderRadius: 16,
          color: "#282828",
          padding: 20,
        },
        title: {
          // color: "#282828",
          // color: "#fff",
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        borderWidth: 0,
        callbacks: {
          labelColor: function (context) {
            return {
              borderWidth: 2,
              borderRadius: 2,
            };
          },
        },
      },
    },
    layout: {
      padding: {},
    },
  };

  useEffect(() => {
    if (isDesktop) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [isDesktop]);

  return (
    <div style={{ ...style }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default DoughnutProvider;
