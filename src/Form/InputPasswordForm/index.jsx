// InputPasswordFormimport styles from "./style.module.scss";
import stylesInput from "../../ui/Input/style.module.scss";
import Control from "../../ui/Control";
import { useState } from "react";
import InputForm from "../InputForm";

export default function InputPasswordForm({ register, ...other }) {
  const [isPassword, setIsPassword] = useState(true);

  const iconPassword = (
    <svg
      onClick={() => {
        setIsPassword((prev) => !prev);
      }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.6029 10.8275C21.8585 11.1491 22 11.5668 22 12C22 12.4332 21.8585 12.851 21.6029 13.1725C19.9845 15.15 16.3005 19 12 19C7.69952 19 4.01559 15.15 2.39712 13.1725C2.1415 12.851 2 12.4332 2 12C2 11.5668 2.1415 11.1491 2.39712 10.8275C4.01559 8.85 7.69952 5 12 5C16.3005 5 19.9845 8.85 21.6029 10.8275Z"
        stroke="var(--fourth-color)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0005 15.1109C13.7031 15.1109 15.0833 13.7181 15.0833 11.9999C15.0833 10.2817 13.7031 8.88879 12.0005 8.88879C10.2979 8.88879 8.91772 10.2817 8.91772 11.9999C8.91772 13.7181 10.2979 15.1109 12.0005 15.1109Z"
        stroke="var(--fourth-color)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <InputForm
      {...other}
      register={register}
      type={isPassword ? "password" : "text"}
      icon={iconPassword}
    />
  );
}
