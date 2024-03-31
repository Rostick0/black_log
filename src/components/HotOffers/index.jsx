import { useEffect, useState } from "react";
import { useOffersGetHotQuery } from "../../app/store/modules/offer";
import Button from "../../ui/Button";
import Title from "../../ui/Title";
import styles from "./style.module.scss";

export default function HotOffers() {
  const initialData = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const [cartProduct, setCartProduct] = useState(initialData);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProduct));
  }, [cartProduct]);

  const { data } = useOffersGetHotQuery();

  return (
    <div className={styles.HotOffers}>
      <Title>Hot offers</Title>
      <div className={styles.HotOffers__content}>
        <table className={styles.HotOffers__table + " table"}>
          <thead>
            <tr className="table-tr">
              <th className="table-th">Links</th>
              <th className="table-th">Balance</th>
              <th className="table-th">Coutry</th>
              <th className="table-th">Price</th>
              <th className="table-th table-item-action"></th>
            </tr>
          </thead>
          <tbody>
            {data?.length > 0 &&
              data?.map((item) => (
                <tr className="table-tr" key={item.id}>
                  <td className="table-td">{item.archive_link}</td>
                  <td className="table-td">{item.amount}</td>
                  <td className="table-td">{item.country}</td>
                  <td className="table-td color-ui fw-600">{item.amount}$</td>
                  <td className="table-td table-item-action">
                    {cartProduct?.find((elem) => elem === item.id) ? (
                      <Button
                        className="table-btn"
                        variant="red"
                        onClick={() =>
                          setCartProduct(
                            cartProduct?.filter((elem) => elem !== item.id)
                          )
                        }
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.29512 9.99998V13.5417M11.7049 9.99998V13.5417M12.0833 4.99996C12.0833 4.53972 11.7102 4.16663 11.25 4.16663H8.75C8.28976 4.16663 7.91667 4.53972 7.91667 4.99996M4.88679 6.45832L5.58716 14.7927C5.69598 16.0877 6.77882 17.0833 8.07838 17.0833H11.9225C13.222 17.0833 14.3049 16.0877 14.4137 14.7927L15.1141 6.45832M3.75 6.33164H16.25"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </Button>
                    ) : (
                      <Button
                        className="table-btn"
                        onClick={() =>
                          setCartProduct([
                            ...new Set([...cartProduct, item.id]),
                          ])
                        }
                      >
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
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
