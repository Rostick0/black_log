import styles from "./style.module.scss";
import { setClassName } from "../../app/utils/class";
import { memo } from "react";

const Elem = memo(({ children, styleClassName, isDiv, ...other }) =>
  isDiv ? (
    <div className={styles.control + styleClassName} {...other}>
      {children}
    </div>
  ) : (
    <label className={styles.control + styleClassName} {...other}>
      {children}
    </label>
  )
);

export default function Control({
  className,
  label,
  error,
  children,
  isDiv = false,
  ...other
}) {
  const styleClassName = setClassName(className);

  return (
    <Elem styleClassName={styleClassName} isDiv {...other}>
      {label && <span className={styles.control__title}>{label}</span>}
      {children}
      {error && <span className={styles.control__error}>{error}</span>}
    </Elem>
  );
}
