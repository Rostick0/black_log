import LayoutDefault from "../../../layout/LayoutDefault";
import styles from "./style.module.scss";

export default function ProfileTransactions() {
  return (
    <LayoutDefault>
      <div className={styles.ProfileTransactions}>
        <div className="container">
          <div className={styles.ProfileTransactions__container}>ProfileTransactions</div>
        </div>
      </div>
    </LayoutDefault>
  );
}
