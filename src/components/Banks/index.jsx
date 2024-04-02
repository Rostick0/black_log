import { useEffect, useState } from "react";
import useFilter from "../../app/hook/useFilter";
import { useBanksGetQuery } from "../../app/store/modules/bank";
import Button from "../../ui/Button";
import Pagination from "../../ui/Pagination";
import Title from "../../ui/Title";
import styles from "./style.module.scss";

export default function Banks() {
  const initialData = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const [cartProduct, setCartProduct] = useState(initialData);

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartProduct));
}, [cartProduct]);

  const { filters, updateCurrentFilterValue } = useFilter();
  const { data } = useBanksGetQuery(filters);

  return (
    <div className={styles.Banks}>
      <div className={styles.Banks__top}>
        <Title className={styles.Banks__title}>Banks</Title>
        <div className={styles.Banks__buttons}>
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
      <table className="table">
        <thead>
          <tr className="table-tr">
            <th className="table-th">Bank Name</th>
            <th className="table-th">Balance</th>
            <th className="table-th">Seller</th>
            <th className="table-th">Price</th>
            <th className="table-th table-item-action"></th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.length > 0 &&
            data?.data?.map((item) => (
              <tr className="table-tr" key={item.id}>
                <td className="table-td">{item.bank_link}</td>
                <td className="table-td">{item.balance}</td>
                <td className="table-td">{item?.seller_id?.name}</td>
                <td className="table-td color-ui fw-600">
                  {item.amount ?? 0}$
                </td>
                <td className="table-td table-item-action">
                  {cartProduct?.find((elem) => elem === item.product_id) ? (
                    <Button
                      className="table-btn"
                      variant="red"
                      onClick={() =>
                        setCartProduct(
                          cartProduct?.filter((elem) => elem !== item.product_id)
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
                        setCartProduct([...new Set([...cartProduct, item.product_id])])
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
      <Pagination
        links={data?.meta?.links}
        currentPage={data?.meta?.current_page}
        lastPage={data?.meta?.last_page}
        onChange={(number) => updateCurrentFilterValue("page", number)}
      />
    </div>
  );
}
