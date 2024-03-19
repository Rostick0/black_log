import Button from "../../ui/Button";
import Title from "../../ui/Title";
import styles from "./style.module.scss";

export default function ProfileProducts() {
  const data = Array.from(Array(16).keys()).map((item) => ({
    id: item,
    link: "westernunion.com",
    type: "verified",
    country: "US",
    state: "IN",
    cc: "N/A",
    seller: "xsirien",
    price: "10$",
  }));

  return (
    <div className={styles.ProfileProducts}>
      <Title variant="small">Transaction history</Title>
      <table className={styles.ProfileProducts__table + " table"}>
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
          {data?.length &&
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
                  <Button className="table-btn">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.03095 3.33334H5.83398C4.45327 3.33334 3.33398 4.45263 3.33398 5.83334V14.1667C3.33398 15.5474 4.45327 16.6667 5.83398 16.6667H14.1673C15.548 16.6667 16.6673 15.5474 16.6673 14.1667V10.9697M13.0774 3.33334H16.6671M16.6671 3.33334V6.92309M16.6671 3.33334L10.0001 10"
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
  );
}
