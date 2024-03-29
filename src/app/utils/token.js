export const getToken = () => localStorage.getItem("auth");
export const setToken = (token) => localStorage.setItem("auth", token);
export const removeToken = () => localStorage.removeItem("auth");

export const getTokenHeader = () => ({
  Authorization: "Bearer " + localStorage.getItem("auth"),
});
