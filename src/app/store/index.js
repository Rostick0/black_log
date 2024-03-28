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
import { userSettingsApi } from "./modules/userSettings";
import { withdrawalsApi } from "./modules/withdrawal";

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
    [userSettingsApi.reducerPath]: userSettingsApi.reducer,
    [withdrawalsApi.reducerPath]: withdrawalsApi.reducer,
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
      userSettingsApi.middleware,
      withdrawalsApi.middleware,
    ),
});
