import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BACKEND } from "../utils";
import { getTokenHeader } from "../../utils/token";

export const withdrawalsApi = createApi({
  reducerPath: "withdrawalsApi",
  tagTypes: ["Withdrawals"],
  baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND, headers: {} }),
  endpoints: (build) => ({
    withdrawalsCreate: build.mutation({
      query: ({ body }) => ({
        url: "withdrawals",
        method: "POST",
        headers: {
          ...getTokenHeader(),
        },
        body,
      }),
      invalidatesTags: [{ type: "Withdrawals" }],
    }),
  }),
});

export const { useWithdrawalsCreateMutation } = withdrawalsApi;
