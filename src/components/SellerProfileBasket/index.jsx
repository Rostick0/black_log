import Button from "../../ui/Button";
import Title from "../../ui/Title";
import SellerProfileBasketItem from "../SellerProfileBasketItem";
import styles from "./style.module.scss";

export default function SellerProfileBasket() {
  const data = Array.from(Array(3).keys()).map((item) => ({
    id: item,
    link: "dfdgfghgjkhj",
    type: "dfdgfghgjkhj",
    country: "dfdgfghgjkhj",
    state: "dfdgfghgjkhj",
    cc: "dfdgfghgjkhj",
    price: "10$",
    cookies: "dfdgfghgjkhj",
  }));

  return (
    <div className={styles.SellerProfileBasket}>
      <div className={styles.SellerProfileBasket__top}>
        <Title className={styles.SellerProfileBasket__title} variant="small">
          Your products
        </Title>
        <Button>Add a new</Button>
      </div>
      {data.map((item) => (
        <SellerProfileBasketItem key={item.id} {...item} />
      ))}
    </div>
  );
}
