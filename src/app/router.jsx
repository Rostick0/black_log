import React from "react";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Login"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));

export const ROUTE_NAMES = {
  main: "/",
  login: "/login",
  register: "/register",
};

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={ROUTE_NAMES.main} element={<Home />}></Route>
        <Route path={ROUTE_NAMES.login} element={<Login />}></Route>
        <Route path={ROUTE_NAMES.register} element={<Register />}></Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
