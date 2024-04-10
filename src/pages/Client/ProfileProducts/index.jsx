import LayoutProfile from "../../../layout/LayoutProfile";
import ComponentProfileProducts from "../../../components/ProfileProducts";
import styles from "./style.module.scss";
import { useEffect } from "react";

export default function ProfileProducts() {
  useEffect(() => {
    document.title = "Products";
  }, []);

  return (
    <LayoutProfile>
      <div className={styles.ProfileProducts}>
        <ComponentProfileProducts />
      </div>
    </LayoutProfile>
  );
}
