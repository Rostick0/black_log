import Button from "../../ui/Button";
import styles from "./style.module.scss";

export default function ProfileBalanceItem({ name, icon, count }) {
  return (
    <div className={styles.ProfileBalanceItem}>
      <div className={styles.ProfileBalanceItem__top}>
        {icon}
        <div className={styles.ProfileBalanceItem__name}>{name}</div>
        <div className={styles.ProfileBalanceItem__count + " fw-600 color-ui"}>
          {`${count}`?.replace(".", ",")} {name}
        </div>
      </div>
      <div className={styles.ProfileBalanceItem__bottom}>
        <Button className={styles.ProfileBalanceItem__btn}>input</Button>
        <Button className={styles.ProfileBalanceItem__btn} variant="outlined">output</Button>
      </div>
    </div>
  );
}
