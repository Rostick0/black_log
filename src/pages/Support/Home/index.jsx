import { useSelector, useStore } from "react-redux";
import styles from "./style.module.scss";
import HotTickets from "../../../components/HotTickets";
import News from "../../../components/News";
import LayoutDefault from "../../../layout/LayoutDefault";

export default function Home() {
  const store = useStore();

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
