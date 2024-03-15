import { setClassName } from "../../app/utils/class";
import styles from "./style.module.scss";

export default function Title({ className, children, ...other }) {
  const styleClassName = setClassName(className);

  return (
    <h2 className={styles.title + styleClassName} {...other}>
      {children}
    </h2>
  );
}
