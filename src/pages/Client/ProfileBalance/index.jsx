import ComponentProfileBalance from "../../../components/ProfileBalance";
import LayoutProfile from "../../../layout/LayoutProfile";
import styles from "./style.module.scss";

export default function ProfileBalance() {
  return (
    <LayoutProfile>
      <div className={styles.ProfileBalance}>
        <ComponentProfileBalance />
      </div>
    </LayoutProfile>
  );
}
