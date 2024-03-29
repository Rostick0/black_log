import { useForm } from "react-hook-form";
import InputForm from "../../../../Form/InputForm";
import { memo } from "react";

export default memo(function NameInput({ user }) {
  const { register } = useForm();

  return (
    <InputForm
      name="name"
      label="Name"
      // error={setErrorMessage({ formField: errors?.name })}
      defaultValue={user?.name}
      register={register}
      disabled
    />
  );
});
