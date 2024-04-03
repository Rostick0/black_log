import Title from "../../ui/Title";
import styles from "./style.module.scss";
import StatisticChart from "../StatisticChart";
import { useSellerStatsGetQuery } from "../../app/store/modules/sellerStats";
import useFilter from "../../app/hook/useFilter";

export default function SellerProfileStatistics() {
  const { filters, updateCurrentFilterValue } = useFilter();
  const { data } = useSellerStatsGetQuery(filters);

  return (
    <div className={styles.SellerProfileStatistics}>
      <Title variant="small">Your purchases</Title>
      <StatisticChart
        setStartDate={(value) => updateCurrentFilterValue("start_date", value)}
        setEndDate={(value) => updateCurrentFilterValue("end_date", value)}
      />
      <div className={styles.SellerProfileStatistics__stats}>
        <div className={styles.SellerProfileStatistics__stats_item + " fw-600"}>
          <span>Total number of sales</span>
          <span
            className={
              styles.SellerProfileStatistics__stats_item_count + " color-ui"
            }
          >
            {data?.purchases_count}
          </span>
        </div>
        <div className={styles.SellerProfileStatistics__stats_item + " fw-600"}>
          <span>Refuted</span>
          <span
            className={
              styles.SellerProfileStatistics__stats_item_count + " color-ui"
            }
          >
            {data?.refunded_count}
          </span>
        </div>
        <div className={styles.SellerProfileStatistics__stats_item + " fw-600"}>
          <span>Your percentage</span>
          <span
            className={
              styles.SellerProfileStatistics__stats_item_count + " color-ui"
            }
          >
            {data?.refunded_count > 0
              ? data?.refunded_count
              : Math.floor(data?.purchases_count / data?.refunded_count / 100) *
                100}
          </span>
        </div>
      </div>
    </div>
  );
}
