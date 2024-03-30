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
import { setToken } from "../../app/utils/token";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../app/store/modules/user";
import InputPasswordForm from "../../Form/InputPasswordForm";

export default function Login() {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "John Doe",
      password: "password123",
    },
  });

  const dispatch = useDispatch();

  const [login, result] = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const res = await login({ body: values });

    if (res?.error) {
      setError("login", res?.error?.data);
      return;
    }

    if (res?.data?.token) setToken(res?.data?.token);

    if (res?.data?.user) dispatch(setUser(res?.data?.user));

    navigate(ROUTE_NAMES.main);
  };

  return (
    <div className={styles.Login + " auth"}>
      <Title className="auth-title">Login</Title>
      <form
        className={styles.Login__form + " form auth-form"}
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-inputs">
          <InputForm
            placeholder="Name/Login"
            name="login"
            error={setErrorMessage({ formField: errors?.login })}
            register={register}
            rules={{
              required: true,
              maxLenght: {
                value: 255,
                message: errorsMessage["minLenght"](255),
              },
            }}
          />

          <InputPasswordForm
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
              maxLenght: {
                value: 255,
                message: errorsMessage["minLenght"](255),
              },
            }}
          />
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
