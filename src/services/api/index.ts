import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/**
 * Define the API for the itunes API by using the redux-toolkit query API.
 * @see https://redux-toolkit.js.org/usage/query/
 * The endpoints are defined under the reducers folder according to each functionality.
 */
const apiItunes = createApi({
    reducerPath: 'apiItunes',
    baseQuery: fetchBaseQuery({
      baseUrl: process.env.REACT_APP_ITUNES_URL,
    }),    
    keepUnusedDataFor: 60 * 60 * 1000 * 24, // 1 day
    endpoints: (builder) => ({}),
  });
  /* Adding a tag to the api Itunes. This tag is used to manage the cache. */
  export const apiItunesWithTag = apiItunes.enhanceEndpoints({
    addTagTypes: [
      'PodcastsList',
    ],
  });