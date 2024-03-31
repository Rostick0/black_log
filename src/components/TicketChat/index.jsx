import { useForm } from "react-hook-form";
import InputForm from "../../Form/InputForm";
import Button from "../../ui/Button";
import Title from "../../ui/Title";
import styles from "./style.module.scss";
import {
  useTicketMessagesGetQuery,
  useTicketChatCreateMutation,
} from "../../app/store/modules/ticketChat";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

export default function TicketChat() {
  const { id } = useParams();
  const user = useSelector((state) => state.user).value;
  // const history = useHistory();

  const { data, isLoading } = useTicketMessagesGetQuery({ id });
  const [messages, setMessages] = useState();
  const [sendMessage] = useTicketChatCreateMutation();

  useEffect(() => {
    if (isLoading) return;

    setMessages(data);

    setTimeout(() => {
      messagesRef.current.scrollIntoView({ behavior: "smooth" });
    });
  }, [isLoading]);

  const messagesRef = useRef(null);

  const { handleSubmit, register, reset } = useForm();

  const onSubmit = async (values) => {
    // setMessages([
    //   ...messages,
    // ]);
    // const res = await sendMessage({ body: { ...values, ticket_id: id } });
    reset({ text: "" });
    setTimeout(() => {
      messagesRef.current.scrollIntoView({ behavior: "smooth" });
    });
  };

  const messageFromMe = (sendlerId) => {
    if (sendlerId !== user.id) return "";

    return " " + styles._me;
  };

  return (
    <div className={styles.TicketChat}>
      <div className={styles.TicketChat__top}>
        <button className="d-flex">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 11.999L19 11.999M8 11.999L12 16M8 11.999L12 7.998M5 19L5 4.999"
              stroke="var(--fourth-color)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <Title className={styles.TicketChat__title}>Tickets #{id}</Title>
      </div>
      <div className={styles.TicketChat__content}>
        <div className={styles.TicketChat__messages}>
          {messages?.length > 0 &&
            messages?.map((item) => (
              <div
                className={
                  styles.TicketChat__message + messageFromMe(item.user_id)
                }
                key={item.id}
              >
                <div className={styles.TicketChat__message_content}>
                  {item.text}
                </div>
                <div className={styles.TicketChat__message_date}>
                  {new Date(item.created_at).toLocaleString()}
                </div>
              </div>
            ))}
          <div className="" ref={messagesRef}></div>
        </div>
        <form
          className={styles.TicketChat__form}
          method="post"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputForm
            className={styles.TicketChat__input}
            name="text"
            placeholder="Enter a message"
            register={register}
          />
          <Button>Send</Button>
        </form>
      </div>
    </div>
  );
}
