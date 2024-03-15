import LayoutDefault from "../../layout/LayoutDefault";
import styles from "./style.module.scss";

export default function Requests() {
  return (
    <LayoutDefault>
      <div className={styles.Requests}>
        <div className="container">
          <div className={styles.Requests__container}>Requests</div>
        </div>
      </div>
    </LayoutDefault>
  );
}
