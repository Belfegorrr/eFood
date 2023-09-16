import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurant: builder.query<Restaurante[], void>({
      query: () => ''
    }),
    getFeaturedRestaurantMenu: builder.query<Restaurante, string>({
      query: (id) => `${id}`
    })
  })
})

export const {
  useGetFeaturedRestaurantQuery,
  useGetFeaturedRestaurantMenuQuery
} = api

export default api
