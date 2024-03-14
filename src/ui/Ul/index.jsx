import { setClassName } from "../../app/utils/class";
import styles from "./style.module.scss";

export default function Ul({ className, children, variant, ...other }) {
  const styleClassName = setClassName(className);
  const styleVariant = setClassName(styles[variant]);

  return (
    <ul className={styles.ul + styleClassName + styleVariant} {...other}>
      {children}
    </ul>
  );
}
