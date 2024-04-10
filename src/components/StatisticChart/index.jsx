import Chart from "chart.js/auto";
import "chartjs-plugin-style";
import SelectForm from "../../Form/SelectForm";
import _ from "lodash";
import styles from "./style.module.scss";
import { useTheme } from "../../app/context/ThemeContext";
import { useEffect, useMemo, useRef } from "react";
import { useForm } from "react-hook-form";
import { dateList } from "../../app/utils/date";

// const labels = [
//   "Aug 2018",
//   "Sep 2018",
//   "Oct 2018",
//   "Nov 2018",
//   "Dec 2018",
//   "Jan 2019",
//   "Feb 2019",
//   "Mar 2019",
//   "Apr 2019",
//   "May 2019",
// ];

const dateStart = dateList("2020-01-01");
const dateEnd = dateList("2020-01-01", true);

const datasetsDefault = (isLight) => ({
  fill: true,
  pointHoverBackgroundColor: isLight ? "#f2f7fe" : "#22272f",
  backgroundColor: "transparent",
});

export default function StatisticChart({
  chartData,
  setStartDate,
  setEndDate,
  defaultValues,
}) {
  const { theme, isLight } = useTheme();
  const chartRef = useRef(null);

  const { register, setValue } = useForm();
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
    labels: chartData?.months?.map((item) => item.value),
    datasets: [
      {
        data: chartData?.months?.map((item) => {
          return (
            chartData?.purchases?.find(
              (elem) => elem.year === item.year && elem.month === item.month
            )?.count ?? 0
          );
        }),
        borderColor: "#018CFE",
        ...datasetsDefault(isLight),
        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowBlur: 10,
        shadowOffsetX: 5,
        shadowOffsetY: 5,
      },
      {
        data: chartData?.months?.map((item) => {
          return (
            chartData?.refunded?.find(
              (elem) => elem.year === item.year && elem.month === item.month
            )?.count ?? 0
          );
        }),
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
        <form className={styles.StatisticChart__form}>
          <SelectForm
            inputClassName={styles.StatisticChart__select_input}
            iconClassName={styles.StatisticChart__select_icon}
            name="start_date"
            defaultValue={dateStart?.find(
              (elem) => elem.value === defaultValues["start_date"]
            )}
            onChange={(item) => {
              setStartDate(item?.value);
            }}
            register={register}
            leftContent={
              <span className={styles.StatisticChart__select_label}>from</span>
            }
            items={dateStart}
            withIcon
          />
          <SelectForm
            inputClassName={styles.StatisticChart__select_input}
            iconClassName={styles.StatisticChart__select_icon}
            name="end_date"
            defaultValue={dateEnd?.find(
              (elem) => elem.value === defaultValues["end_date"]
            )}
            onChange={(item) => {
              setEndDate(item?.value);
            }}
            register={register}
            leftContent={
              <span className={styles.StatisticChart__select_label}>to</span>
            }
            items={dateEnd}
            withIcon
          />
        </form>
      </div>
      <canvas ref={chartRef} />
    </div>
  );
}
