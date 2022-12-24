import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "earthsfreshApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.earthsfresh.in/api/",
    prepareHeaders(headers) {
      headers.set("content_type", `application / json`);
      headers.set("SESSIONID", 45);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      login: builder.mutation({
        query(body) {
          return {
            url: "users/userLogin",
            method: "POST",
            body,
          };
        },
      }),
      getCategories: builder.query({
        query() {
          return "categories/getCategorylist";
        },
      }),
      getProduct: builder.mutation({
        query(body) {
          return {
            url: "products/getcategoryProducts",
            method: "POST",
            body,
          };
        },
      }),
    }
  },
});
export const { useLoginMutation, useGetCategoriesQuery,useGetProductMutation } = apiSlice;