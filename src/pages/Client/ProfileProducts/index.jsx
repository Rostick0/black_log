import LayoutProfile from "../../../layout/LayoutProfile";
import ComponentProfileProducts from "../../../components/ProfileProducts";
import styles from "./style.module.scss";

export default function ProfileProducts() {
  return (
    <LayoutProfile>
      <div className={styles.ProfileProducts}>
        <ComponentProfileProducts />
      </div>
    </LayoutProfile>
  );
}
