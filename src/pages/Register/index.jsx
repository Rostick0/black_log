import LayoutAuth from "../../layout/LayoutAuth";
import styles from "./style.module.scss";
import LoginRegister from "../../components/Register";
import { useEffect } from "react";

export default function Register() {
  useEffect(() => {
    document.title = "Register";
  }, []);

  return (
    <LayoutAuth>
      <LoginRegister />
    </LayoutAuth>
  );
}
