import styles from "./style.module.scss";
import Title from "./../../ui/Title";
import Input from "./../../ui/Input";
import Button from "./../../ui/Button";
import MyLink from "./../../ui/MyLink";
import { ROUTE_NAMES } from "./../../app/router";

export default function Register() {
  return (
    <div className={styles.Register + " auth"}>
      <Title className="auth-title">Register</Title>
      <form className={styles.Register__form + " form auth-form"}>
        <div className="form-inputs">
          <Input placeholder="Login" />
          <Input placeholder="Telegram" />
          <Input placeholder="Password" />
        </div>
        <Button className="auth-btn">Register</Button>
      </form>
      <div className="text-center">
        Do you already have an account?{" "}
        <MyLink to={ROUTE_NAMES.register}>
          Click on the <span className="fw-600">Login</span>
        </MyLink>
      </div>
    </div>
  );
}
