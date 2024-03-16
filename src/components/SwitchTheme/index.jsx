// SwitchTheme
import styles from "./style.module.scss";
import { useTheme } from "../../app/context/ThemeContext";
import { setClassName } from "../../app/utils/class";
import { useMemo } from "react";

export default function SwitchTheme({}) {
  const { theme, toggleTheme } = useTheme();
console.log(theme);
  const activeClass = useMemo(() => theme === "light" ? "" : setClassName(styles.active), [theme])

  return (
    <div className={styles.SwitchTheme}>
      <span>Dark Mode</span>
      <div className={styles.SwitchTheme__switch + activeClass} onClick={toggleTheme}>
        <div className={styles.SwitchTheme__circle}></div>
      </div>
    </div>
  );
}
