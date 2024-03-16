import LayoutProfile from "../../../layout/LayoutProfile";
import styles from "./style.module.scss";

export default function ProfileBalance() {
  return (
    <LayoutProfile>
      <div className={styles.ProfileBalance}>
        <div className="container">
          <div className={styles.ProfileBalance__container}>ProfileBalance</div>
        </div>
      </div>
    </LayoutProfile>
  );
}
