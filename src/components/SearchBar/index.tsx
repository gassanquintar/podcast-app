import { Box, Chip, TextField } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { setPodcastsList } from '../../reducers/itunes/podcastsSlide';
import { IEntry } from '../../types/podcast';

/**
 * It allows users to search and filter a list of podcasts based on their title or artist.
 * @returns JSX.Element
 */
const SearchBar: FC = () => {
  const dispatch = useDispatch();
  const { podcastsList } = useSelector((state: RootState) => state.podcasts);
  const podcastsAmount = podcastsList?.length ?? 0;
  const [searchValue, setSearchValue] = useState<string>('');
  const [originalPodcastsList] = useState<IEntry[]>(podcastsList ?? []);

  /**
   * Updates the search value based on the input value of an HTML input element.
   * @param event - React.ChangeEvent<HTMLInputElement>
   */
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (searchValue) {
      /* It checks if either the `podcastTitle` or `podcastArtist`  includes the
      `searchValue`. */
      const filteredPodcasts = podcastsList?.filter((podcast) => {
        return (
          podcast.podcastTitle?.toLowerCase().includes(searchValue) ||
          podcast.podcastArtist?.toLowerCase().includes(searchValue)
        );
      });
      /* If the `filteredPodcasts` is not empty, it dispatches the `setPodcastsList` action. */
      filteredPodcasts && dispatch(setPodcastsList(filteredPodcasts));
    } else {
      /* If the `searchValue` is empty, it dispatches the `setPodcastsList` action with the original list. */
      dispatch(setPodcastsList(originalPodcastsList));
    }
  }, [searchValue]);

  return (
    <>
      <Box className='flex justify-end items-center gap-2 m-5 mb-10'>
        <Chip label={`${podcastsAmount}`} color='primary' />
        <TextField
          label='Filter podcast...'
          variant='outlined'
          className='w-1/3 border-2 border-gray-300 rounded-md p-1'
          onChange={handleSearch}
        />
      </Box>
    </>
  );
};

export default React.memo(SearchBar);
