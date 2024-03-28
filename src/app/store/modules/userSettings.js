import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BACKEND } from "../utils";

export const userSettingsApi = createApi({
  reducerPath: "userSettingsApi",
  tagTypes: ["userSettingsApi"],
  baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND, headers: {} }),
  endpoints: (build) => ({
    userSettingsGet: build.query({
      query: () => ({
        url: "/user/settings",
        // params,
      }),
      providesTags: (result, error, id) => [{ type: "userSettingsApi" }],
    }),
    userSettingsUpdate: build.mutation({
      query: ({ body }) => ({
        url: "/user/settings",
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: "userSettingsApi" }],
    }),
  }),
});

export const { useUserSettingsGetQuery, useUserSettingsUpdateMutation } =
  userSettingsApi;
