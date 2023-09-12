import { Alert, Box, Grid, LinearProgress } from '@mui/material';
import React, { FC } from 'react';
import SidebarPodcast from '../components/PodcastSidebar';
import { useParams } from 'react-router-dom';
import useFetchPodcastDetail from '../hooks/useFetchPodcastDetail';
import EpisodesTable from '../components/EpisodesTable';

/* The `PodcastDetail` function component is a React component that displays the details of a podcast. */

/**
 * The PodcastDetail component displays the details of a podcast.
 * It takes in a prop called `podcastId` and uses the `useParams` hook to extract the `podcastId` from the URL.
 * @returns JSX.Element
 */
const PodcastDetail: FC = () => {
  const { podcastId } = useParams<{ podcastId: string }>();
  const { podcastEpisodesList, loading, error } = useFetchPodcastDetail({
    id: podcastId ?? '',
    media: 'podcast',
    entity: 'podcastEpisode',
    limit: 20,
  });

  /* Finds the first item that has a `wrapperType` property equal to `'track'`
  to be used in the sidebar component. */
  const track = podcastEpisodesList?.filter(
    (item) => item.wrapperType === 'track'
  )[0];

  return (
    <>
      {loading ? (
        <Box className='w-full'>
          <LinearProgress />
        </Box>
      ) : (!podcastEpisodesList && !loading) || error ? (
        <Box className='w-full'>
          <Alert severity='error'>
            Something went wrong while fetching the podcast episodes!
          </Alert>
        </Box>
      ) : (
        <>
          <Grid container spacing={4}>
            {track && <SidebarPodcast track={track} />}
            {podcastEpisodesList && (
              <EpisodesTable items={podcastEpisodesList} />
            )}
          </Grid>
        </>
      )}
    </>
  );
};

export default React.memo(PodcastDetail);
