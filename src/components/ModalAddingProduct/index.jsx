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

export default function ModalAddingProduct({ close }) {
  const user = useSelector((state) => state.user.value);

  const [createOffser, result] = useOfferCreateMutation();
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append("data[0][amount]", values?.amount);
    formData.append("data[0][archive]", values?.archive[0]);
    formData.append("data[0][country]", values?.country);
    formData.append("data[0][seller_id]", user.id);

    const res = await createOffser({
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
