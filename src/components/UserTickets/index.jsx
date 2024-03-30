import Title from "../../ui/Title";
import Button from "../../ui/Button";
import styles from "./style.module.scss";
import Pagination from "../../ui/Pagination";
import Ticket from "../Ticket";
import TicketActionSendler from "../TicketActionSendler";
import { useTicketsGetQuery } from "../../app/store/modules/ticket";
import useFilter from "../../app/hook/useFilter";
import { debounce } from "lodash";

export default function UserTickets() {
  const { filters, updateCurrentFilterValue } = useFilter();

  const { data } = useTicketsGetQuery(filters);

  return (
    <div className={styles.UserTickets}>
      <div className={styles.UserTickets__top}>
        <Title className={styles.UserTickets__title}>Tickets</Title>
        <div className={styles.UserTickets__buttons}>
          <Button className="btn-circle" variant="white">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5465 13.5182L16.2497 16.25M13.104 5.35027C15.2438 7.48397 15.2438 10.9434 13.104 13.0771C10.9641 15.2108 7.49473 15.2108 5.35489 13.0771C3.21504 10.9434 3.21504 7.48395 5.35489 5.35027C7.49475 3.21658 10.9642 3.21658 13.104 5.35027Z"
                stroke="var(--fourth-color)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
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
      <div className={styles.UserTickets__list}>
        {data?.data?.length > 0 &&
          data?.data?.map((item) => (
            <Ticket
              key={item.id}
              {...item}
              info={item.subject}
              action={
                <TicketActionSendler
                  id={item.id}
                  status={item.is_opened ? "In processing" : "Done"}
                />
              }
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
