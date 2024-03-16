import LayoutDefault from "../../../layout/LayoutDefault";
import styles from "./style.module.scss";

export default function Tickets() {
  return (
    <LayoutDefault>
      <div className={styles.Tickets}>
        <div className="container">
          <div className={styles.Tickets__container}>Tickets</div>
        </div>
      </div>
    </LayoutDefault>
  );
}
