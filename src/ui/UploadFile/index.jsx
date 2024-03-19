import { setClassName } from "../../app/utils/class";
import styles from "./style.module.scss";
import stylesButton from "../Button/style.module.scss";

export default function UploadFile({ className, children, variant, ...other }) {
  const styleClassName = setClassName(className);
  const styleVariant = setClassName(styles[variant]);

  return (
    <label
      className={styles.UploadFile + styleClassName + styleVariant}
      {...other}
    >
      <span className={stylesButton.btn + " btn-circle"}>
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0003 7.00732V13.674M13.3337 10.3407H6.66699M10.0003 17.424C6.08831 17.424 2.91699 14.2527 2.91699 10.3407C2.91699 6.42864 6.08831 3.25732 10.0003 3.25732C13.9123 3.25732 17.0837 6.42864 17.0837 10.3407C17.0837 14.2527 13.9123 17.424 10.0003 17.424Z"
            stroke="var(--tenth-color)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="fw-600">{children}</span>
      <input type="file" hidden />
    </label>
  );
}
