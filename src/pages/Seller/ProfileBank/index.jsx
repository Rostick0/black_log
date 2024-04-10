import LayoutProfile from "../../../layout/LayoutProfile";
import ComponentSellerProfileBank from "../../../components/SellerProfileBank";
import styles from "./style.module.scss";
import { useEffect } from "react";

export default function ProfileBank() {
  useEffect(() => {
    document.title = "Banks";
  }, []);

  return (
    <LayoutProfile>
      <div className={styles.ProfileBank}>
        <ComponentSellerProfileBank />
      </div>
    </LayoutProfile>
  );
}
