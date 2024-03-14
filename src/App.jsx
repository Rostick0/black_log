import React, { useMemo } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/router";
import "./app/assets/styles/index.scss";
import { useTheme } from "./app/context/ThemeContext";

function App() {
  const { theme } = useTheme();

  const the = useMemo(() => theme === "light" ? "" : " _dark")

  return (
    <div className={"wrapper" + the}>
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </div>
  );
}

export default App;
