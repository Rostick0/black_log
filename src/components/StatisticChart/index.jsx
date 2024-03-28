// StatisticChart
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Filler,
//   Legend,
// } from "chart.js";
// import ChartJS from "chart.js/auto"
// import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "chartjs-plugin-style";

import _ from "lodash";
import styles from "./style.module.scss";
import { useTheme } from "../../app/context/ThemeContext";
import { useEffect, useMemo, useRef } from "react";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Filler,
//   Legend
// );

const labels = [
  "Aug 2018",
  "Sep 2018",
  "Oct 2018",
  "Nov 2018",
  "Dec 2018",
  "Jan 2019",
  "Feb 2019",
  "Mar 2019",
  "Apr 2019",
  "May 2019",
];

// const plugins = (isLight) => ({
//   legend: {
//     display: false,
//   },
//   tooltip: {
//     backgroundColor: isLight ? "#fff" : "#000",
//     displayColors: false,
//     padding: {
//       left: 30,
//       right: 30,
//       top: 12,
//       bottom: 12,
//     },
//     bodyFont: {
//       size: 14,
//       weight: 700,
//     },
//     caretPadding: 18,
//     callbacks: {
//       title: function (context) {
//         return "";
//       },
//       labelTextColor: function (context) {
//         return "#005DA9";
//       },
//     },
//     intersect: false,
//     shadowOffsetX: 3,
//     shadowOffsetY: 3,
//     shadowBlur: 10,
//     shadowColor: "rgba(0, 0, 0, 0.3)",
//     yAlign: "bottom",
//     // bevelWidth: 3,
//     // bevelHighlightColor: "rgba(255, 255, 255, 0.75)",
//     // bevelShadowColor: "rgba(0, 0, 0, 0.5)",
//     // shadowOffsetX: 3,
//     // shadowOffsetY: 3,
//     // shadowBlur: 10,
//     // shadowColor: "rgba(0, 0, 0, 0.5)",
//     // position: "",
//     // display: false,
//   },
// });

const datasetsDefault = (isLight) => ({
  fill: true,
  pointHoverBackgroundColor: isLight ? "#f2f7fe" : "#22272f",
  backgroundColor: "transparent",
});

export default function StatisticChart() {
  const { theme, isLight } = useTheme();
  const chartRef = useRef(null);

  const options = useMemo(
    () => ({
      responsive: true,
      scales: {
        x: {
          border: {
            display: false,
          },
          grid: {
            display: false,
          },
          ticks: {
            // alignment: "start",
            color: "#D9D9D9",
            font: {
              size: 17,
            },
          },
        },
        y: {
          border: {
            display: false,
          },
          grid: {
            color: "#E3F3FF",
          },
          ticks: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: isLight ? "#fff" : "#000",
          displayColors: false,
          padding: {
            left: 30,
            right: 30,
            top: 12,
            bottom: 12,
          },
          bodyFont: {
            size: 14,
            weight: 700,
          },
          caretPadding: 18,
          yAlign: "bottom",
          callbacks: {
            title: function (context) {
              return "";
            },
            labelTextColor: function (context) {
              return "#005DA9";
            },
          },
          boderWidth: 2,
          shadowBlur: 10,
          shadowOffsetX: 5,
          shadowOffsetY: 5,
        },
      },
      elements: {
        line: {
          tension: 0.2,
        },
        point: {
          radius: 0,
          // pointStyle: "rectRot",
          // borderDash: 1,
          hitRadius: 15,
          hoverBorderWidth: 4,
          hoverRadius: 12,
          // HoverBackgroundColor: 'red',
        },
        // pointHoverBackgroundColor: "fff",
      },
    }),
    [theme]
  );

  const data = {
    labels,
    datasets: [
      {
        data: labels.map(() => _.random(1000, 2500)),
        borderColor: "#018CFE",
        ...datasetsDefault(isLight),
        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowBlur: 10,
        shadowOffsetX: 5,
        shadowOffsetY: 5,
      },
      {
        data: labels.map(() => _.random(1000, 2500)),
        borderColor: "#94CFFF",
        ...datasetsDefault(isLight),
      },
    ],
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const myChart = new Chart(ctx, {
      type: "line",
      data,
      options,
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className={styles.StatisticChart}>
      <div className={styles.StatisticChart__top}>
        <div className={styles.StatisticChart__title}>Total sales</div>
      </div>
      <canvas ref={chartRef} />
      {/* <Line options={options} data={data} /> */}
    </div>
  );
}
