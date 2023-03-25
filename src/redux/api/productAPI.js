import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

const productTagTypes = {
    PRODUCT: "product",
    TRL: "trl",
    APP_CONFIG: "app_config"
}

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: "https://api-test.innoloft.com"}),
    tagTypes: productTagTypes,
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: (initialPost) => "/product/6781/",
            providesTags: [productTagTypes.PRODUCT],
        }),
        updateProduct: builder.mutation({
            query: (initialPost) => ({
                url: "/product/6781/",
                method: "PUT",
                body: initialPost.updatedProduct,
            }),
            invalidatesTags: [productTagTypes.PRODUCT],
        }),
        getTRL: builder.query({
            query: (initialPost) => "/trl/",
            providesTags: [productTagTypes.TRL],
        }),
        getAppConfig: builder.query({
            query: (initialPost) => `/configuration/${initialPost.appId}/`,
            providesTags: [productTagTypes.APP_CONFIG],
        }),
    }),
})

export const {
    useGetProductQuery,
    useUpdateProductMutation,
    useGetTRLQuery,
    useGetAppConfigQuery,
} = productApi;