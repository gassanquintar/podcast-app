import React, { FC, Suspense, lazy } from 'react';
import useFetchPodcasts from '../hooks/useFetchPodcasts';
import { IEntry } from '../types/podcast';
import { Alert, Box, LinearProgress } from '@mui/material';
import PodcastsList from '../components/PodcastsList';

const Home: FC = () => {
  const limit = 100;
  const gender = 1310;
  const { podcastsList, loading } = useFetchPodcasts({
    limit,
    gender,
  });

  return (
    <>
      {loading ? (
        <Box className='w-full'>
          <LinearProgress />
        </Box>
      ) : !podcastsList && !loading ? (
        <Box className='w-full'>
          <Alert severity='warning'>
            We do not have any podcasts to display!
          </Alert>
        </Box>
      ) : (
        <PodcastsList items={podcastsList as IEntry[]} />
      )}
    </>
  );
};

export default Home;
