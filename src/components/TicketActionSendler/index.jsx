import { useTicketUpdateMutation } from "../../app/store/modules/ticket";
import Button from "../../ui/Button";
import styles from "./style.module.scss";

export default function TicketActionSendler({ id, status }) {
  const [ticketClose] = useTicketUpdateMutation();

  return (
    <div className={styles.TicketActionSendler}>
      <div className={styles.TicketActionSendler__status}>
        Status: <span className="fw-600 color-ui">{status}</span>
      </div>
      <div className={styles.TicketActionSendler__btns}>
        <Button className={styles.TicketActionSendler__btn}>
          Go to the ticket
        </Button>
        <Button
          className={styles.TicketActionSendler__btn}
          variant="outlined"
          onClick={() => ticketClose({ id })}
        >
          Close the ticket
        </Button>
      </div>
    </div>
  );
}
