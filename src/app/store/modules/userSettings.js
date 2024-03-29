import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BACKEND } from "../utils";
import { getTokenHeader } from "../../utils/token";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND, headers: {} }),
  endpoints: (build) => ({
    userGet: build.query({
      query: (params = {}) => ({
        url: "user/settings",
        headers: {
          ...getTokenHeader(),
        },
        params,
      }),
      providesTags: (result, error, args) => [{ type: "User" }],
    }),
    userUpdate: build.mutation({
      query: ({ body }) => ({
        url: "user/settings",
        headers: {
          ...getTokenHeader(),
        },
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: "User" }],
    }),
  }),
});

export const { useUserGetQuery, useUserUpdateMutation } = userApi;
