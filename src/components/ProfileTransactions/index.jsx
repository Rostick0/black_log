import { useTransactionsGetQuery } from "../../app/store/modules/transactions";
import Title from "../../ui/Title";
import styles from "./style.module.scss";

export default function ProfileTransactions() {
  const statuses = [
    {
      name: "Successfully",
      class: "color-green",
    },
    {
      name: "Mistake",
      class: "color-red",
    },
    {
      name: "Processing",
      class: "color-ui",
    },
  ];

  const { data } = useTransactionsGetQuery();

  const setColorStatus = (status) => {
    return " " + statuses.find((item) => item.name === status)?.class;
  };

  return (
    <div className={styles.ProfileTransactions}>
      <Title variant="small">Transaction history</Title>
      <table className="table">
        <thead>
          <tr>
            <th className="table-th">#</th>
            <th className="table-th">Date</th>
            <th className="table-th">Status</th>
            <th className="table-th">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{new Date(item.created_at)?.toLocaleDateString()}</td>
              <td className={setColorStatus(item.status)}>{item.status}</td>
              <td>{item.amount}$</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
