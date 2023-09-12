import { Box, Skeleton, Typography } from '@mui/material';
import React, { FC } from 'react';

/**
 * PodcastCardSkeleton component renders the podcast card skeleton.
 * @returns JSX.Element
 */
const PodcastCardSkeleton: FC = () => {
  return (
    <>
      <Box className='w-screen md:w-52 mr-1 my-10'>
        <Box className='flex justify-center mb-2'>
          <Skeleton
            animation='wave'
            variant='circular'
            className='absolute'
            width={80}
            height={80}
          />
        </Box>
        <Box className='flex justify-center border-gray-400 rounded-md p-3 shadow-md h-32'>
          <Box className='mt-10'>
            <Typography gutterBottom variant='body2'>
              <Skeleton
                className='mr-1.5'
                animation='wave'
                height={10}
                width={150}
              />
              <Skeleton
                className='mr-1.5'
                animation='wave'
                height={10}
                width={120}
              />
            </Typography>
            <Skeleton animation='wave' height={10} width={100} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default React.memo(PodcastCardSkeleton);
