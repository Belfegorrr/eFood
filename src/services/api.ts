import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurant: builder.query<Restaurante, void>({
      query: () => 'menu'
    })
  })
})

export const { useGetFeaturedRestaurantQuery } = api

export default api
