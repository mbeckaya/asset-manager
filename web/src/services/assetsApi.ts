import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Asset } from "../types/asset"

export const assetsApi = createApi({
    reducerPath: "assetsApi",

    baseQuery: fetchBaseQuery({ baseUrl: "/api/v1/" }),

    tagTypes: ["Assets"],

    endpoints: (builder) => ({
        getAllAssets: builder.query<Asset[], void>({
            query: () => "assets",
            providesTags: ["Assets"],
        }),
    }),
})

export const { 
    useGetAllAssetsQuery,
} = assetsApi