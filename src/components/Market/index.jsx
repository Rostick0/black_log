import Title from "../../ui/Title";
import Button from "../../ui/Button";
import Pagination from "../../ui/Pagination";
import InputForm from "../../Form/InputForm";
import SelectForm from "../../Form/SelectForm";
import styles from "./style.module.scss";
import { useForm } from "react-hook-form";

export default function Market() {
  const data = Array.from(Array(13).keys()).map((item) => ({
    id: item,
    link: "westernunion.com",
    type: "verified",
    country: "US",
    state: "IN",
    cc: "N/A",
    seller: "xsirien",
    price: "10$",
  }));

  const selectOptions = [
    {
      name: "All",
      value: "all",
    },
  ];

  const { handleSubmit, getValues, register, setValue } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

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
      <form className="filter-inputs" onSubmit={handleSubmit(onSubmit)}>
        <SelectForm
          name="link"
          label="Links"
          items={selectOptions}
          register={register}
          setValueHookForm={setValue}
        />
        <SelectForm
          name="type"
          label="Type"
          items={selectOptions}
          register={register}
          setValueHookForm={setValue}
        />
        <SelectForm
          name="country"
          label="Country"
          items={selectOptions}
          register={register}
          setValueHookForm={setValue}
        />
        <SelectForm
          name="state"
          label="State"
          items={selectOptions}
          register={register}
          setValueHookForm={setValue}
        />
        <SelectForm
          name="cc"
          label="CC"
          items={selectOptions}
          register={register}
          setValueHookForm={setValue}
        />
        <SelectForm
          name="seller"
          label="Seller"
          items={selectOptions}
          register={register}
          setValueHookForm={setValue}
        />
      </form>
      <div className={styles.Market__content}>
        <table className={styles.Market__table + " table"}>
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
      <Pagination />
    </div>
  );
}
