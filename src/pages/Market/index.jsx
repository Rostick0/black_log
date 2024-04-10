import LayoutDefault from "../../layout/LayoutDefault";
import MarketContent from "../../components/Market";
import styles from "./style.module.scss";
import { useEffect } from "react";

export default function Market() {
  useEffect(() => {
    document.title = "Market";
  }, []);

  return (
    <LayoutDefault>
      <div className={styles.Market}>
        <div className="container">
          <div className={styles.Market__container}>
            <MarketContent />
          </div>
        </div>
      </div>
    </LayoutDefault>
  );
}
