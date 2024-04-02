import { useState } from "react";
import Button from "../../ui/Button";
import Title from "../../ui/Title";
import SellerProfileBasketItem from "../SellerProfileBasketItem";
import styles from "./style.module.scss";
import ModalAddingProduct from "../ModalAddingProduct";
import { useOffersMyGetQuery } from "../../app/store/modules/offer";

export default function SellerProfileBasket() {
  const { data } = useOffersMyGetQuery();

  const [activeModal, setActiveModal] = useState(false);

  return (
    <div className={styles.SellerProfileBasket}>
      <div className={styles.SellerProfileBasket__top}>
        <Title className={styles.SellerProfileBasket__title} variant="small">
          Your products
        </Title>
        <Button onClick={() => setActiveModal(true)}>Add a new</Button>
      </div>
      {data?.data?.length > 0 && data?.data?.map((item) => (
        <SellerProfileBasketItem key={item.id} {...item} />
      ))}
      {activeModal && (
        <ModalAddingProduct close={() => setActiveModal(false)} />
      )}
    </div>
  );
}
