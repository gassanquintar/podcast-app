import { Box, Card, Typography } from '@mui/material';
import React, { FC } from 'react';

const NoFound: FC = () => {
  return (
    <>
      <Box className='flex justify-center flex-col justify-items-center gap-3 m-[25%]'>
        <Typography variant='h3' gutterBottom>
          404 - Page Not Found
        </Typography>
        <Typography variant='body1' className='text-center'>
          Unfortunately, this page can't be found.
        </Typography>
      </Box>
    </>
  );
};

export default NoFound;
