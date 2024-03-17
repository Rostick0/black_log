import { useForm } from "react-hook-form";
import Title from "../../ui/Title";
import styles from "./style.module.scss";
import Button from "../../ui/Button";
import InputForm from "../../Form/InputForm";

export default function SellerProfileBasketItem() {
  const { handleSubmit, register } = useForm();

  const onSubmit = async (values) => {
    console.log(values);
  };

  return (
    <form
      className={styles.SellerProfileBasketItem}
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
    >
      <div className="filter-inputs">
        <InputForm className={styles.SellerProfileBasketItem__field} label="Links" name="link" register={register} />
        <InputForm className={styles.SellerProfileBasketItem__field} label="Type" name="type" register={register} />
        <InputForm className={styles.SellerProfileBasketItem__field} label="Country" name="country" register={register} />
        <InputForm className={styles.SellerProfileBasketItem__field} label="State" name="state" register={register} />
        <InputForm className={styles.SellerProfileBasketItem__field} label="CC" name="cc" register={register} />
        <InputForm className={styles.SellerProfileBasketItem__field} label="Price" name="price" register={register} />
        <InputForm className={styles.SellerProfileBasketItem__field} label="Cookies" name="cookies" register={register} />
      </div>
      <div className={styles.SellerProfileBasketItem__btns}>
        <Button>Edit</Button>
        <Button variant="outlined">Withdraw from sale</Button>
        <Button variant="red-outlined">Remove</Button>
      </div>
    </form>
  );
}
