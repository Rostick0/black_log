import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BACKEND } from "../utils";

export const bankApi = createApi({
  reducerPath: "bankApi",
  tagTypes: ["Banks"],
  baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
  endpoints: (build) => ({
    banksGet: build.query({
      query: (params) => ({
        url: "banks",
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
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Banks", id: "LIST" }],
    }),
    bankUpdate: build.mutation({
      query: ({ body, id }) => ({
        url: `banks/${id}/update`,
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: "Banks", id: "LIST" }],
    }),
    bankDelete: build.mutation({
      query: ({ body, id }) => ({
        url: `banks/${id}/delete`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: [{ type: "Banks", id: "LIST" }],
    }),
  }),
});

export const {
  useBanksGetQuery,
  useBankCreateMutation,
  useBankUpdateMutation,
  useBankDeleteMutation,
} = bankApi;
