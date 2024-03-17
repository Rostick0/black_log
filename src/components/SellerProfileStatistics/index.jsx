import Title from "../../ui/Title";
import styles from "./style.module.scss";

export default function SellerProfileStatistics() {
  //   const data = Array.from(Array(16).keys()).map((item) => ({
  //     id: item,
  //     link: "westernunion.com",
  //     type: "verified",
  //     country: "US",
  //     state: "IN",
  //     cc: "N/A",
  //     seller: "xsirien",
  //     price: "10$",
  //   }));

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
