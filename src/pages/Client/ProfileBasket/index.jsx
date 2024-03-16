import LayoutProfile from "../../../layout/LayoutProfile";
import styles from "./style.module.scss";

export default function ProfileBasket() {
  return (
    <LayoutProfile>
      <div className={styles.ProfileBasket}>
        <div className="container">
          <div className={styles.ProfileBasket__container}>ProfileBasket</div>
        </div>
      </div>
    </LayoutProfile>
  );
}
