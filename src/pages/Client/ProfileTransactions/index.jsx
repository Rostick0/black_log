import LayoutProfile from "../../../layout/LayoutProfile";
import styles from "./style.module.scss";

export default function ProfileTransactions() {
  return (
    <LayoutProfile>
      <div className={styles.ProfileTransactions}>
        <div className="container">
          <div className={styles.ProfileTransactions__container}>ProfileTransactions</div>
        </div>
      </div>
    </LayoutProfile>
  );
}
