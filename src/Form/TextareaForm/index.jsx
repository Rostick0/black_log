import Control from "../../ui/Control";
import styles from "./style.module.scss";
import stylesInput from "../../ui/Textarea/style.module.scss";

export default function TextareaForm({
  className,
  label,
  error,
  register,
  children,
  name = "",
  rules = {},
  icon,
  ...other
}) {
  return (
    <Control className={className} label={label} error={error}>
      <span className={styles.field}>
        <textarea
          className={stylesInput.textarea}
          {...register(name, rules)}
          {...other}
        >{children}</textarea>
        {icon}
      </span>
    </Control>
  );
}
