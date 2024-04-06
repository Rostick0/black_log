import { useForm } from "react-hook-form";
import InputForm from "../../Form/InputForm";
import Button from "../../ui/Button";
import Title from "../../ui/Title";
import styles from "./style.module.scss";
import {
  useTicketMessagesGetQuery,
  useTicketChatCreateMutation,
  useLazyTicketMessagesGetQuery,
} from "../../app/store/modules/ticketChat";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

export default function TicketChat() {
  const { id } = useParams();
  const user = useSelector((state) => state.user).value;
  const navigate = useNavigate();

  const { data, isLoading, isFetching } = useTicketMessagesGetQuery({ id });
  const [messages, setMessages] = useState();
  const [sendMessage] = useTicketChatCreateMutation();
  const [getMessages, resultMessages] = useLazyTicketMessagesGetQuery();

  useEffect(() => {
    setTimeout(() => {
      messagesRef.current.scrollIntoView({ behavior: "smooth" });
    });
  }, [isFetching]);

  useEffect(() => {
    if (isLoading) return;

    // setMessages(data);

    setTimeout(() => {
      messagesRef.current.scrollIntoView({ behavior: "smooth" });
    });
  }, [isLoading]);

  useEffect(() => {
    let intervalId = setInterval(() => {
      getMessages({ id });
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // useEffect(() => {
  //   if (!window.echo) return;

  //   window.echo
  //     .private("tickets-chat." + id) // Убедитесь, что это имя канала совпадает с тем, что вы используете на сервере
  //     .listen(".TicketMessageSent", (e) => {
  //       console.log(e); // Логируем в консоль для отладки
  //       // setMessages([...messages, e]);
  //     });
  //   console.log(window.echo);
  // }, [window.echo]);

  const messagesRef = useRef(null);

  const { handleSubmit, register, reset } = useForm();

  const onSubmit = async (values) => {
    const res = await sendMessage({ id, body: { ...values, ticket_id: id } });
    reset({ text: "" });
  };

  const messageFromMe = (sendlerId) => {
    if (sendlerId !== user.id) return "";

    return " " + styles._me;
  };

  return (
    <div className={styles.TicketChat}>
      <div className={styles.TicketChat__top}>
        <button className="d-flex" onClick={() => navigate(-1)}>
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
          <div className="" ref={messagesRef}></div>
          {data?.length > 0 &&
            data?.map((item) => (
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
