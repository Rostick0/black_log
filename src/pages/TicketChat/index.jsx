import LayoutDefault from "../../layout/LayoutDefault";
import TicketChatContent from "../../components/TicketChat";
import styles from "./style.module.scss";
import { useEffect } from "react";

export default function TicketChat() {
  useEffect(() => {
    document.title = "Ticket chat";
  }, []);

  return (
    <LayoutDefault>
      <div className={styles.TicketChat}>
        <div className="container">
          <div className={styles.TicketChat__container}>
            <TicketChatContent />
          </div>
        </div>
      </div>
    </LayoutDefault>
  );
}
