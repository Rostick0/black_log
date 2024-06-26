import { useEffect } from "react";
import ComponentProfileTransactions from "../../../components/ProfileTransactions";
import LayoutProfile from "../../../layout/LayoutProfile";
import styles from "./style.module.scss";

export default function ProfileTransactions() {
  useEffect(() => {
    document.title = "Transactions";
  }, []);

  return (
    <LayoutProfile>
      <div className={styles.ProfileTransactions}>
        <ComponentProfileTransactions />
      </div>
    </LayoutProfile>
  );
}
