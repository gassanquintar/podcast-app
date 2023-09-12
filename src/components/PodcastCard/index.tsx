import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';
import { IEntry } from '../../types/podcast';
import { NavLink as RouterLink } from 'react-router-dom';

interface IProps {
  item: Partial<IEntry>;
}

/**
 * PodcastCard component renders the podcast card.
 * It takes in a prop called `item` and extracts the `title`, `artist`, and `image` values from the `item` prop.
 * @param {IProps} item
 * @returns JSX.Element
 */
const PodcastCard: FC<IProps> = ({ item }: IProps) => {
  const { postcastId, podcastTitle, podcastArtist, podcastImage } = item;

  return (
    <>
      <RouterLink to={`/podcast/${postcastId}`}>
        <Box className='w-screen md:w-56 mr-1 my-10 shadow-sm shadow-gray-50'>
          {podcastImage && (
            <Box className='flex justify-center relative mb-2'>
              <img
                className='rounded-full border border-gray-100 h-24 w-24 absolute -top-10'
                alt={podcastTitle}
                src={podcastImage}
              />
            </Box>
          )}
          {podcastTitle && (
            <Box className='flex justify-center border-gray-400 rounded-md p-3 shadow-md h-48'>
              <Box className='mt-10'>
                <Typography gutterBottom variant='body2'>
                  {podcastTitle}
                </Typography>
                <Typography variant='caption' color='text.secondary'>
                  Author: {podcastArtist}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </RouterLink>
    </>
  );
};

export default PodcastCard;
