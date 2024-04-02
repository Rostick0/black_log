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
import {
  errorsMessage,
  setErrorMessage,
  setErrorMessageForm,
} from "../../app/utils/error";

export default function SellerProfileBasketItem({ id, ...values }) {
  const {
    handleSubmit,
    register,
    reset,
    setError,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset({
      amount: values?.amount,
      country: values?.country,
      archive: "",
      on_sale: values?.on_sale,
    });
  }, []);

  const [updateOffer] = useOfferUpdateMutation();
  const [deleteOffer] = useOfferDeleteMutation();

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append("amount", values?.amount);
    formData.append("country", values?.country);
    formData.append("on_sale", values?.on_sale);
    if (values?.archive[0]) formData.append("archive", values?.archive[0]);

    const res = await updateOffer({ body: formData, id });
    if (res?.error && res?.error?.data?.errors) {
      setErrorMessageForm(res?.error?.data?.errors, setError);

      return;
    }

    reset({
      amount: values?.amount,
      country: values?.country,
      archive: "",
      on_sale: values?.on_sale,
    });
  };

  return (
    <form className={styles.SellerProfileBasketItem} method="POST">
      <div
        className={styles.SellerProfileBasketItem__fields + " filter-inputs"}
      >
        <InputForm
          className={styles.SellerProfileBasketItem__field}
          label="Amount"
          name="amount"
          error={setErrorMessage({ formField: errors?.amount })}
          register={register}
          rules={{
            required: true,
            maxLenght: {
              value: 255,
              message: errorsMessage["maxLenght"](255),
            },
          }}
        />
        <UploadForm
          className={styles.SellerProfileBasketItem__field}
          label="Archive"
          name="archive"
          error={setErrorMessage({ formField: errors?.archive })}
          register={register}
        >
          File upload
        </UploadForm>
        <InputForm
          className={styles.SellerProfileBasketItem__field}
          label="Country"
          name="country"
          error={setErrorMessage({ formField: errors?.country })}
          register={register}
          rules={{
            required: true,
            maxLenght: {
              value: 255,
              message: errorsMessage["maxLenght"](255),
            },
          }}
        />
        <CheckboxForm
          className={styles.SellerProfileBasketItem__field}
          name="on_sale"
          register={register}
          error={setErrorMessage({ formField: errors?.on_sale })}
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
