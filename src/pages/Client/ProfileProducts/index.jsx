import LayoutProfile from "../../../layout/LayoutProfile";
import styles from "./style.module.scss";

export default function ProfileProducts() {
  return (
    <LayoutProfile>
      <div className={styles.ProfileProducts}>
        <div className="container">
          <div className={styles.ProfileProducts__container}>ProfileProducts</div>
        </div>
      </div>
    </LayoutProfile>
  );
}