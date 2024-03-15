import LayoutDefault from "../../../layout/LayoutDefault";
import styles from "./style.module.scss";

export default function ProfileBalance() {
  return (
    <LayoutDefault>
      <div className={styles.ProfileBalance}>
        <div className="container">
          <div className={styles.ProfileBalance__container}>ProfileBalance</div>
        </div>
      </div>
    </LayoutDefault>
  );
}
