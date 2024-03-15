import LayoutDefault from "../../../layout/LayoutDefault";
import styles from "./style.module.scss";

export default function ProfileSettings() {
  return (
    <LayoutDefault>
      <div className={styles.ProfileSettings}>
        <div className="container">
          <div className={styles.ProfileSettings__container}>ProfileSettings</div>
        </div>
      </div>
    </LayoutDefault>
  );
}
