import { setErrorMessageForm } from "./error";

export const submit = (func, setError = null) => {
  return async (values) => {
    try {
      const res = await func({ body: values });

      if (
        res?.error &&
        res?.error?.data?.errors &&
        typeof setError === "function"
      ) {
        setErrorMessageForm(res?.error?.data?.errors, setError);

        return;
      }
    } catch (err) {
      console.error(err);
    }
  };
};
