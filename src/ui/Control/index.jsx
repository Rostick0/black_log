import styles from "./style.module.scss";
import { setClassName } from "../../app/utils/class";

export default function Control({
  className,
  label,
  error,
  children,
  isDiv = false,
  ...other
}) {
  const styleClassName = setClassName(className);

  const Elem = ({ children }) =>
    isDiv ? (
      <label className={styles.control + styleClassName} {...other}>{children}</label>
    ) : (
      <label className={styles.control + styleClassName} {...other}>{children}</label>
    );

  return (
    <Elem>
      {label && <span className={styles.control__title}>{label}</span>}
      {children}
      {error && <span className={styles.control__error}>{error}</span>}
    </Elem>
  );
}
