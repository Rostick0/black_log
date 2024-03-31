import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import Title from "../../ui/Title";
import InputForm from "../../Form/InputForm";
import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import { errorsMessage, setErrorMessage } from "../../app/utils/error";
import { useWithdrawalsCreateMutation } from "../../app/store/modules/withdrawal";

export default function ModalWithdraw({ close }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [createWithdrawals, result] = useWithdrawalsCreateMutation();

  const onSubmit = async (values) => {
    const res = await createWithdrawals({ body: values });

    if (result?.isError) return;
    // console.log(result);
    close();
  };

  return (
    <Modal close={close}>
      <form
        className={styles.ModalWithdraw}
        method="post"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Title className="text-center" variant="small">
          Withdraw funds
        </Title>
        <div className={styles.ModalWithdraw__inputs}>
          <InputForm
            label="Withdrawal address"
            name="address"
            error={setErrorMessage({ formField: errors?.name })}
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
            label="Withdrawal amount"
            name="amount"
            error={setErrorMessage({ formField: errors?.name })}
            register={register}
            rules={{
              required: true,
              maxLenght: {
                value: 255,
                message: errorsMessage["maxLenght"](255),
              },
            }}
          />
        </div>
        <Button className={styles.ModalWithdraw__btn}>Bring out</Button>
      </form>
    </Modal>
  );
}
