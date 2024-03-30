import Title from "../../ui/Title";
import Button from "../../ui/Button";
import styles from "./style.module.scss";
import Pagination from "../../ui/Pagination";
import Ticket from "../Ticket";
import TicketActionRequest from "../TicketActionRequest";
import SupportRequestInfo from "../SupportRequestInfo";
import useFilter from "../../app/hook/useFilter";

export default function SupportRequests() {
  const data = Array.from(Array(2).keys()).map((item) => ({
    id: item,
    date: "12.03.2024",
    user: "login",
    subject: "Low-quality logs",
    seller: "login",
    number: 12312,
    amount: "10$",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    status: "In processing",
  }));
  const { filters, updateCurrentFilterValue } = useFilter();

  return (
    <div className={styles.SupportRequests}>
      <div className={styles.SupportRequests__top}>
        <Title className={styles.SupportRequests__title}>Requests</Title>
        <div className={styles.SupportRequests__buttons}>
          <Button className="btn-circle" variant="bright_blue">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.3712 5.74789C16.844 5.08603 16.3708 4.16666 15.5575 4.16666H5.27718C4.4638 4.16666 3.99068 5.08603 4.46344 5.74789L8.59644 11.5341C8.71758 11.7037 8.7827 11.9069 8.7827 12.1153V16.4648C8.7827 17.2635 9.67285 17.7399 10.3374 17.2969L11.6066 16.4507C11.8848 16.2652 12.0519 15.953 12.0519 15.6187V12.1153C12.0519 11.9069 12.1171 11.7037 12.2382 11.5341L16.3712 5.74789Z"
                stroke="var(--fourth-color)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
      <div className={styles.SupportRequests__list}>
        {data?.map((item) => (
          <Ticket
            key={item.id}
            {...item}
            info={<SupportRequestInfo {...item} />}
            action={<TicketActionRequest status={item.status} />}
          />
        ))}
      </div>
      <Pagination
        links={data?.links}
        currentPage={data?.current_page}
        lastPage={data?.last_page}
        onChange={(number) => updateCurrentFilterValue("page", number)}
      />
    </div>
  );
}
