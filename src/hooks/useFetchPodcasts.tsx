import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { IEntry, IPodcastsResponse } from '../types/podcast';
import { useGetPodcastsQuery } from '../reducers/itunes/itunesApiSlice';
import {
  setInitialLoad,
  setPodcastsList,
} from '../reducers/itunes/podcastsSlide';

interface IPodcastsListProps {
  podcastsList: IEntry[] | undefined;
  loading: boolean;
}

interface IParams {
  limit: number;
  gender: number;
}

/**
 * Custom hook that fetches a list of podcasts based on the provided parameters and returns the list of podcasts and loading status.
 * @param {IParams} params
 * @returns The function `useFetchPodcasts` returns an object with two properties: `podcastsList` and
`loading`.
 */
const useFetchPodcasts = ({
  limit = 10,
  gender = 1310,
}: IParams): IPodcastsListProps => {
  const dispatch = useDispatch();
  const [skip, setSkip] = useState<boolean>(true);
  const { podcastsList } = useSelector((state: RootState) => state.podcasts);
  const { data, isLoading, isError } = useGetPodcastsQuery<IPodcastsResponse>(
    { gender, limit },
    { skip }
  );

  /* It checks if there is an error (`isError`) when fetching podcasts. 
  If so, it dispatches the `setInitialLoad` action with the value `false` */
  useEffect(() => {
    if (isError) {
      dispatch(setInitialLoad(false));
      console.log('Error fetching podcasts');
    }
  }, [dispatch, isError]);

  /* It checks if the `podcastsList` is empty. If so, it dispatches the `setInitialLoad` action with the value `true` 
  and sets the `skip` value to `false` to call the endpoint */
  useEffect(() => {
    if (!podcastsList) {
      dispatch(setInitialLoad(true));
      setSkip(false);
    }
  }, [dispatch, podcastsList]);

  /* It checks if the `data` is not empty. If so, it dispatches the `setInitialLoad` action with the value `false`, 
  sets the `skip` value to `true` to prevent calling the endpoint again, and dispatches the `setPodcastsList` action 
  with the `data.feed.entry` value */
  useEffect(() => {
    if (data) {
      dispatch(setInitialLoad(false));
      setSkip(true);
      dispatch(setPodcastsList(data.feed.entry));
      dispatch(setInitialLoad(false));
    }
  }, [data, dispatch, skip]);

  return {
    podcastsList,
    loading: isLoading,
  };
};

export default useFetchPodcasts;
