import styles from "./style.module.scss";
import HotTickets from "../../../components/HotTickets";
import News from "../../../components/News";
import LayoutDefault from "../../../layout/LayoutDefault";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Hot Tickets";
  }, []);

  return (
    <LayoutDefault>
      <div className={styles.Home}>
        <div className="container">
          <div className={styles.Home__container}>
            <HotTickets />
            <News />
          </div>
        </div>
      </div>
    </LayoutDefault>
  );
}
