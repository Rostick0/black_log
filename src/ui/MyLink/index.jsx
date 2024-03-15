import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { setClassName } from "../../app/utils/class";

export default function MyLink({ className, children, ...other }) {
  const styleClassName = setClassName(className);

  return (
    <Link className={styles.link + styleClassName + " word-break"} {...other}>
      {children}
    </Link>
  );
}
