import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BACKEND } from "../utils";

export const sellerStatsApi = createApi({
  reducerPath: "sellerStatsApi",
  tagTypes: ["SellerStat"],
  baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
  endpoints: (build) => ({
    sellerStatsGet: build.query({
      query: (params) => ({
        url: "user/stats",
        params,
      }),
    }),
  }),
});

export const { useSellerStatsGetQuery } = sellerStatsApi;
