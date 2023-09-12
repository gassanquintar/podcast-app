import { Grid } from '@mui/material';
import { FC } from 'react';
import SidebarPodcast from '../components/PodcastSidebar';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useParams } from 'react-router-dom';
import EpisodeCard from '../components/EpisodeCard';

/**
 * The EpisodeDetail component renders a sidebar and an episode card based on the podcastId and
 * episodeId parameters.
 * @returns JSX element.
 */

const EpisodeDetail: FC = () => {
  const { podcastId, episodeId } = useParams<{
    podcastId: string;
    episodeId: string;
  }>();
  const linkView = `/podcast/${podcastId}`;

  const { podcastEpisodesList } = useSelector(
    (state: RootState) => state.podcasts
  );

  /* It filters the `podcastEpisodesList` array to find the first episode that matches with `track` wrapperType. */
  const trackSidebar = podcastEpisodesList?.filter(
    (episode) =>
      episode.collectionId === +podcastId! && episode.wrapperType === 'track'
  )[0];
  /* It filters the `podcastEpisodesList` array to find the episode into the podcasts list. */
  const episodeDetail = podcastEpisodesList?.filter(
    (episode) =>
      episode.collectionId === +podcastId! && episode.trackId === +episodeId!
  )[0];
  return (
    <>
      <Grid container spacing={2}>
        {trackSidebar && (
          <SidebarPodcast track={trackSidebar} link={linkView} />
        )}
        {episodeDetail && <EpisodeCard episode={episodeDetail} />}
      </Grid>
    </>
  );
};

export default EpisodeDetail;
