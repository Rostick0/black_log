import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BACKEND } from "../utils";

export const ticketApi = createApi({
  reducerPath: "ticketApi",
  tagTypes: ["Tickets"],
  baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
  endpoints: (build) => ({
    ticketsGet: build.query({
      query: (params) => ({
        url: "tickets",
        params,
      }),
      providesTags: (result) => {
        return result?.result?.length
          ? [
              ...result?.result?.map(({ id }) => ({ type: "Tickets", id })),
              { type: "Tickets", id: "LIST" },
            ]
          : [{ type: "Tickets", id: "LIST" }];
      },
    }),
    ticketsHotGet: build.query({
      query: (params) => ({
        url: "tickets/hot",
        params,
      }),
      providesTags: (result) => {
        return result?.result?.length
          ? [
              ...result?.result?.map(({ id }) => ({ type: "Tickets", id })),
              { type: "Tickets", id: "LIST" },
            ]
          : [{ type: "Tickets", id: "LIST" }];
      },
    }),
    ticketGet: build.query({
      query: (id) => ({
        url: `tickets/${id}`,
        // params,
      }),
      providesTags: (result, error, id) => [{ type: "Tickets", id }],
    }),
    ticketCreate: build.mutation({
      query: ({ body }) => ({
        url: "tickets",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Tickets", id: "LIST" }],
    }),
    ticketUpdate: build.mutation({
      query: ({ body, id }) => ({
        url: `tickets/${id}/close`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [{ type: "Tickets", id: "LIST" }],
    }),
  }),
});

export const {
  useTicketsGetQuery,
  useTicketsHotGetQuery,
  useTicketGetQuery,
  useTicketCreateMutation,
  useTicketUpdateMutation,
} = ticketApi;
