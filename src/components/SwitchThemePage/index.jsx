import SwitchTheme from "../SwitchTheme";
import styles from "./style.module.scss";

export default function SwitchThemePage() {
  return (
    <div className={styles.SwitchThemePage}>
      <SwitchTheme />
    </div>
  );
}
