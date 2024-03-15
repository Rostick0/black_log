import LayoutDefault from "../../../layout/LayoutDefault";
import styles from "./style.module.scss";

export default function ProfileBasket() {
  return (
    <LayoutDefault>
      <div className={styles.ProfileBasket}>
        <div className="container">
          <div className={styles.ProfileBasket__container}>ProfileBasket</div>
        </div>
      </div>
    </LayoutDefault>
  );
}
