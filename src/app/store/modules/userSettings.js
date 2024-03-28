import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BACKEND } from "../utils";

export const userSettingsApi = createApi({
  reducerPath: "userSettingsApi",
  tagTypes: ["UserSettings"],
  baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND, headers: {} }),
  endpoints: (build) => ({
    userSettingsGet: build.query({
      query: () => ({
        url: "/user/settings",
        // params,
      }),
      providesTags: (result, error, id) => [{ type: "UserSettings" }],
    }),
    userSettingsUpdate: build.mutation({
      query: ({ body }) => ({
        url: "/user/settings",
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: "UserSettings" }],
    }),
  }),
});

export const { useUserSettingsGetQuery, useUserSettingsUpdateMutation } =
  userSettingsApi;
