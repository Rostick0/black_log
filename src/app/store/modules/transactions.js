import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BACKEND } from "../utils";

export const transactionsApi = createApi({
  reducerPath: "transactionsApi",
  tagTypes: ["Transactions"],
  baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
  endpoints: (build) => ({
    transactionsGet: build.query({
      query: () => ({
        url: "transactions",
        // params,
      }),
    }),
  }),
});

export const { useTransactionsGetQuery } = transactionsApi;
