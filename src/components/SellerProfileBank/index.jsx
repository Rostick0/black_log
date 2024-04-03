import { useState } from "react";
import Button from "../../ui/Button";
import Title from "../../ui/Title";
import SellerProfileBankItem from "../SellerProfileBankItem";
import styles from "./style.module.scss";
import { useBanksMyGetQuery } from "../../app/store/modules/bank";
import ModalAddingBank from "../ModalAddingBank";

export default function SellerProfileBank() {
  const { data } = useBanksMyGetQuery();

  const [activeModal, setActiveModal] = useState(false);

  return (
    <div className={styles.SellerProfileBank}>
      <div className={styles.SellerProfileBank__top}>
        <Title className={styles.SellerProfileBank__title} variant="small">
          Your banks
        </Title>
        <Button onClick={() => setActiveModal(true)}>Add a new</Button>
      </div>
      {data?.data?.length > 0 && data?.data?.map((item) => (
        <SellerProfileBankItem key={item.id} {...item} />
      ))}
      {activeModal && (
        <ModalAddingBank close={() => setActiveModal(false)} />
      )}
    </div>
  );
}
