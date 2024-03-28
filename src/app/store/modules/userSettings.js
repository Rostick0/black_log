import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BACKEND } from "../utils";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND, headers: {} }),
  endpoints: (build) => ({
    userGet: build.query({
      query: () => ({
        url: "user/settings",
        // params,
      }),
      providesTags: (result, error, id) => [{ type: "User" }],
    }),
    userUpdate: build.mutation({
      query: ({ body }) => ({
        url: "user/settings",
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: "User" }],
    }),
  }),
});

export const { useUserGetQuery, useUserUpdateMutation } = userApi;
