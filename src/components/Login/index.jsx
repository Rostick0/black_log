import styles from "./style.module.scss";
import Title from "./../../ui/Title";
import Input from "./../../ui/Input";
import Button from "./../../ui/Button";
import MyLink from "./../../ui/MyLink";
import { ROUTE_NAMES } from "./../../app/router";
import { useForm } from "react-hook-form";
import InputForm from "../../Form/InputForm";
import { setErrorMessage, errorsMessage } from "../../app/utils/error";
import { useLoginMutation } from "../../app/store/modules/auth";

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [login, result] = useLoginMutation();

  const onSubmit = async (values) => {
    await login(values);
    console.log(result);
  };

  const error = (v) => {
    console.log(v);
  };

  return (
    <div className={styles.Login + " auth"}>
      <Title className="auth-title">Login</Title>
      <form
        className={styles.Login__form + " form auth-form"}
        onSubmit={handleSubmit(onSubmit, error)}
      >
        <div className="form-inputs">
          <InputForm
            placeholder="Name/Login"
            name="name"
            error={setErrorMessage({ formField: errors?.name })}
            register={register}
            rules={{ required: true, maxLenght: 255 }}
          />

          <InputForm
            placeholder="Password"
            name="password"
            error={setErrorMessage({ formField: errors?.password })}
            register={register}
            rules={{
              required: true,
              minLenght: {
                value: 8,
                message: errorsMessage["minLenght"](8),
              },
              maxLenght: 255,
            }}
          />
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
