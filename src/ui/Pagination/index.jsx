import { setClassName } from "../../app/utils/class";
import Button from "../Button";
import styles from "./style.module.scss";

export default function Pagination({
  className,
  onChange,
  links,
  currentPage,
  lastPage,
}) {
  const styleClassName = setClassName(className);

  const decrement = () => {
    if (1 >= currentPage) return;

    onChange(currentPage - 1);
  };

  const increment = () => {
    if (lastPage <= currentPage) return;

    onChange(currentPage + 1);
  };

  if (lastPage === 1) return;

  return (
    <div className={styles.Pagination + styleClassName}>
      <Button className={styles.Pagination__arrow} onClick={decrement}>
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
        {links?.length &&
          links?.slice(1, -1).map((item) => (
            <Button
              className={styles.Pagination__item}
              key={item.label}
              variant={item?.active ? "bright_blue" : "outlined"}
              disabled={item?.active}
              onClick={() => onChange(item.label)}
            >
              {item.label}
            </Button>
          ))}
      </div>
      <Button className={styles.Pagination__arrow} onClick={increment}>
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
