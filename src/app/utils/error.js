export const errorsMessage = {
  required: "Required field",
  minLenght: (value) => `Min lenght ${value}`,
  maxLenght: (value) => `Max lenght ${value}`,
  confirm: (field) => `The ${field} confirmation does not match`,
};

export const setErrorMessageForm = (errors, setError) => {
  Object.entries(errors)?.forEach(([name, message]) => {
    setError(name, {
      message,
    });
  });
};

export const setErrorMessage = ({ formField, isMessage = false } = {}) => {
  if (!formField?.message && formField?.type)
    return errorsMessage?.[formField?.type];

  return formField?.message ? formField?.message : formField?.type;
};
