/* eslint-disable spaced-comment */
/* eslint-disable arrow-parens */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '229f753b2cmshf0d1c81f49d91f8p1c7171jsnf13d6709e53d');

      return headers;
    },
  }),

  //building in all of the endpoints of the API we are calling
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
  }),
});

export const {
  useGetTopChartsQuery,
} = shazamCoreApi;
