import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BACKEND } from "../utils";
import { getTokenHeader } from "../../utils/token";

export const paymentApi = createApi({
  reducerPath: "paymentApi",
  tagTypes: ["Payment"],
  baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
  endpoints: (build) => ({
    paymentsGet: build.query({
      query: (params = {}) => ({
        url: "payment",
        headers: {
          ...getTokenHeader(),
        },
        params,
      }),
      providesTags: (result) => {
        return result?.result?.length
          ? [
              ...result?.result?.map(({ id }) => ({ type: "Payment", id })),
              { type: "Payment", id: "LIST" },
            ]
          : [{ type: "Payment", id: "LIST" }];
      },
    }),
    paymentCreate: build.mutation({
      query: ({ body, currency }) => ({
        url: `payment/${currency}`,
        method: "POST",
        headers: {
          ...getTokenHeader(),
        },
        body,
      }),
      invalidatesTags: [{ type: "Payment", id: "LIST" }],
    }),
    exchangeGet: build.query({
      query: ({ currency = "BTC" } = {}) => ({
        url: `/exchange/${currency}`,
        headers: {
          ...getTokenHeader(),
        },
      }),
      // invalidatesTags: [{ type: "Payment", id: "LIST" }],
    }),
  }),
});

export const {
  usePaymentsGetQuery,
  usePaymentCreateMutation,
  useExchangeGetQuery,
} = paymentApi;
