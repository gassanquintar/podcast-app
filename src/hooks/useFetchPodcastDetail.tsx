import { useEffect, useState } from 'react';
import {
  IPodcastDetail,
  IPodcastDetailResponse,
  IPodcastEpisodeProps,
  IPodcastResponse,
} from '../types/podcast';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { useGetPodcastDetailQuery } from '../reducers/itunes/itunesApiSlice';
import {
  setInitialLoad,
  setPodcastsEpisodesList,
} from '../reducers/itunes/podcastsSlide';

interface IParams {
  id: string;
  media: string;
  entity: string;
  limit: number;
}

const useFetchPodcastDetail = ({
  id,
  media,
  entity,
  limit,
}: IParams): IPodcastEpisodeProps => {
  const dispatch = useDispatch();
  const [skip, setSkip] = useState<boolean>(true);
  const [episodeList, setEpisodeList] = useState<IPodcastDetail[]>([]);
  const { podcastEpisodesList } = useSelector(
    (state: RootState) => state.podcasts
  );
  const filterCollection = podcastEpisodesList?.filter(
    (episode) => episode.collectionId === +id
  );
  const { data, isLoading, isError } =
    useGetPodcastDetailQuery<IPodcastResponse>(
      { id, media, entity, limit },
      { skip }
    );

  /* It checks if there is an error (`isError`) when fetching podcasts. 
  If so, it dispatches the `setInitialLoad` action with the value `false` */
  useEffect(() => {
    if (isError) {
      dispatch(setInitialLoad(false));
      console.log('Error fetching podcast episodes');
    }
  }, [dispatch, isError]);

  /* It checks if the `podcastsList` is empty. If so, it dispatches the `setInitialLoad` action with the value `true` 
  and sets the `skip` value to `false` to call the endpoint */
  useEffect(() => {
    if (!filterCollection || filterCollection?.length === 0) {
      dispatch(setInitialLoad(true));
      setSkip(false);
    }
  }, [filterCollection]);

  /* It checks if the `data` is not empty. If so, it dispatches the `setInitialLoad` action with the value `false`, 
  sets the `skip` value to `true` to prevent calling the endpoint again, and dispatches the `setPodcastsEpisodesList` action 
  with the `episodesData.results` value */
  useEffect(() => {
    if (data) {
      const episodesData = data.contents as unknown as IPodcastDetailResponse;
      dispatch(setInitialLoad(false));
      setSkip(true);
      dispatch(setPodcastsEpisodesList(episodesData.results));
      dispatch(setInitialLoad(false));
      setEpisodeList(episodesData.results as IPodcastDetail[]);
    }
  }, [data]);

  return {
    podcastEpisodesList:
      filterCollection && filterCollection?.length > 0
        ? filterCollection
        : episodeList,
    loading: isLoading,
    error: isError,
  };
};

export default useFetchPodcastDetail;
