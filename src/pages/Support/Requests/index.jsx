import ComponentSupportRequests from "../../../components/SupportRequests";
import LayoutDefault from "../../../layout/LayoutDefault";
import styles from "./style.module.scss";

export default function Requests() {
  return (
    <LayoutDefault>
      <div className={styles.Requests}>
        <div className="container">
          <ComponentSupportRequests />
        </div>
      </div>
    </LayoutDefault>
  );
}
