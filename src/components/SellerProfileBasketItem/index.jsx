import { useForm } from "react-hook-form";
import styles from "./style.module.scss";
import Button from "../../ui/Button";
import InputForm from "../../Form/InputForm";
import CheckboxForm from "../../Form/CheckboxForm";

import { useEffect } from "react";
import {
  useOfferDeleteMutation,
  useOfferUpdateMutation,
} from "../../app/store/modules/offer";
import UploadForm from "../../Form/UploadForm";

export default function SellerProfileBasketItem({ id, ...values }) {
  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    reset({
      amount: values?.amount,
      country: values?.country,
      archive: values?.archive,
      on_sale: values?.on_sale,
    });
  }, []);

  const [updateOffer] = useOfferUpdateMutation();
  const [deleteOffer] = useOfferDeleteMutation();

  const onSubmit = async (values) => {
    console.log(values);
    // updateOffer()
  };

  return (
    <form
      className={styles.SellerProfileBasketItem}
      // onSubmit={}
      method="POST"
    >
      <div className="filter-inputs">
        <InputForm
          className={styles.SellerProfileBasketItem__field}
          label="Amount"
          name="amount"
          register={register}
        />
        <UploadForm
          className={styles.SellerProfileBasketItem__field}
          label="Archive"
          name="archive"
          register={register}
        >None file</UploadForm>
        <InputForm
          className={styles.SellerProfileBasketItem__field}
          label="Country"
          name="country"
          register={register}
        />
        <CheckboxForm
          className={styles.SellerProfileBasketItem__field}
          name="on_sale"
          register={register}
        >
          On sale
        </CheckboxForm>
      </div>
      <div className={styles.SellerProfileBasketItem__btns}>
        <Button onClick={handleSubmit(onSubmit)}>Edit</Button>
        {/* <Button variant="outlined">Withdraw from sale</Button> */}
        <Button
          onClick={(e) => {
            e.preventDefault();
            deleteOffer({ id });
          }}
          variant="red-outlined"
        >
          Remove
        </Button>
      </div>
    </form>
  );
}
