import LayoutProfile from "../../../layout/LayoutProfile";
import ComponentSellerProfileStatistics from "../../../components/SellerProfileStatistics";
import styles from "./style.module.scss";

export default function ProfileStatistics() {
  return (
    <LayoutProfile>
      <div className={styles.ProfileStatistics}>
        <ComponentSellerProfileStatistics />
      </div>
    </LayoutProfile>
  );
}
