import styles from "./style.module.scss";

export default function Checkbox({ children, type, ...other }) {
  return (
    <label className={styles.checkbox}>
      <input className={styles.checkbox__input} type="checkbox" {...other} />
      <span className={styles.checkbox__icon}></span>
      <span className={styles.checkbox__name}>{children}</span>
    </label>
  );
}
