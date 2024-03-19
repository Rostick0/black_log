import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import styles from "./style.module.scss";
import SelectForm from "../../Form/SelectForm";
import { useEffect } from "react";

export default function TicketActionRecipient({ id, status }) {
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
    <div className={styles.TicketActionRecipient}>
      <form
        className={styles.TicketActionRecipient__form}
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
      <Button className={styles.TicketActionRecipient__btn} variant="outlined">
        Go to the application
      </Button>
    </div>
  );
}
