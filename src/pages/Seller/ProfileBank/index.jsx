import LayoutProfile from "../../../layout/LayoutProfile";
import ComponentSellerProfileBank from "../../../components/SellerProfileBank";
import styles from "./style.module.scss";

export default function ProfileBank() {
  return (
    <LayoutProfile>
      <div className={styles.ProfileBank}>
        <ComponentSellerProfileBank />
      </div>
    </LayoutProfile>
  );
}
