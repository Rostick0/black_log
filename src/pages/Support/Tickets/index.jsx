import ComponentSupportTickets from "../../../components/SupportTickets";
import LayoutDefault from "../../../layout/LayoutDefault";
import styles from "./style.module.scss";

export default function Tickets() {
  return (
    <LayoutDefault>
      <div className={styles.Tickets}>
        <div className="container">
          <ComponentSupportTickets />
        </div>
      </div>
    </LayoutDefault>
  );
}
