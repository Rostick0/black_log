// ModalAddingProduct
import { useForm } from "react-hook-form";
import UploadForm from "../../Form/UploadForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import Title from "../../ui/Title";
import styles from "./style.module.scss";
import { useOfferCreateMutation } from "../../app/store/modules/offer";
import { useSelector } from "react-redux";
import InputForm from "../../Form/InputForm";
import {
  errorsMessage,
  setErrorMessage,
  setErrorMessageForm,
} from "../../app/utils/error";
import { useMemo, useState } from "react";

export default function ModalAddingProduct({ close }) {
  const user = useSelector((state) => state.user.value);

  const [createOffser, result] = useOfferCreateMutation();
  const {
    handleSubmit,
    register,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const [countArchive, setCountArchive] = useState(1);

  const arrayArchive = useMemo(
    () => Array.from(Array(countArchive).keys()),
    [countArchive]
  );

  const onSubmit = async (values) => {
    const formData = new FormData();

    values?.archive?.forEach((item, index) => {
      if (!item?.[0]) return;

      formData.append(`data[${index}][amount]`, values?.amount);
      formData.append(`data[${index}][archive]`, item[0]);
      formData.append(`data[${index}][country]`, values?.country);
      formData.append(`data[${index}][seller_id]`, user.id);
    });

    const res = await createOffser({
      body: formData,
    });

    console.log(res?.error?.data?.errors);

    if (res?.error && res?.error?.data?.errors) {
      const errorsObject = Object.entries(res?.error?.data?.errors);

      if (!errorsObject?.length) return;

      setErrorMessageForm({ ...errorsObject[0]?.[1] }, setError);
      clearErrors("archive");

      errorsObject?.forEach((item) => {
        const error = {};
        error[`archive[${item?.[0]}]`] = item?.[1]?.archive;
        setErrorMessageForm(error, setError);
      });

      return;
    }

    setTimeout(() => {
      close();
    }, 1500);
  };

  return (
    <Modal close={close}>
      <div className={styles.ModalAddingProduct + " modal-block"}>
        <Title className="text-center" variant="small">
          Adding a new product
        </Title>
        <form
          className={styles.ModalAddingProduct__form}
          onSubmit={handleSubmit(onSubmit)}
          method="post"
        >
          <InputForm
            className={styles.SellerProfileBasketItem__field}
            label="Amount"
            name="amount"
            type="number"
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
          {arrayArchive.map((el, index) => (
            <UploadForm
              key={index}
              className={styles.SellerProfileBasketItem__field}
              accept=".zip"
              label="Archive"
              name={`archive[${index}]`}
              error={setErrorMessage({ formField: errors?.archive?.[index] })}
              register={register}
              onChange={() => {
                if (arrayArchive.length - 1 !== index) return;
                // console.log(5);
                setCountArchive((prev) => (prev += 1));
              }}
              // arrayArchive.length - 1 !== index ||
              rules={
                index === 0
                  ? {
                      required: true,
                    }
                  : {}
              }
            >
              None file
            </UploadForm>
          ))}
          <Button className={styles.ModalAddingProduct__btn}>Save</Button>
        </form>
        {result?.data?.message && (
          <>
            <br />
            <p>{result?.data?.message}</p>
          </>
        )}
      </div>
    </Modal>
  );
}
