import ComponentBanks from "../../components/Banks";
import LayoutDefault from "../../layout/LayoutDefault";
import styles from "./style.module.scss";

export default function Banks() {
  return (
    <LayoutDefault>
      <div className={styles.Banks}>
        <div className="container">
          <div className={styles.Banks__container}>
            <ComponentBanks />
          </div>
        </div>
      </div>
    </LayoutDefault>
  );
}
