import React from "react";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Banks = lazy(() => import("../pages/Banks"));
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Market = lazy(() => import("../pages/Market"));
const Requests = lazy(() => import("../pages/Requests"));
const TicketChat = lazy(() => import("../pages/TicketChat"));

const ClientTickets = lazy(() => import("../pages/Client/Tickets"));
const ClientProfileBalance = lazy(() =>
  import("../pages/Client/ProfileBalance")
);
const ClientProfileBasket = lazy(() => import("../pages/Client/ProfileBasket"));
const ClientProfileProducts = lazy(() =>
  import("../pages/Client/ProfileProducts")
);
const ClientProfileSettings = lazy(() =>
  import("../pages/Client/ProfileSettings")
);
const ClientProfileTransactions = lazy(() =>
  import("../pages/Client/ProfileTransactions")
);

const SellerProfileBasket = lazy(() => import("../pages/Seller/ProfileBasket"));
const SellerProfileStatistics = lazy(() =>
  import("../pages/Seller/ProfileStatistics")
);

const SupportHome = lazy(() => import("../pages/Support/Home"));
const SupportTickets = lazy(() => import("../pages/Support/Tickets"));
const SupportRequests = lazy(() => import("../pages/Support/Requests"));

export const ROUTE_NAMES = {
  banks: "/banks",
  main: "/",
  login: "/login",
  market: "/market",
  register: "/register",
  ticket: {
    chat: "/ticket",
  },
  client: {
    tickets: "/client/tickets",
    profile: {
      balance: "/client/profile/balance",
      basket: "/client/profile/basket",
      products: "/client/profile/products",
      settings: "/client/profile/settings",
      transactions: "/client/profile/transactions",
    },
  },
  seller: {
    profile: {
      basket: "/seller/profile/basket",
      statistics: "/seller/profile/statistics",
    },
  },
  support: {
    home: "/support/home",
    tickets: "/support/tickets",
    requests: "/support/requests",
    profile: {},
  },
};

const AppRouter = ({ loggedIn }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {loggedIn ? (
          <>
            <Route path={ROUTE_NAMES.banks} element={<Banks />}></Route>
            <Route path={ROUTE_NAMES.main} element={<Home />}></Route>

            <Route path={ROUTE_NAMES.market} element={<Market />}></Route>
            <Route path={ROUTE_NAMES.requests} element={<Requests />}></Route>
            <Route
              path={ROUTE_NAMES.ticket.chat + "/:id"}
              element={<TicketChat />}
            ></Route>

            <Route
              path={ROUTE_NAMES.client.tickets}
              element={<ClientTickets />}
            ></Route>
            <Route
              path={ROUTE_NAMES.client.profile.balance}
              element={<ClientProfileBalance />}
            ></Route>
            <Route
              path={ROUTE_NAMES.client.profile.basket}
              element={<ClientProfileBasket />}
            ></Route>
            <Route
              path={ROUTE_NAMES.client.profile.products}
              element={<ClientProfileProducts />}
            ></Route>
            <Route
              path={ROUTE_NAMES.client.profile.settings}
              element={<ClientProfileSettings />}
            ></Route>
            <Route
              path={ROUTE_NAMES.client.profile.transactions}
              element={<ClientProfileTransactions />}
            ></Route>

            <Route
              path={ROUTE_NAMES.seller.profile.basket}
              element={<SellerProfileBasket />}
            ></Route>
            <Route
              path={ROUTE_NAMES.seller.profile.statistics}
              element={<SellerProfileStatistics />}
            ></Route>

            <Route
              path={ROUTE_NAMES.support.home}
              element={<SupportHome />}
            ></Route>
            <Route
              path={ROUTE_NAMES.support.tickets}
              element={<SupportTickets />}
            ></Route>
            <Route
              path={ROUTE_NAMES.support.requests}
              element={<SupportRequests />}
            ></Route>
          </>
        ) : (
          <>
            <Route path={ROUTE_NAMES.login} element={<Login />}></Route>
            <Route path={ROUTE_NAMES.register} element={<Register />}></Route>
          </>
        )}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
