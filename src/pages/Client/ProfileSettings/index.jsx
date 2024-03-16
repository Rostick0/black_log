import { useForm } from "react-hook-form";
import InputForm from "../../../Form/InputForm";
import InputPasswordForm from "../../../Form/InputPasswordForm";
import LayoutProfile from "../../../layout/LayoutProfile";
import Title from "../../../ui/Title";
import styles from "./style.module.scss";
import Button from "../../../ui/Button";
import SwitchTheme from "../../../components/SwitchTheme";

export default function ProfileSettings() {
  const { handleSubmit, register } = useForm();

  const iconEdit = (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.8877 6.68078L17.9809 10.7753M9.42915 19.0264L4.16602 20.5L5.63967 15.2372C5.77927 14.7387 6.04549 14.2848 6.41245 13.9196L15.4689 4.90751C16.2506 4.12964 17.5145 4.1313 18.2941 4.91122L19.7557 6.37328C20.5352 7.15304 20.5366 8.41655 19.7588 9.19805L10.7467 18.2537C10.3816 18.6206 9.92765 18.8868 9.42915 19.0264Z"
        stroke="#018CFE"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );

  const onSubmit = (values) => console.log(values);

  return (
    <LayoutProfile>
      <form
        className={styles.ProfileSettings}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="">
          <Title variant="small">Your information</Title>
          <div className={styles.ProfileSettings__information}>
            <InputForm name="name" label="Name" register={register} />
            <InputForm
              name="mail"
              label="Mail"
              register={register}
              icon={iconEdit}
            />
            <InputForm
              name="telegram"
              label="Telegram"
              register={register}
              icon={iconEdit}
            />
          </div>
        </div>
        <div className="">
          <Title variant="small">Reset your password</Title>
          <div className="form-inputs">
            <InputPasswordForm
              name="password"
              label="Your password"
              register={register}
            />
            <InputPasswordForm
              name="password_new"
              label="New password"
              register={register}
            />
            <InputPasswordForm
              name="password_confirm"
              label="New confirm password"
              register={register}
            />
          </div>
          <Button className={styles.ProfileSettings__save}>SAVE</Button>
        </div>
        <div className="">
          <Title variant="small">Other settings</Title>
          <SwitchTheme />
        </div>
      </form>
    </LayoutProfile>
  );
}
