// ProfileSettings
import styles from "./style.module.scss";
import { setClassName } from "../../app/utils/class";
import Title from "../../ui/Title";

export default function Nav({ routes }) {
  return (
    <div className={styles.ProfileSettings}>
        <Title></Title>
    </div>
  );
}
