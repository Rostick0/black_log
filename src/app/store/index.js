import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./modules/auth";
import { bankApi } from "./modules/bank";
import { cartApi } from "./modules/cart";
import { offerApi } from "./modules/offer";
import { paymentApi } from "./modules/payment";
import { returnApi } from "./modules/return";
import { sellerStatsApi } from "./modules/sellerStats";
import { ticketApi } from "./modules/ticket";
import { ticketChatApi } from "./modules/ticketChat";
import { transactionsApi } from "./modules/transactions";
import { userApi } from "./modules/userSettings";
import { withdrawalsApi } from "./modules/withdrawal";
import userReducer from "./modules/user";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [bankApi.reducerPath]: bankApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [offerApi.reducerPath]: offerApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
    [returnApi.reducerPath]: returnApi.reducer,
    [sellerStatsApi.reducerPath]: sellerStatsApi.reducer,
    [ticketApi.reducerPath]: ticketApi.reducer,
    [ticketChatApi.reducerPath]: ticketChatApi.reducer,
    [transactionsApi.reducerPath]: transactionsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [withdrawalsApi.reducerPath]: withdrawalsApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(
      authApi.middleware,
      bankApi.middleware,
      cartApi.middleware,
      offerApi.middleware,
      paymentApi.middleware,
      returnApi.middleware,
      sellerStatsApi.middleware,
      ticketApi.middleware,
      ticketChatApi.middleware,
      transactionsApi.middleware,
      userApi.middleware,
      withdrawalsApi.middleware
    ),
});
