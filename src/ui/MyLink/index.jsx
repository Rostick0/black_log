import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { setClassName } from "../../app/utils/class";

export default function MyLink({
  className,
  children,
  withArrow = false,
  ...other
}) {
  const styleClassName = setClassName(className);

  return (
    <Link className={styles.link + styleClassName + " word-break"} {...other}>
      <span className={styles.link__children}>{children}</span>
      {withArrow && (
        <svg
          className={styles.link__arrow}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--first-color)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.5 7L14.5 12L9.5 17"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Link>
  );
}
