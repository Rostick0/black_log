import styles from "./style.module.scss";
import { useTheme } from "../../app/context/ThemeContext";
import { setClassName } from "../../app/utils/class";
import { useMemo } from "react";
import { useUserUpdateMutation } from "../../app/store/modules/userSettings";

export default function SwitchTheme() {
  const [userUpdate] = useUserUpdateMutation();
  const { theme, toggleTheme } = useTheme();

  const activeClass = useMemo(
    () => (theme === "light" ? "" : setClassName(styles.active)),
    [theme]
  );

  const switchClick = () => {
    userUpdate({
      body: {
        dark_mode: theme === "light" ? 1 : 0,
      },
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
