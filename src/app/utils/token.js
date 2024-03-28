export const getToken = () => localStorage.getItem("auth");
export const setToken = (token) => localStorage.setItem("auth", token);
