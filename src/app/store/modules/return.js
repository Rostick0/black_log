import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BACKEND } from "../utils";

export const returnApi = createApi({
  reducerPath: "returnApi",
  tagTypes: ["Returns"],
  baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
  endpoints: (build) => ({
    returnsGet: build.query({
      query: (params) => ({
        url: "returns",
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
        body,
      }),
      invalidatesTags: [{ type: "Returns", id: "LIST" }],
    }),
    returnRefund: build.mutation({
      query: ({ body, id }) => ({
        url: `returns/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [{ type: "Returns", id: "LIST" }],
    }),
    returnClose: build.mutation({
      query: ({ body, id }) => ({
        url: `returns/${id}/close`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [{ type: "Returns", id: "LIST" }],
    }),
    returnGet: build.query({
      query: ({ id }) => ({
        url: `returns/${id}`,
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
