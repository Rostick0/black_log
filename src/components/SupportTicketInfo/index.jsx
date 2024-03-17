// SupportTicketInfo
import styles from "./style.module.scss";

export default function SupportTicketInfo({
  user,
  subject,
  seller,
  amount,
  comment,
}) {
  return (
    <div className={styles.SupportTicketInfo}>
      <div className={styles.SupportTicketInfo__item}>
        <div className={styles.SupportTicketInfo__item_name}>User</div>
        <div className={styles.SupportTicketInfo__item_value}>{user}</div>
      </div>
      <div className={styles.SupportTicketInfo__item}>
        <div className={styles.SupportTicketInfo__item_name}>
          Subject of the request
        </div>
        <div className={styles.SupportTicketInfo__item_value}>{subject}</div>
      </div>
      <div className={styles.SupportTicketInfo__item}>
        <div className={styles.SupportTicketInfo__item_name}>Seller</div>
        <div className={styles.SupportTicketInfo__item_value}>{seller}</div>
      </div>
      <div className={styles.SupportTicketInfo__item}>
        <div className={styles.SupportTicketInfo__item_name}>
          Purchase amount
        </div>
        <div className={styles.SupportTicketInfo__item_value}>{amount}</div>
      </div>
      <div className={styles.SupportTicketInfo__item}>
        <div className={styles.SupportTicketInfo__item_name}>Comment</div>
        <div className={styles.SupportTicketInfo__item_value}>{comment}</div>
      </div>
    </div>
  );
}
