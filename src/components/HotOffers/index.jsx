import { useOffersGetQuery } from "../../app/store/modules/offer";
import Button from "../../ui/Button";
import Title from "../../ui/Title";
import styles from "./style.module.scss";

export default function HotOffers() {
  const dataa = Array.from(Array(16).keys()).map((item) => ({
    id: item,
    link: "wm.com",
    balance: "N/A",
    type: "N/A",
    state: "N/A",
    price: "10$",
  }));

  const { data } = useOffersGetQuery();

  return (
    <div className={styles.HotOffers}>
      <Title>Hot offers</Title>
      <div className={styles.HotOffers__content}>
        <table className={styles.HotOffers__table + " table"}>
          <thead>
            <tr className="table-tr">
              <th className="table-th">Links</th>
              <th className="table-th">Balance</th>
              <th className="table-th">Type</th>
              <th className="table-th">State</th>
              <th className="table-th">Price</th>
              <th className="table-th table-item-action"></th>
            </tr>
          </thead>
          <tbody>
            {dataa?.length &&
              dataa?.map((item) => (
                <tr className="table-tr" key={item.id}>
                  <td className="table-td">{item.link}</td>
                  <td className="table-td">{item.balance}</td>
                  <td className="table-td">{item.type}</td>
                  <td className="table-td">{item.state}</td>
                  <td className="table-td color-ui fw-600">{item.price}</td>
                  <td className="table-td table-item-action">
                    <Button className="table-btn">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.9627 6.85184C12.9627 8.48814 11.636 9.8148 9.99974 9.8148C8.36344 9.8148 7.03677 8.48814 7.03677 6.85184M5.99424 16.6667H14.0053C15.4474 16.6667 16.5904 15.45 16.5004 14.0107L15.9796 5.6774C15.8973 4.35981 14.8046 3.33334 13.4845 3.33334H6.51507C5.19492 3.33334 4.10229 4.35981 4.01994 5.6774L3.49911 14.0107C3.40916 15.45 4.55219 16.6667 5.99424 16.6667Z"
                          stroke="var(--tenth-color)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
