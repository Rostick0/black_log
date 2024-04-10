import LayoutAuth from "../../layout/LayoutAuth";
import styles from "./style.module.scss";
import LoginForm from "../../components/Login";
import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <LayoutAuth>
      <LoginForm />
    </LayoutAuth>
  );
}
