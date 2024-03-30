import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BACKEND } from "../utils";
import { getTokenHeader } from "../../utils/token";

export const purchasesApi = createApi({
  reducerPath: "purchasesApi",
  tagTypes: ["Updates"],
  baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
  endpoints: (build) => ({
    purchasesGet: build.query({
      query: (params = {}) => ({
        url: "user/purchases",
        headers: {
          ...getTokenHeader(),
        },
        params,
      }),
    }),
  }),
});

export const { usePurchasesGetQuery } = purchasesApi;
