import LayoutProfile from "../../../layout/LayoutProfile";
import ComponentSellerProfileStatistics from "../../../components/SellerProfileStatistics";
import styles from "./style.module.scss";
import { useEffect } from "react";

export default function ProfileStatistics() {
  useEffect(() => {
    document.title = "Statistics";
  }, []);

  return (
    <LayoutProfile>
      <div className={styles.ProfileStatistics}>
        <ComponentSellerProfileStatistics />
      </div>
    </LayoutProfile>
  );
}
