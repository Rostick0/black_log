export const setErrorMessage = ({ formField, t = null } = {}) => {
  if (typeof t === "function" && !formField?.message && formField?.type)
    return t("form_" + formField?.type);

  return formField?.message ? formField?.message : formField?.type;
};
