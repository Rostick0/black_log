import { useForm } from "react-hook-form";
import { errorsMessage, setErrorMessage } from "../../../../app/utils/error";
import InputForm from "../../../../Form/InputForm";
import { memo, useEffect } from "react";
import { submit } from "../../../../app/utils/form";

export default memo(function TelegramInput({ user, userUpdate }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    reset,
  } = useForm();

  useEffect(() => {
    reset({
      telegram: user?.telegram,
    });
  }, [user]);

  const onSubmit = submit(userUpdate, setError);

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="POST">
      <InputForm
        name="telegram"
        label="Telegram"
        error={setErrorMessage({ formField: errors?.telegram })}
        register={register}
        icon={
          <button>
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
          </button>
        }
        rules={{
          required: true,
          maxLenght: {
            value: 255,
            message: errorsMessage["minLenght"](255),
          },
        }}
      />
    </form>
  );
});
