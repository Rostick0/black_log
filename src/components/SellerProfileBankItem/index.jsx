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
import { useBankDeleteMutation, useBankUpdateMutation } from "../../app/store/modules/bank";

export default function SellerProfileBankItem({ id, ...values }) {
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
      balance: values?.balance,
      bank_link: values?.bank_link,
      archive: "",
      image: "",
      on_sale: values?.on_sale,
    });
  }, []);

  const [updateBank] = useBankUpdateMutation();
  const [deleteBank] = useBankDeleteMutation();

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append("amount", values?.amount);
    formData.append("balance", values?.balance);
    formData.append("bank_link", values?.bank_link);
    formData.append("on_sale", values?.on_sale);
    if (values?.archive[0]) formData.append("archive", values?.archive[0]);
    if (values?.image[0]) formData.append("image", values?.image[0]);

    const res = await updateBank({ body: formData, id });
    if (res?.error && res?.error?.data?.errors) {
      setErrorMessageForm(res?.error?.data?.errors, setError);

      return;
    }

    reset({
      amount: values?.amount,
      balance: values?.balance,
      bank_link: values?.bank_link,
      archive: "",
      image: "",
      on_sale: values?.on_sale,
    });
  };

  return (
    <form className={styles.SellerProfileBankItem} method="POST">
      <div className={styles.SellerProfileBankItem__fields + " filter-inputs"}>
        <InputForm
          className={styles.SellerProfileBankItem__field}
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
         <InputForm
          className={styles.SellerProfileBankItem__field}
          label="Balance"
          name="balance"
          error={setErrorMessage({ formField: errors?.balance })}
          register={register}
          rules={{
            required: true,
            maxLenght: {
              value: 255,
              message: errorsMessage["maxLenght"](255),
            },
          }}
        />
        <InputForm
          className={styles.SellerProfileBankItem__field}
          label="Bank link"
          name="bank_link"
          error={setErrorMessage({ formField: errors?.bank_link })}
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
          className={styles.SellerProfileBankItem__field}
          name="on_sale"
          register={register}
          error={setErrorMessage({ formField: errors?.on_sale })}
        >
          On sale
        </CheckboxForm>
        <UploadForm
          className={styles.SellerProfileBankItem__field}
          label="Archive"
          name="archive"
          error={setErrorMessage({ formField: errors?.archive })}
          register={register}
        >
          File upload
        </UploadForm>
        <UploadForm
          className={styles.SellerProfileBankItem__field}
          label="Image"
          name="image"
          error={setErrorMessage({ formField: errors?.image })}
          register={register}
        >
          File upload
        </UploadForm>
      </div>
      <div className={styles.SellerProfileBankItem__btns}>
        <Button onClick={handleSubmit(onSubmit)}>Edit</Button>
        {/* <Button variant="outlined">Withdraw from sale</Button> */}
        <Button
          onClick={(e) => {
            e.preventDefault();
            deleteBank({ id });
          }}
          variant="red-outlined"
        >
          Remove
        </Button>
      </div>
    </form>
  );
}
