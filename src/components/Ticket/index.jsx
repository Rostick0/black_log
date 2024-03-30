import Title from "../../ui/Title";
import styles from "./style.module.scss";

export default function Ticket({ id, created_at, info, action }) {
  return (
    <div className={styles.Ticket}>
      <div className={styles.Ticket__top}>
        <Title>#{id}</Title>
        <div className={styles.Ticket__date}>{created_at}</div>
      </div>
      {info}
      {action && <div className={styles.Ticket__bottom}>{action}</div>}
    </div>
  );
}
