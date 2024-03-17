import styles from "./style.module.scss";

export default function SupportRequestInfo({
  user,
  subject,
  number,
  amount,
}) {
  return (
    <div className={styles.SupportRequestInfo}>
      <div className={styles.SupportRequestInfo__item}>
        <div className={styles.SupportRequestInfo__item_name}>User</div>
        <div className={styles.SupportRequestInfo__item_value}>{user}</div>
      </div>
      <div className={styles.SupportRequestInfo__item}>
        <div className={styles.SupportRequestInfo__item_name}>
          Subject of the request
        </div>
        <div className={styles.SupportRequestInfo__item_value}>{subject}</div>
      </div>
      <div className={styles.SupportRequestInfo__item}>
        <div className={styles.SupportRequestInfo__item_name}>
          Ticket number
        </div>
        <div className={styles.SupportRequestInfo__item_value}>{number}</div>
      </div>
      <div className={styles.SupportRequestInfo__item}>
        <div className={styles.SupportRequestInfo__item_name}>
          Refund amount
        </div>
        <div className={styles.SupportRequestInfo__item_value}>{amount}</div>
      </div>
    </div>
  );
}
