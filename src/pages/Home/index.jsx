import HotOffers from "../../components/HotOffers";
import News from "../../components/News";
import LayoutDefault from "../../layout/LayoutDefault";
import styles from "./style.module.scss";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Hot offers";
  }, []);

  return (
    <LayoutDefault>
      <div className={styles.Home}>
        <div className="container">
          <div className={styles.Home__container}>
            <HotOffers />
            <News />
          </div>
        </div>
      </div>
    </LayoutDefault>
  );
}
