import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BACKEND } from "../utils";
import { getTokenHeader } from "../../utils/token";

export const sellerStatsApi = createApi({
  reducerPath: "sellerStatsApi",
  tagTypes: ["SellerStat"],
  baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
  endpoints: (build) => ({
    sellerStatsGet: build.query({
      query: (params = {}) => ({
        url: "user/stats",
        headers: {
          ...getTokenHeader(),
        },
        params,
      }),
    }),
  }),
});

export const { useSellerStatsGetQuery } = sellerStatsApi;
