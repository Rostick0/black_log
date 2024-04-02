// import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import styles from "./style.module.scss";
// import SelectForm from "../../Form/SelectForm";
// import { useEffect } from "react";
// import InputForm from "../../Form/InputForm";
import {
  useReturnCloseMutation,
  useReturnRefundMutation,
} from "../../app/store/modules/return";

export default function TicketActionRequest({ id }) {
  // const { handleSubmit, register, setValue } = useForm();

  // useEffect(() => {
  //   setValue("status", status);
  // }, [status]);

  // const statusItems = [
  //   {
  //     value: "Checking",
  //     name: "Checking",
  //   },
  //   {
  //     value: "Pre-confirmed",
  //     name: "Pre-confirmed",
  //   },
  //   {
  //     value: "Refunded",
  //     name: "Refunded",
  //   },
  // ];

  const [returnRefund] = useReturnRefundMutation();
  const [returnClose] = useReturnCloseMutation();

  return (
    <div className={styles.TicketActionRequest}>
      <Button onClick={() => returnClose({ id })}>Close</Button>
      <Button onClick={() => returnRefund({ id })}>Refund</Button>
    </div>
  );
}
