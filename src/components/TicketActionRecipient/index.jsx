import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import styles from "./style.module.scss";
import SelectForm from "../../Form/SelectForm";
import { useEffect } from "react";
import { useTicketUpdateMutation } from "../../app/store/modules/ticket";

export default function TicketActionRecipient({ id, status }) {
  const { handleSubmit, register, setValue } = useForm();
  const [ticketClose] = useTicketUpdateMutation();

  const onSubmit = async (values) => {
    if (values.status !== 0) return;

    ticketClose({ id });
  };

  const statusItems = [
    {
      value: 1,
      name: "At work",
    },
    {
      value: 0,
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
          defaultValue={statusItems.find((elem) => elem.value == status)}
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
