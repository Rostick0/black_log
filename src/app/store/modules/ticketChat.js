import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BACKEND } from "../utils";

export const ticketChatApi = createApi({
  reducerPath: "ticketChatApi",
  tagTypes: ["TicketChat"],
  baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND, headers: {} }),
  endpoints: (build) => ({
    ticketChatCreate: build.mutation({
      query: ({ body, id }) => ({
        url: `tickets/${id}/send-message`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "TicketChat" }],
    }),
  }),
});

export const { useTicketChatCreateMutation } = ticketChatApi;
