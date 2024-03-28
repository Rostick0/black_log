import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BACKEND } from "../utils";

export const offerApi = createApi({
  reducerPath: "offerApi",
  tagTypes: ["Offers"],
  baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
  endpoints: (build) => ({
    offersGet: build.query({
      query: (params) => ({
        url: "offers",
        params,
      }),
      providesTags: (result) => {
        return result?.result?.length
          ? [
              ...result?.result?.map(({ id }) => ({ type: "Offers", id })),
              { type: "Offers", id: "LIST" },
            ]
          : [{ type: "Offers", id: "LIST" }];
      },
    }),
    offerCreate: build.mutation({
      query: ({ body }) => ({
        url: "offers",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Offers", id: "LIST" }],
    }),
    offerUpdate: build.mutation({
      query: ({ body, id }) => ({
        url: `offers/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: "Offers", id: "LIST" }],
    }),
    offerDelete: build.mutation({
      query: ({ body, id }) => ({
        url: `offers/${id}`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: [{ type: "Offers", id: "LIST" }],
    }),
    offersGetHot: build.query({
      query: () => "offers/hot",
      providesTags: (result) => {
        return result?.result?.length
          ? [
              ...result?.result?.map(({ id }) => ({ type: "Offers", id })),
              { type: "Offers", id: "LIST" },
            ]
          : [{ type: "Offers", id: "LIST" }];
      },
    }),
  }),
});

export const {
  useOffersGetQuery,
  useOfferCreateMutation,
  useOfferUpdateMutation,
  useOfferDeleteMutation,
  useOffersGetHotQuery,
} = offerApi;
