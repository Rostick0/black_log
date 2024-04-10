import LayoutProfile from "../../../layout/LayoutProfile";
import ComponentSellerProfileBasket from "../../../components/SellerProfileBasket";
import styles from "./style.module.scss";
import { useEffect } from "react";

export default function ProfileBasket() {
  useEffect(() => {
    document.title = "Basket";
  }, []);

  return (
    <LayoutProfile>
      <div className={styles.ProfileBasket}>
        <ComponentSellerProfileBasket />
      </div>
    </LayoutProfile>
  );
}
