import LayoutProfile from "../../../layout/LayoutProfile";
import ComponentProfileBasket from "../../../components/ProfileBasket";
import styles from "./style.module.scss";

export default function ProfileBasket() {
  return (
    <LayoutProfile>
      <div className={styles.ProfileBasket}>
        <ComponentProfileBasket />
      </div>
    </LayoutProfile>
  );
}
