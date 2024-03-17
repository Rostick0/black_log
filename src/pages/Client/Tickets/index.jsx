import ComponentTickets from "../../../components/Tickets";
import LayoutDefault from "../../../layout/LayoutDefault";
import styles from "./style.module.scss";

export default function Tickets() {
  return (
    <LayoutDefault>
      <div className={styles.Tickets}>
        <div className="container">
          <ComponentTickets />
        </div>
      </div>
    </LayoutDefault>
  );
}
