import Button from "../../ui/Button";
import styles from "./style.module.scss";

export default function ProfileBalanceItem({
  name,
  icon,
  count,
  currency,
  inputButtonClick,
  outputButtonClick,
}) {
  return (
    <div className={styles.ProfileBalanceItem}>
      <div className={styles.ProfileBalanceItem__top}>
        {icon}
        <div className={styles.ProfileBalanceItem__name}>{name}</div>
        <div className={styles.ProfileBalanceItem__count + " fw-600 color-ui"}>
          {count?.toLocaleString()} {currency || name}
        </div>
      </div>
      <div className={styles.ProfileBalanceItem__bottom}>
        <Button className={styles.ProfileBalanceItem__btn} onClick={inputButtonClick}>input</Button>
        <Button className={styles.ProfileBalanceItem__btn} onClick={outputButtonClick} variant="outlined">
          output
        </Button>
      </div>
    </div>
  );
}
