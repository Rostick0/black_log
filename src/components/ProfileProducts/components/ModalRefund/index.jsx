import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import InputForm from "../../../../Form/InputForm";
import Modal from "../../../../ui/Modal";
import Title from "../../../../ui/Title";
import Button from "../../../../ui/Button";
import { useReturnCreateMutation } from "../../../../app/store/modules/return";
import { errorsMessage, setErrorMessage } from "../../../../app/utils/error";

export default function ModalRefund({ close, purchase_id }) {
  const {
    handleSubmit,
    register,
    reset,
    setError,
    formState: { errors },
  } = useForm();
  const [createReturn, result] = useReturnCreateMutation();

  const onSubmit = async (values) => {
    const res = await createReturn({
      body: {
        ...values,
        purchase_id,
      },
    });

    if (res?.error?.data?.errors?.message) {
      setError("subject", res?.error?.data?.errors);
      return;
    }

    reset({
      subject: "",
    });

    setTimeout(() => {
      close();
    }, 1500);
  };

  return (
    <Modal close={close}>
      <div className="modal-block">
        <Title className="text-center" variant="small">
          Refund product #{purchase_id}
        </Title>
        <form
          className={styles.ModalRefund__form}
          onSubmit={handleSubmit(onSubmit)}
          method="post"
        >
          <InputForm
            name="subject"
            label="Subject"
            register={register}
            error={setErrorMessage({ formField: errors?.subject })}
            rules={{
              required: true,
              maxLenght: {
                value: 255,
                message: errorsMessage["minLenght"](255),
              },
            }}
          />
          <Button>Refund</Button>
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
