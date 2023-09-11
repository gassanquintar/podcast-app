import { configureStore } from '@reduxjs/toolkit';
import { apiItunesWithTag } from '../services/api';
import podcastsSlideReducer from '../reducers/itunes/podcastsSlide';


/* The code is configuring the Redux store using the `configureStore` function from the
`@reduxjs/toolkit` package. */
export const store = configureStore({
  reducer: {
    [apiItunesWithTag.reducerPath]: apiItunesWithTag.reducer,
    podcasts: podcastsSlideReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiItunesWithTag.middleware),
});

/* The `RootState` type is used to define the type of the `useSelector` hook. */
export type RootState = ReturnType<typeof store.getState>;

/* The `AppDispatch` type is used to define the type of the `useDispatch` hook. */
export type AppDispatch = typeof store.dispatch;
