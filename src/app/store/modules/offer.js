import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_BACKEND } from "../utils";
import { getTokenHeader } from "../../utils/token";

export const offerApi = createApi({
  reducerPath: "offerApi",
  tagTypes: ["Offers"],
  baseQuery: fetchBaseQuery({ baseUrl: URL_BACKEND }),
  endpoints: (build) => ({
    offersGet: build.query({
      query: (params = {}) => ({
        url: "offers",
        headers: {
          ...getTokenHeader(),
        },
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
    offersMyGet: build.query({
      query: (params = {}) => ({
        url: "offers",
        headers: {
          ...getTokenHeader(),
        },
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
        headers: {
          ...getTokenHeader(),
        },
        body,
      }),
      invalidatesTags: [{ type: "Offers", id: "LIST" }],
    }),
    offerUpdate: build.mutation({
      query: ({ body, id }) => ({
        url: `offers/${id}/update`,
        method: "PUT",
        headers: {
          ...getTokenHeader(),
        },
        body,
      }),
      invalidatesTags: [{ type: "Offers", id: "LIST" }],
    }),
    offerDelete: build.mutation({
      query: ({ body, id }) => ({
        url: `offers/${id}/delete`,
        method: "DELETE",
        headers: {
          ...getTokenHeader(),
        },
        body,
      }),
      invalidatesTags: [{ type: "Offers", id: "LIST" }],
    }),
    offersGetHot: build.query({
      query: () => ({
        url: "offers/hot",
        headers: {
          ...getTokenHeader(),
        },
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
  }),
});

export const {
  useOffersGetQuery,
  useOffersMyGetQuery,
  useOfferCreateMutation,
  useOfferUpdateMutation,
  useOfferDeleteMutation,
  useOffersGetHotQuery,
} = offerApi;
