// Modal
import { setClassName } from "../../app/utils/class";
import styles from "./style.module.scss";

export default function Modal({ className, children, close }) {
  const styleClassName = setClassName(className);

  return (
    <div
      className={styles.Modal + styleClassName}
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;

        if (typeof close === "function") close();
      }}
    >
      <div className={styles.Modal__content}>{children}</div>
    </div>
  );
}
