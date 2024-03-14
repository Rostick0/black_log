import { setClassName } from "../../app/utils/class";
import styles from "./style.module.scss";

export default function Textarea({ className, children, ...other }) {
  const styleClassName = setClassName(className);

  return <textarea className={styles.textarea + styleClassName} {...other}>{children}</textarea>;
}
