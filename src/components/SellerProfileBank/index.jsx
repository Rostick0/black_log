import { useState } from "react";
import Button from "../../ui/Button";
import Title from "../../ui/Title";
import SellerProfileBankItem from "../SellerProfileBankItem";
import styles from "./style.module.scss";
import { useBanksMyGetQuery } from "../../app/store/modules/bank";
import ModalAddingBank from "../ModalAddingBank";
import useFilter from "../../app/hook/useFilter";
import Pagination from "../../ui/Pagination";

export default function SellerProfileBank() {
  const { filters, updateCurrentFilterValue } = useFilter();
  const { data } = useBanksMyGetQuery(filters);

  const [activeModal, setActiveModal] = useState(false);

  return (
    <div className={styles.SellerProfileBank}>
      <div className={styles.SellerProfileBank__top}>
        <Title className={styles.SellerProfileBank__title} variant="small">
          Your banks
        </Title>
        <Button onClick={() => setActiveModal(true)}>Add a new</Button>
      </div>
      {data?.data?.length > 0 &&
        data?.data?.map((item) => (
          <SellerProfileBankItem key={item.id} {...item} />
        ))}
      <Pagination
        links={data?.links}
        currentPage={data?.current_page}
        lastPage={data?.last_page}
        onChange={(number) => updateCurrentFilterValue("page", number)}
      />
      {activeModal && <ModalAddingBank close={() => setActiveModal(false)} />}
    </div>
  );
}
