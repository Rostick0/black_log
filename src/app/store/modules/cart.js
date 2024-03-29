import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BACKEND } from "../utils";
import { getTokenHeader } from "../../utils/token";

export const cartApi = createApi({
  reducerPath: "cartApi",
  tagTypes: ["Cart"],
  baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
  endpoints: (build) => ({
    cartsGet: build.query({
      query: (params = {}) => ({
        url: "cart",
        headers: {
          ...getTokenHeader(),
        },
        params,
      }),
      providesTags: (result) => {
        return result?.result?.length
          ? [
              ...result?.result?.map(({ id }) => ({ type: "Cart", id })),
              { type: "Cart", id: "LIST" },
            ]
          : [{ type: "Cart", id: "LIST" }];
      },
    }),
    cartCreate: build.mutation({
      query: ({ body }) => ({
        url: "cart/buy",
        method: "POST",
        headers: {
          ...getTokenHeader(),
        },
        body,
      }),
      invalidatesTags: [{ type: "Cart", id: "LIST" }],
    }),
  }),
});

export const { useCartsGetQuery, useCartCreateMutation } = cartApi;
