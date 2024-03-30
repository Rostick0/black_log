import { useCartsGetQuery } from "../../app/store/modules/cart";
import Button from "../../ui/Button";
import Title from "../../ui/Title";
import styles from "./style.module.scss";

export default function ProfileProducts() {
  const cart = JSON.parse(localStorage.getItem("cart") ?? []);

  const { data } = useCartsGetQuery({
    "products": cart?.join(','),
  });

  return (
    <div className={styles.ProfileBasket}>
      <Title variant="small">Items in the shopping cart</Title>
      <table className={styles.ProfileBasket__table + " table"}>
        <thead>
          <tr className="table-tr">
            <th className="table-th">Links</th>
            <th className="table-th">Type</th>
            <th className="table-th">Country </th>
            <th className="table-th">State</th>
            <th className="table-th">CC</th>
            <th className="table-th">Seller</th>
            <th className="table-th">Price</th>
            <th className="table-th table-item-action"></th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 &&
            data?.map((item) => (
              <tr className="table-tr" key={item.id}>
                <td className="table-td">{item.link}</td>
                <td className="table-td">{item.type}</td>
                <td className="table-td">{item.country}</td>
                <td className="table-td">{item.state}</td>
                <td className="table-td">{item.cc}</td>
                <td className="table-td">{item.seller}</td>
                <td className="table-td color-ui fw-600">{item.price}</td>
                <td className="table-td table-item-action">
                  <Button className="table-btn" variant="red">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.29512 9.99998V13.5417M11.7049 9.99998V13.5417M12.0833 4.99996C12.0833 4.53972 11.7102 4.16663 11.25 4.16663H8.75C8.28976 4.16663 7.91667 4.53972 7.91667 4.99996M4.88679 6.45832L5.58716 14.7927C5.69598 16.0877 6.77882 17.0833 8.07838 17.0833H11.9225C13.222 17.0833 14.3049 16.0877 14.4137 14.7927L15.1141 6.45832M3.75 6.33164H16.25"
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
      <div className={styles.ProfileBasket__total}>
        <Title variant="small">Total amount:</Title>
        <div className="fw-600 color-ui">240$</div>
      </div>
      <Button className={styles.ProfileBasket__btn}>pay</Button>
    </div>
  );
}
