import styles from "./style.module.scss";
import Title from "./../../ui/Title";
import Button from "./../../ui/Button";
import MyLink from "./../../ui/MyLink";
import { ROUTE_NAMES } from "./../../app/router";
import { useForm } from "react-hook-form";
import InputForm from "../../Form/InputForm";
import { errorsMessage, setErrorMessage } from "../../app/utils/error";

export default function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    console.log(values);
  };

  return (
    <div className={styles.Register + " auth"}>
      <Title className="auth-title">Register</Title>
      <form
        className={styles.Register__form + " form auth-form"}
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-inputs">
          <InputForm
            name="name"
            placeholder="Login"
            error={setErrorMessage({ formField: errors?.name })}
            register={register}
            rules={{
              required: true,
              maxLenght: {
                value: 255,
                message: errorsMessage["maxLenght"](255),
              },
            }}
          />
          <InputForm
            name="telegram"
            placeholder="Telegram"
            error={setErrorMessage({ formField: errors?.telegram })}
            register={register}
            rules={{
              required: true,
              maxLenght: {
                value: 255,
                message: errorsMessage["maxLenght"](255),
              },
            }}
          />
          <InputForm
            name="password"
            placeholder="Password"
            error={setErrorMessage({ formField: errors?.password })}
            register={register}
            rules={{
              required: true,
              minLenght: {
                value: 8,
                message: errorsMessage["minLenght"](8),
              },
              maxLenght: {
                value: 255,
                message: errorsMessage["maxLenght"](255),
              },
            }}
          />
        </div>
        <Button className="auth-btn">Register</Button>
      </form>
      <div className="text-center">
        Do you already have an account?{" "}
        <MyLink to={ROUTE_NAMES.login}>
          Click on the <span className="fw-600">Login</span>
        </MyLink>
      </div>
    </div>
  );
}
