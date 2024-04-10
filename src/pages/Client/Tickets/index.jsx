import { useEffect } from "react";
import ComponentUserTickets from "../../../components/UserTickets";
import LayoutDefault from "../../../layout/LayoutDefault";
import styles from "./style.module.scss";

export default function Tickets() {
  useEffect(() => {
    document.title = "Tickets";
  }, []);

  return (
    <LayoutDefault>
      <div className={styles.Tickets}>
        <div className="container">
          <ComponentUserTickets />
        </div>
      </div>
    </LayoutDefault>
  );
}
