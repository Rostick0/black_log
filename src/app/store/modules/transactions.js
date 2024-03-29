import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BACKEND } from "../utils";
import { getTokenHeader } from "../../utils/token";

export const transactionsApi = createApi({
  reducerPath: "transactionsApi",
  tagTypes: ["Transactions"],
  baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
  endpoints: (build) => ({
    transactionsGet: build.query({
      query: (params = {}) => ({
        url: "transactions",
        headers: {
          ...getTokenHeader(),
        },
        params,
      }),
    }),
  }),
});

export const { useTransactionsGetQuery } = transactionsApi;
