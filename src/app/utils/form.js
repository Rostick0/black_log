import { setErrorMessageForm } from "./error";

export const submit = (func, setError) => {
  return async (values) => {
    try {
      const res = await func({ body: values });

      if (res?.error && res?.error?.data?.errors) {
        setErrorMessageForm(res?.error?.data?.errors, setError);

        return;
      }
    } catch (err) {
      console.error(err);
    }
  };
};
