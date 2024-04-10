import { useState } from "react";
import Button from "../../ui/Button";
import Title from "../../ui/Title";
import SellerProfileBasketItem from "../SellerProfileBasketItem";
import styles from "./style.module.scss";
import ModalAddingProduct from "../ModalAddingProduct";
import { useOffersMyGetQuery } from "../../app/store/modules/offer";
import Pagination from "../../ui/Pagination";
import useFilter from "../../app/hook/useFilter";

export default function SellerProfileBasket() {
  const { filters, updateCurrentFilterValue } = useFilter();
  const { data } = useOffersMyGetQuery(filters);

  const [activeModal, setActiveModal] = useState(false);

  console.log(data);
  return (
    <div className={styles.SellerProfileBasket}>
      <div className={styles.SellerProfileBasket__top}>
        <Title className={styles.SellerProfileBasket__title} variant="small">
          Your products
        </Title>
        <Button onClick={() => setActiveModal(true)}>Add a new</Button>
      </div>
      {data?.data?.length > 0 &&
        data?.data?.map((item) => (
          <SellerProfileBasketItem key={item.id} {...item} />
        ))}
      <Pagination
        links={data?.links}
        currentPage={data?.current_page}
        lastPage={data?.last_page}
        onChange={(number) => updateCurrentFilterValue("page", number)}
      />
      {activeModal && (
        <ModalAddingProduct close={() => setActiveModal(false)} />
      )}
    </div>
  );
}
