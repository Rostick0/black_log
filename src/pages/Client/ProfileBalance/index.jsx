import { useEffect } from "react";
import ComponentProfileBalance from "../../../components/ProfileBalance";
import LayoutProfile from "../../../layout/LayoutProfile";
import styles from "./style.module.scss";

export default function ProfileBalance() {
  useEffect(() => {
    document.title = "Balance";
  }, []);

  return (
    <LayoutProfile>
      <div className={styles.ProfileBalance}>
        <ComponentProfileBalance />
      </div>
    </LayoutProfile>
  );
}
