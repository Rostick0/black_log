import LayoutProfile from "../../../layout/LayoutProfile";
import ComponentProfileBasket from "../../../components/ProfileBasket";
import styles from "./style.module.scss";
import { useEffect } from "react";

export default function ProfileBasket() {
  useEffect(() => {
    document.title = "Basket";
  }, []);

  return (
    <LayoutProfile>
      <div className={styles.ProfileBasket}>
        <ComponentProfileBasket />
      </div>
    </LayoutProfile>
  );
}
