import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import styles from "./style.module.scss";
import SelectForm from "../../Form/SelectForm";
import { useEffect } from "react";
import InputForm from "../../Form/InputForm";

export default function TicketActionRequest({ id, status }) {
  const { handleSubmit, register, setValue } = useForm();

  useEffect(() => {
    setValue('status', status);
}, [status]);

  const onSubmit = async (values) => {
    console.log(values);
  };

  const statusItems = [
    {
      value: "work",
      name: "At work",
    },
    {
      value: "close",
      name: "Closed",
    },
  ];

  return (
    <div className={styles.TicketActionRequest}>
      <form
        className={styles.TicketActionRequest__form}
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
      >
        <SelectForm
          label="Status"
          name="status"
          register={register}
          items={statusItems}
          setValueHookForm={setValue}
          withIcon
        />
        <Button>save</Button>
      </form>
      <form
        className={styles.TicketActionRequest__form}
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
      >
        <InputForm
          label="Refund amount"
          name="amount"
          register={register}
          type="number"
        />
        <Button>Refund</Button>
      </form>
    </div>
  );
}
