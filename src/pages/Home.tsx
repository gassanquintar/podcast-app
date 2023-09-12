import { FC } from 'react';
import useFetchPodcasts from '../hooks/useFetchPodcasts';
import { IEntry } from '../types/podcast';
import { Alert, Box, LinearProgress } from '@mui/material';
import PodcastsList from '../components/PodcastsList';
import SearchBar from '../components/SearchBar';

/**
 * Home component renders the main page.
 * @returns JSX.Element
 */
const Home: FC = () => {
  const limit = 100;
  const gender = 1310;
  /* Custom hook to fetch a list of podcasts. */
  const { podcastsList, loading, error } = useFetchPodcasts({
    limit,
    gender,
  });

  return (
    <>
      {loading ? (
        <Box className='w-full'>
          <LinearProgress />
        </Box>
      ) : (!podcastsList && !loading) || error ? (
        <Box className='w-full'>
          <Alert severity='warning'>
            We do not have any podcasts to display!
          </Alert>
        </Box>
      ) : (
        <>
          <SearchBar />
          <PodcastsList items={podcastsList as IEntry[]} />
        </>
      )}
    </>
  );
};

export default Home;
