import HotOffers from "../../components/HotOffers";
import News from "../../components/News";
import LayoutDefault from "../../layout/LayoutDefault";
import styles from "./style.module.scss";

export default function Home() {
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
