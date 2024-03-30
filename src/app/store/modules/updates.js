import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BACKEND } from "../utils";
import { getTokenHeader } from "../../utils/token";

export const updatesApi = createApi({
  reducerPath: "updatesApi",
  tagTypes: ["Updates"],
  baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
  endpoints: (build) => ({
    updatesGet: build.query({
      query: (params = {}) => ({
        url: "updates",
        headers: {
          ...getTokenHeader(),
        },
        params,
      }),
    }),
  }),
});

export const { useUpdatesGetQuery } = updatesApi;
