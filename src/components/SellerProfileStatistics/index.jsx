import Title from "../../ui/Title";
import styles from "./style.module.scss";

export default function SellerProfileStatistics() {
  return (
    <div className={styles.SellerProfileStatistics}>
      <Title variant="small">Your purchases</Title>
      <div className={styles.SellerProfileStatistics__stats}>
        <div className={styles.SellerProfileStatistics__stats_item + " fw-600"}>
          <span>Total number of sales</span>
          <span className={styles.SellerProfileStatistics__stats_item_count + " color-ui"}>256</span>
        </div>
        <div className={styles.SellerProfileStatistics__stats_item + " fw-600"}>
          <span>Refuted</span>
          <span className={styles.SellerProfileStatistics__stats_item_count + " color-ui"}>256</span>
        </div>
        <div className={styles.SellerProfileStatistics__stats_item + " fw-600"}>
          <span>Your percentage</span>
          <span className={styles.SellerProfileStatistics__stats_item_count + " color-ui"}>28%</span>
        </div>
      </div>
    </div>
  );
}
