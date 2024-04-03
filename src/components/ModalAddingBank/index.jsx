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
import { useBankCreateMutation } from "../../app/store/modules/bank";

export default function ModalAddingBank({ close }) {
  const user = useSelector((state) => state.user.value);

  const [createBank, result] = useBankCreateMutation();
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append("data[0][amount]", values?.amount);
    formData.append("data[0][balance]", values?.balance);
    formData.append("data[0][bank_link]", values?.bank_link);
    formData.append("data[0][archive]", values?.archive[0]);
    formData.append("data[0][image]", values?.image[0]);
    formData.append("data[0][seller_id]", user.id);

    const res = await createBank({
      body: formData,
    });

    console.log(res?.error?.data?.errors[0]);

    if (res?.error && res?.error?.data?.errors[0]) {
      setErrorMessageForm(res?.error?.data?.errors[0], setError);

      return;
    }

    setTimeout(() => {
      close();
    }, 1500);
  };

  return (
    <Modal close={close}>
      <div className={styles.ModalAddingBank + " modal-block"}>
        <Title className="text-center" variant="small">
          Adding a new product
        </Title>
        <form
          className={styles.ModalAddingBank__form}
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
            label="Balance"
            name="balance"
            type="number"
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
            className={styles.SellerProfileBasketItem__field}
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
          <UploadForm
            className={styles.SellerProfileBasketItem__field}
            label="Archive"
            name="archive"
            error={setErrorMessage({ formField: errors?.archive })}
            register={register}
            rules={{
              required: true,
            }}
          >
            None file
          </UploadForm>
          <UploadForm
            className={styles.SellerProfileBasketItem__field}
            label="Image"
            name="image"
            error={setErrorMessage({ formField: errors?.image })}
            register={register}
            rules={{
              required: true,
            }}
          >
            None file
          </UploadForm>
          <Button className={styles.ModalAddingBank__btn}>Save</Button>
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
