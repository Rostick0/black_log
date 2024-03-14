import { setClassName } from "../../app/utils/class";
import styles from "./style.module.scss";

export default function P({ className, children, ...other }) {
  const styleClassName = setClassName(className);

  return (
    <p className={styles.p + styleClassName} {...other}>
      {children}
    </p>
  );
}
