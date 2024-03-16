import Title from "../../ui/Title";
import styles from "./style.module.scss";
import _ from "lodash";

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

  const data = Array.from(Array(8).keys()).map((item) => ({
    id: 12366,
    date: "12.03.2024",
    status: statuses[_.random(2, false)].name,
    price: "12$",
  }));

  const setColorStatus = (status) => {
    return " " + statuses.find((item) => item.name == status)?.class;
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
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.date}</td>
              <td className={setColorStatus(item.status)}>{item.status}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
