import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BACKEND } from "../utils";
import { getTokenHeader } from "../../utils/token";

export const ticketChatApi = createApi({
  reducerPath: "ticketChatApi",
  tagTypes: ["TicketChat"],
  baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND, headers: {} }),
  endpoints: (build) => ({
    ticketMessagesGet: build.query({
      query: ({ id, ...params } = {}) => ({
        url: `/tickets/${id}/messages`,
        headers: {
          ...getTokenHeader(),
        },
        params,
      }),
      providesTags: (result) => {
        return result?.result?.length
          ? [
              ...result?.result?.map(({ id }) => ({ type: "TicketChat", id })),
              { type: "TicketChat", id: "LIST" },
            ]
          : [{ type: "TicketChat", id: "LIST" }];
      },
    }),
    ticketChatCreate: build.mutation({
      query: ({ body, id }) => ({
        url: `tickets/${id}/send-message`,
        method: "POST",
        headers: {
          ...getTokenHeader(),
        },
        body,
      }),
      invalidatesTags: [{ type: "TicketChat" }],
    }),
  }),
});

export const {
  useTicketMessagesGetQuery,
  useTicketChatCreateMutation,
  useLazyTicketMessagesGetQuery,
} = ticketChatApi;
