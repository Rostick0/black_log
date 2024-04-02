import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import InputForm from "../../../../Form/InputForm";
import Modal from "../../../../ui/Modal";
import Title from "../../../../ui/Title";
import Button from "../../../../ui/Button";
import { useReturnCreateMutation } from "../../../../app/store/modules/return";
import { errorsMessage, setErrorMessage } from "../../../../app/utils/error";
import { useTicketCreateMutation } from "../../../../app/store/modules/ticket";

export default function ModalTicket({ close, product_id }) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const [createTicket, result] = useTicketCreateMutation();

  const onSubmit = async (values) => {
    await createTicket({
      body: {
        ...values,
        product_id,
      },
    });

    reset({
      subject: "",
      amount: "",
      comment: "",
    });

    setTimeout(() => {
      close();
    }, 1500);
  };

  return (
    <Modal close={close}>
      <div className="modal-block">
        <Title className="text-center" variant="small">
          Create ticket - Product #{product_id}
        </Title>
        <form
          className={styles.ModalTicket__form}
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
                message: errorsMessage["maxLenght"](255),
              },
            }}
          />
          <InputForm
            name="amount"
            label="Amount"
            register={register}
            error={setErrorMessage({ formField: errors?.amount })}
            type="number"
            rules={{
              required: true,
              maxLenght: {
                value: 255,
                message: errorsMessage["maxLenght"](255),
              },
            }}
          />
          <InputForm
            name="comment"
            label="Comment"
            register={register}
            error={setErrorMessage({ formField: errors?.comment })}
            rules={{
              required: true,
              maxLenght: {
                value: 255,
                message: errorsMessage["minLenght"](255),
              },
            }}
          />
          <Button>Send</Button>
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
