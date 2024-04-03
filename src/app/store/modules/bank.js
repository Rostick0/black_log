import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BACKEND } from "../utils";
import { getTokenHeader } from "../../utils/token";

export const bankApi = createApi({
  reducerPath: "bankApi",
  tagTypes: ["Banks"],
  baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
  endpoints: (build) => ({
    banksGet: build.query({
      query: (params = {}) => ({
        url: "banks",
        headers: {
          ...getTokenHeader(),
        },
        params,
      }),
      providesTags: (result) => {
        return result?.result?.length
          ? [
              ...result?.result?.map(({ id }) => ({ type: "Banks", id })),
              { type: "Banks", id: "LIST" },
            ]
          : [{ type: "Banks", id: "LIST" }];
      },
    }),
    banksMyGet: build.query({
      query: (params = {}) => ({
        url: "/user/banks",
        headers: {
          ...getTokenHeader(),
        },
        params,
      }),
      providesTags: (result) => {
        return result?.result?.length
          ? [
              ...result?.result?.map(({ id }) => ({ type: "Banks", id })),
              { type: "Banks", id: "LIST" },
            ]
          : [{ type: "Banks", id: "LIST" }];
      },
    }),
    bankCreate: build.mutation({
      query: ({ body }) => ({
        url: "banks",
        headers: {
          ...getTokenHeader(),
        },
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Banks", id: "LIST" }],
    }),
    bankUpdate: build.mutation({
      query: ({ body, id }) => ({
        url: `banks/${id}/update`,
        method: "POST",
        headers: {
          ...getTokenHeader(),
        },
        body,
      }),
      invalidatesTags: [{ type: "Banks", id: "LIST" }],
    }),
    bankDelete: build.mutation({
      query: ({ body, id }) => ({
        url: `banks/${id}/delete`,
        method: "DELETE",
        headers: {
          ...getTokenHeader(),
        },
        body,
      }),
      invalidatesTags: [{ type: "Banks", id: "LIST" }],
    }),
  }),
});

export const {
  useBanksGetQuery,
  useBanksMyGetQuery,
  useBankCreateMutation,
  useBankUpdateMutation,
  useBankDeleteMutation,
} = bankApi;
