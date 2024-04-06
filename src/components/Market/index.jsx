import Title from "../../ui/Title";
import Button from "../../ui/Button";
import Pagination from "../../ui/Pagination";
import InputForm from "../../Form/InputForm";
import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import { useOffersGetQuery } from "../../app/store/modules/offer";
import useFilter from "../../app/hook/useFilter";
import { debounce } from "lodash";
import { useEffect, useState } from "react";

export default function Market() {
  const { filters, updateCurrentFilterValue } = useFilter();
  const { data } = useOffersGetQuery(filters);

  const { register } = useForm();

  const initialData = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const [cartProduct, setCartProduct] = useState(initialData);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProduct));
  }, [cartProduct]);

  return (
    <div className={styles.Market}>
      <div className={styles.Market__top}>
        <Title>Market</Title>
        <Button
          className={styles.Market__filter + " btn-circle"}
          variant="bright_blue"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.3707 5.74789C16.8435 5.08603 16.3703 4.16666 15.557 4.16666H5.27669C4.46331 4.16666 3.99019 5.08603 4.46295 5.74789L8.59595 11.5341C8.71709 11.7037 8.78221 11.9069 8.78221 12.1153V16.4648C8.78221 17.2635 9.67236 17.7399 10.3369 17.2969L11.6061 16.4507C11.8843 16.2652 12.0514 15.953 12.0514 15.6187V12.1153C12.0514 11.9069 12.1166 11.7037 12.2377 11.5341L16.3707 5.74789Z"
              stroke="var(--fourth-color)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
      <div className="filter-inputs">
        <InputForm
          name="search"
          label="Search"
          register={register}
          onChange={debounce(
            (e) => updateCurrentFilterValue("search", e.target.value),
            500
          )}
        />
        <InputForm
          name="seller_name"
          label="Seller name"
          register={register}
          onChange={debounce(
            (e) => updateCurrentFilterValue("seller_name", e.target.value),
            500
          )}
        />
        <InputForm
          name="country"
          label="Country"
          register={register}
          onChange={debounce(
            (e) => updateCurrentFilterValue("country", e.target.value),
            500
          )}
        />
      </div>
      <div className={styles.Market__content}>
        <table className={styles.Market__table + " table"}>
          <thead>
            <tr className="table-tr">
              <th className="table-th">Country </th>
              <th className="table-th">Seller</th>
              <th className="table-th">Price</th>
              <th className="table-th table-item-action"></th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.length > 0 &&
              data?.data?.map((item) => (
                <tr className="table-tr" key={item.id}>
                  <td className="table-td">{item?.country}</td>
                  <td className="table-td">{item?.seller?.name} </td>
                  <td className="table-td color-ui fw-600">{item?.amount}$</td>
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
                          setCartProduct([
                            ...new Set([...cartProduct, item?.product_id]),
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
      <Pagination
        links={data?.links}
        currentPage={data?.current_page}
        lastPage={data?.last_page}
        onChange={(number) => updateCurrentFilterValue("page", number)}
      />
    </div>
  );
}
