import LayoutDefault from "../../../layout/LayoutDefault";
import styles from "./style.module.scss";

export default function ProfileProducts() {
  return (
    <LayoutDefault>
      <div className={styles.ProfileProducts}>
        <div className="container">
          <div className={styles.ProfileProducts__container}>ProfileProducts</div>
        </div>
      </div>
    </LayoutDefault>
  );
}
