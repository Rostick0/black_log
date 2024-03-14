import styles from "./style.module.scss";
import stylesInput from "../../ui/Input/style.module.scss";
import Control from "../../ui/Control";

export default function InputForm({
  className,
  label,
  error,
  register,
  name = "",
  rules = {},
  icon,
  ...other
}) {
  return (
    <Control className={className} label={label} error={error}>
      <span className={styles.field}>
        <input
          className={stylesInput.input}
          {...register(name, rules)}
          {...other}
        />
        {icon}
      </span>
    </Control>
  );
}
