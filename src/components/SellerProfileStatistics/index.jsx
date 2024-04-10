import Title from "../../ui/Title";
import styles from "./style.module.scss";
import StatisticChart from "../StatisticChart";
import { useSellerStatsGetQuery } from "../../app/store/modules/sellerStats";
import useFilter from "../../app/hook/useFilter";
import { useMemo } from "react";

export default function SellerProfileStatistics() {
  const { filters, updateCurrentFilterValue } = useFilter();
  const { data, isSuccess, isFetching } = useSellerStatsGetQuery(filters);

  const totalSales = useMemo(
    () => data?.purchases?.reduce((sum, item) => sum + +item?.count ?? 0, 0),
    [isFetching]
  );

  const totaRefuted = useMemo(
    () => data?.refunded?.reduce((sum, item) => sum + +item?.count ?? 0, 0),
    [isFetching]
  );

  return (
    <div className={styles.SellerProfileStatistics}>
      <Title variant="small">Your purchases</Title>
      {isSuccess && (
        <StatisticChart
          chartData={data}
          setStartDate={(value) =>
            updateCurrentFilterValue("start_date", value)
          }
          setEndDate={(value) => updateCurrentFilterValue("end_date", value)}
          defaultValues={filters}
        />
      )}
      <div className={styles.SellerProfileStatistics__stats}>
        <div
          className={styles.SellerProfileStatistics__stats_item + " fw-600"}
          style={{ color: "#018CFE" }}
        >
          <span>Total number of sales</span>
          <span
            className={
              styles.SellerProfileStatistics__stats_item_count + " color-ui"
            }
          >
            {totalSales}
          </span>
        </div>
        <div
          className={styles.SellerProfileStatistics__stats_item + " fw-600"}
          style={{ color: "#94CFFF" }}
        >
          <span>Refuted</span>
          <span
            className={
              styles.SellerProfileStatistics__stats_item_count + " color-ui"
            }
          >
            {totaRefuted}
          </span>
        </div>
        <div className={styles.SellerProfileStatistics__stats_item + " fw-600"}>
          <span>Your percentage</span>
          <span
            className={
              styles.SellerProfileStatistics__stats_item_count + " color-ui"
            }
          >
            {totaRefuted === 0
              ? totaRefuted
              : Math.floor((totalSales / totaRefuted) * 100) / 100}
          </span>
        </div>
      </div>
    </div>
  );
}
