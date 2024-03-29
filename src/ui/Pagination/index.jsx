import { useState } from "react";
import { setClassName } from "../../app/utils/class";
import Button from "../Button";
import styles from "./style.module.scss";

export default function Pagination({ className, totalPages }) {
  const styleClassName = setClassName(className);
  // const [active, setActive] = useState(1);

  return (
    <div className={styles.Pagination + styleClassName}>
      <Button className={styles.Pagination__arrow}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.0832 5.83329L7.9165 9.99996L12.0832 14.1666"
            stroke="var(--tenth-color)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
      <div className={styles.Pagination__list}>
        <Button className={styles.Pagination__item} variant="bright_blue" disabled>1</Button>
        <Button className={styles.Pagination__item} variant="outlined">2</Button>
      </div>
      <Button className={styles.Pagination__arrow}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.91683 14.1667L12.0835 10L7.91683 5.83337"
            stroke="var(--tenth-color)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </div>
  );
}
