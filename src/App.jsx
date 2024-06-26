import React, { useEffect, useMemo } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/router";
import "./app/assets/styles/index.scss";
import { useTheme } from "./app/context/ThemeContext";
import { useUserGetQuery } from "./app/store/modules/userSettings";
import { useDispatch, useSelector } from "react-redux";
import { getTokenHeader, removeToken } from "./app/utils/token";
import { setUser } from "./app/store/modules/user";

function App() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const { theme } = useTheme();
  const the = useMemo(() => (theme === "light" ? "" : " _dark"));

  const { data, isLoading, isError } = useUserGetQuery();

  useEffect(() => {
    if (isLoading) return;

    if (isError) removeToken();

    dispatch(setUser(data));
  }, [data]);

  const isAuth = useMemo(() => localStorage.getItem("auth"), [user]);

  // useEffect(() => {
  //   if (!user) return;

  //   window.io = require("socket.io-client");
  //   window.echo = new Echo({
  //     broadcaster: "socket.io",
  //     host: "https://other.punter.website:6001/",
  //     // host: "http://127.0.0.1:6001/",
  //     auth: {
  //       headers: {
  //         ...getTokenHeader(),
  //       },
  //     },
  //     // Для SPA:
  //     withCredentials: true,
  //   });
  // }, [user]);

  return (
    <div className={"wrapper" + the}>
      <BrowserRouter>
        <AppRouter loggedIn={isAuth}></AppRouter>
      </BrowserRouter>
    </div>
  );
}

export default App;
