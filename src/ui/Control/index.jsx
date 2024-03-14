import styles from "./style.module.scss";
import { setClassName } from "../../app/utils/class";

export default function Control({ className, label, error, children }) {
  const styleClassName = setClassName(className);

  return (
    <label className={styles.control + styleClassName}>
      {label && <span className={styles.control__title}>{label}</span>}
      {children}
      {error && (
        <span className={styles.control__error}>{error}</span>
      )}
    </label>
  );
}
