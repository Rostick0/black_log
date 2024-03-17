import LayoutProfile from "../../../layout/LayoutProfile";
import ComponentSellerProfileBasket from "../../../components/SellerProfileBasket";
import styles from "./style.module.scss";

export default function ProfileBasket() {
  return (
    <LayoutProfile>
      <div className={styles.ProfileBasket}>
        <ComponentSellerProfileBasket />
      </div>
    </LayoutProfile>
  );
}
