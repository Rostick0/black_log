import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BACKEND } from "../utils";
import { getTokenHeader } from "../../utils/token";

export const ticketApi = createApi({
  reducerPath: "ticketApi",
  tagTypes: ["Tickets"],
  baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
  endpoints: (build) => ({
    ticketsGet: build.query({
      query: (params = {}) => ({
        url: "tickets",
        headers: {
          ...getTokenHeader(),
        },
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
    ticketsMyGet: build.query({
      query: (params = {}) => ({
        url: "/user/tickets",
        headers: {
          ...getTokenHeader(),
        },
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
      query: (params = {}) => ({
        url: "tickets/hot",
        headers: {
          ...getTokenHeader(),
        },
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
        headers: {
          ...getTokenHeader(),
        },
      }),
      providesTags: (result, error, id) => [{ type: "Tickets", id }],
    }),
    ticketCreate: build.mutation({
      query: ({ body }) => ({
        url: "tickets",
        method: "POST",
        headers: {
          ...getTokenHeader(),
        },
        body,
      }),
      invalidatesTags: [{ type: "Tickets", id: "LIST" }],
    }),
    ticketUpdate: build.mutation({
      query: ({ body = {}, id }) => ({
        url: `tickets/${id}/close`,
        method: "POST",
        headers: {
          ...getTokenHeader(),
        },
        body,
      }),
      invalidatesTags: [{ type: "Tickets", id: "LIST" }],
    }),
  }),
});

export const {
  useTicketsGetQuery,
  useTicketsMyGetQuery,
  useTicketsHotGetQuery,
  useTicketGetQuery,
  useTicketCreateMutation,
  useTicketUpdateMutation,
} = ticketApi;
