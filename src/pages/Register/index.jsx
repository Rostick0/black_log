import LayoutAuth from "../../layout/LayoutAuth";
import styles from "./style.module.scss";
import LoginRegister from "../../components/Register";

export default function Register() {
  return (
    <LayoutAuth>
      <LoginRegister />
    </LayoutAuth>
  );
}
