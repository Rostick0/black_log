import { useForm } from "react-hook-form";
import InputPasswordForm from "../../../Form/InputPasswordForm";
import LayoutProfile from "../../../layout/LayoutProfile";
import Title from "../../../ui/Title";
import styles from "./style.module.scss";
import Button from "../../../ui/Button";
import SwitchTheme from "../../../components/SwitchTheme";
import { useUserUpdateMutation } from "../../../app/store/modules/userSettings";
import { useSelector } from "react-redux";
import {
  errorsMessage,
  setErrorMessage,
  setErrorMessageForm,
} from "../../../app/utils/error";
import MailInput from "./components/MailInput";
import { submit } from "../../../app/utils/form";
import TelegramInput from "./components/TelegramInput";
import NameInput from "./components/NameInput";
import { equalFields } from "./../../../app/utils/validate";

export default function ProfileSettings() {
  const {
    handleSubmit,
    register,
    setError,
    watch,
    formState: { errors },
  } = useForm({});
  // const { data } = useUserGetQuery();
  const [userUpdate] = useUserUpdateMutation();

  const user = useSelector((state) => state.user.value);
  const onSubmit = submit(userUpdate, setError);
  console.log(errors);
  return (
    <LayoutProfile>
      <div className={styles.ProfileSettings}>
        <div className="">
          <Title variant="small">Your information</Title>
          <div className={styles.ProfileSettings__information}>
            <NameInput user={user} />
            <MailInput user={user} userUpdate={userUpdate} />
            <TelegramInput user={user} userUpdate={userUpdate} />
          </div>
        </div>
        <form className="" onSubmit={handleSubmit(onSubmit)} method="POST">
          <Title variant="small">Reset your password</Title>
          <div className="form-inputs">
            <InputPasswordForm
              name="current_password"
              label="Your password"
              error={setErrorMessage({ formField: errors?.current_password })}
              register={register}
              rules={{ required: true }}
            />
            <InputPasswordForm
              name="new_password"
              label="New password"
              error={setErrorMessage({ formField: errors?.new_password })}
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
                validate: {
                  confirm: (value) =>
                    equalFields(
                      value,
                      watch("confirm_password"),
                      errorsMessage["confirm"]("new confirm password")
                    ),
                },
              }}
              register={register}
            />
            <InputPasswordForm
              name="confirm_password"
              label="New confirm password"
              error={setErrorMessage({ formField: errors?.confirm_password })}
              register={register}
              rules={{
                required: true,
                validate: {
                  confirm: (value) =>
                    equalFields(
                      value,
                      watch("new_password"),
                      errorsMessage["confirm"]("new password")
                    ),
                },
              }}
            />
          </div>
          <Button className={styles.ProfileSettings__save}>SAVE</Button>
        </form>
        <div className="">
          <Title variant="small">Other settings</Title>
          <SwitchTheme />
        </div>
      </div>
    </LayoutProfile>
  );
}
