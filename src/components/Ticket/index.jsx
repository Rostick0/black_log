import Title from "../../ui/Title";
import styles from "./style.module.scss";

export default function Ticket({ id, date, info, action }) {
  return (
    <div className={styles.Ticket}>
      <div className={styles.Ticket__top}>
        <Title>#{id}</Title>
        <div className={styles.Ticket__date}>{date}</div>
      </div>
      {info}
      {action && <div className={styles.Ticket__bottom}>{action}</div>}
    </div>
  );
}
