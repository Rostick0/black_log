import React from "react";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Market = lazy(() => import("../pages/Market"));
const Requests = lazy(() => import("../pages/Requests"));

const UserTickets = lazy(() => import("../pages/User/Tickets"));
const UserProfileBalance = lazy(() => import("../pages/User/ProfileBalance"));
const UserProfileBasket = lazy(() => import("../pages/User/ProfileBasket"));
const UserProfileProducts = lazy(() => import("../pages/User/ProfileProducts"));
const UserProfileSettings = lazy(() => import("../pages/User/ProfileSettings"));
const UserProfileTransactions = lazy(() =>
  import("../pages/User/ProfileTransactions")
);

export const ROUTE_NAMES = {
  main: "/",
  login: "/login",
  market: "/market",
  register: "/register",
  user: {
    tickets: "/user/tickets",
    profile: {
      balance: "/user/profile/balance",
      basket: "/user/profile/basket",
      products: "/user/profile/products",
      settings: "/user/profile/settings",
      transactions: "/user/profile/transactions",
    },
  },
};

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={ROUTE_NAMES.main} element={<Home />}></Route>
        <Route path={ROUTE_NAMES.login} element={<Login />}></Route>
        <Route path={ROUTE_NAMES.register} element={<Register />}></Route>
        <Route path={ROUTE_NAMES.market} element={<Market />}></Route>
        <Route path={ROUTE_NAMES.requests} element={<Requests />}></Route>

        <Route
          path={ROUTE_NAMES.user.tickets}
          element={<UserTickets />}
        ></Route>
        <Route
          path={ROUTE_NAMES.user.profile.balance}
          element={<UserProfileBalance />}
        ></Route>
        <Route
          path={ROUTE_NAMES.user.profile.basket}
          element={<UserProfileBasket />}
        ></Route>
        <Route
          path={ROUTE_NAMES.user.profile.products}
          element={<UserProfileProducts />}
        ></Route>
        <Route
          path={ROUTE_NAMES.user.profile.settings}
          element={<UserProfileSettings />}
        ></Route>
        <Route
          path={ROUTE_NAMES.user.profile.transactions}
          element={<UserProfileTransactions />}
        ></Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
