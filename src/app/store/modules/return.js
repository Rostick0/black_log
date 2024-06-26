import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BACKEND } from "../utils";
import { getTokenHeader } from "../../utils/token";

export const returnApi = createApi({
  reducerPath: "returnApi",
  tagTypes: ["Returns"],
  baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
  endpoints: (build) => ({
    returnsGet: build.query({
      query: (params = {}) => ({
        url: "returns",
        headers: {
          ...getTokenHeader(),
        },
        params,
      }),
      providesTags: (result) => {
        return result?.result?.length
          ? [
              ...result?.result?.map(({ id }) => ({ type: "Returns", id })),
              { type: "Returns", id: "LIST" },
            ]
          : [{ type: "Returns", id: "LIST" }];
      },
    }),
    returnCreate: build.mutation({
      query: ({ body }) => ({
        url: "returns",
        method: "POST",
        headers: {
          ...getTokenHeader(),
        },
        body,
      }),
      invalidatesTags: [{ type: "Returns", id: "LIST" }],
    }),
    returnRefund: build.mutation({
      query: ({ id }) => ({
        url: `returns/${id}/refund`,
        method: "POST",
        headers: {
          ...getTokenHeader(),
        },
      }),
      invalidatesTags: [{ type: "Returns", id: "LIST" }],
    }),
    returnClose: build.mutation({
      query: ({ id }) => ({
        url: `returns/${id}/close`,
        method: "POST",
        headers: {
          ...getTokenHeader(),
        },
      }),
      invalidatesTags: [{ type: "Returns", id: "LIST" }],
    }),
    returnGet: build.query({
      query: ({ id }) => ({
        url: `returns/${id}`,
        headers: {
          ...getTokenHeader(),
        },
      }),
    }),
  }),
});

export const {
  useReturnsGetQuery,
  useReturnCreateMutation,
  useReturnRefundMutation,
  useReturnCloseMutation,
  useReturnGetQuery,
} = returnApi;
