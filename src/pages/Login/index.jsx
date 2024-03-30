import LayoutAuth from "../../layout/LayoutAuth";
import styles from "./style.module.scss";
import LoginForm from "../../components/Login";

export default function Login() {
  return (
    <LayoutAuth>
      <LoginForm />
    </LayoutAuth>
  );
}
