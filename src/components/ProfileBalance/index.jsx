import { useSelector } from "react-redux";
import Title from "../../ui/Title";
import ProfileBalanceItem from "../ProfileBalanceItem";
import styles from "./style.module.scss";
import ModalWithdraw from "../ModalWithdraw";
import { useState } from "react";

export default function ProfileBalance() {
  const user = useSelector((state) => state.user).value;

  const [activeWithdraw, setActiveWithdraw] = useState(false);

  return (
    <div className={styles.ProfileBalance}>
      <Title variant="small">Your balance</Title>
      <div className={styles.ProfileBalance__list}>
        <ProfileBalanceItem
          count={user?.balance ?? 0}
          name="Dollar"
          currency="$"
          outputButtonClick={() => setActiveWithdraw(true)}
        />
      </div>
      {activeWithdraw && (
        <ModalWithdraw close={() => setActiveWithdraw(false)} />
      )}
    </div>
  );
}
