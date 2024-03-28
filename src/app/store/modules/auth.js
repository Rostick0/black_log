import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BACKEND } from "../utils";

export const authApi = createApi({
  reducerPath: "authApi",
  tagTypes: ["Auth"],
  baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
  endpoints: (build) => ({
    login: build.mutation({
      query: ({ body }) => ({
        url: "login",
        method: "POST",
        body,
      }),
      providesTags: (result, error, id) => [{ type: "User" }],
    }),
    register: build.mutation({
      query: ({ body }) => ({
        url: "register",
        method: "POST",
        body,
      }),
      providesTags: (result, error, id) => [{ type: "User" }],
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
