import Button from "../../ui/Button";
import Title from "../../ui/Title";
import styles from "./style.module.scss";
import { useTicketsHotGetQuery } from "../../app/store/modules/ticket";
import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../app/router";

export default function HotTickets() {
  const { data } = useTicketsHotGetQuery();

  return (
    <div className={styles.HotTickets}>
      <Title>Hot tickets</Title>
      <div className={styles.HotTickets__content}>
        <table className={styles.HotTickets__table + " table"}>
          <thead>
            <tr className="table-tr">
              <th className="table-th">User</th>
              <th className="table-th">Topic</th>
              <th className="table-th">Date</th>
              <th className="table-th">Status</th>
              <th className="table-th table-item-action"></th>
            </tr>
          </thead>
          <tbody>
            {data?.length > 0 &&
              data?.map((item) => (
                <tr className="table-tr" key={item.id}>
                  <td className="table-td">{item.user?.name}</td>
                  <td className="table-td">{item.amount}</td>
                  <td className="table-td">{item.created_at}</td>
                  <td className="table-td color-ui fw-600">{item.amount}$</td>
                  <td className="table-td table-item-action">
                    <Link to={ROUTE_NAMES.ticket.chat + "/" + item.id}>
                      <Button className="table-btn">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.36554 12.1577L3.47679 9.93557C2.80399 9.62975 2.83269 8.66445 3.52248 8.39915L15.7501 3.6962C16.4241 3.43699 17.0863 4.09919 16.8271 4.77314L12.1241 17.0008C11.8588 17.6906 10.8935 17.7193 10.5877 17.0465L8.36554 12.1577ZM8.36554 12.1577L12.0195 8.5039"
                            stroke="var(--tenth-color)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
