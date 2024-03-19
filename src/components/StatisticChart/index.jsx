// StatisticChart
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import _ from "lodash";
import styles from "./style.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  scales: {
    yAxes: [
      {
        gridLines: {
          color: "red",
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          color: "blue",
        },
      },
    ],
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      // tension: 0.1,
    },
    point: {
      radius: 0,
    },
  },
};

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

export default function StatisticChart() {
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: labels.map(() => _.random(1000, 2500)),
        borderColor: "#018CFE",
        backgroundColor: "transparent",
      },
      {
        fill: true,
        label: "Dataset 2",
        data: labels.map(() => _.random(1000, 2500)),
        borderColor: "#94CFFF",
        backgroundColor: "transparent",
      },
    ],

    // options: {
    //   scales: {
    //     xAxes: [
    //       {
    //         gridLines: {
    //           color: "red", // устанавливаем цвет сетки по x-оси
    //         },
    //       },
    //     ],
    //     yAxes: [
    //       {
    //         gridLines: {
    //           color: "red", // устанавливаем цвет сетки по y-оси
    //         },
    //       },
    //     ],
    //   },
    // },
  };

  return (
    <div className={styles.StatisticChart}>
      <div className={styles.StatisticChart__top}>
        <div className={styles.StatisticChart__title}>Total sales</div>
      </div>
      <Line options={options} data={data} />
    </div>
  );
}
