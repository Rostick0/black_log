import { setClassName } from "../../app/utils/class";
import styles from "./style.module.scss";

export default function Title({ className, children, variant, ...other }) {
  const styleClassName = setClassName(className);
  const styleVariant = setClassName(styles[variant]);

  return (
    <div className={styles.title + styleClassName + styleVariant} {...other}>
      {children}
    </div>
  );
}
