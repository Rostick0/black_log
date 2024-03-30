import styles from "./style.module.scss";
import { useTheme } from "../../app/context/ThemeContext";
import { setClassName } from "../../app/utils/class";
import { useMemo } from "react";
import { submit } from "../../app/utils/form";

export default function SwitchTheme({ userUpdate }) {
  const { theme, toggleTheme } = useTheme();

  const activeClass = useMemo(
    () => (theme === "light" ? "" : setClassName(styles.active)),
    [theme]
  );

  const onSubmit = submit(userUpdate);

  const switchClick = () => {
    onSubmit({
      dark_mode: !theme,
    });
    toggleTheme();
  };

  return (
    <div className={styles.SwitchTheme}>
      <span>Dark Mode</span>
      <div
        className={styles.SwitchTheme__switch + activeClass}
        onClick={switchClick}
      >
        <div className={styles.SwitchTheme__circle}></div>
      </div>
    </div>
  );
}
