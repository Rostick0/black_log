import styles from "./style.module.scss";
import Title from "./../../ui/Title";
import Input from "./../../ui/Input";
import Button from "./../../ui/Button";
import MyLink from "./../../ui/MyLink";
import { ROUTE_NAMES } from "./../../app/router";

export default function Login() {
  return (
    <div className={styles.Login + " auth"}>
      <Title className="auth-title">Login</Title>
      <form className={styles.Login__form + " form auth-form"}>
        <div className="form-inputs">
          <Input placeholder="Name/Login" />
          <Input placeholder="Password" />
          <Input placeholder="Repeat the password" />
        </div>
        <Button className="auth-btn">Login</Button>
      </form>
      <div className="text-center">
        Don't you have an account yet?{" "}
        <MyLink to={ROUTE_NAMES.register}>
          Follow to <span className="fw-600">Register</span>
        </MyLink>
      </div>
    </div>
  );
}
