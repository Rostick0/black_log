import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BACKEND } from "../utils";
import { getTokenHeader } from "../../utils/token";

export const downloadApi = createApi({
  reducerPath: "downloadApi",
  tagTypes: ["Donwload"],
  baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
  endpoints: (build) => ({
    downloadGet: build.query({
      query: (params = {}) => ({
        url: "download",
        headers: {
          ...getTokenHeader(),
        },
        responseHandler: async (response) => window.location.assign(window.URL.createObjectURL(await response.blob())),
        params,
      }),
    }),
  }),
});

export const { useLazyDownloadGetQuery } = downloadApi;
