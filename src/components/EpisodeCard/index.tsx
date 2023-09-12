import React, { FC } from 'react';
import { IPodcastDetail } from '../../types/podcast';
import { Box, Card, Grid, Typography } from '@mui/material';

interface IProps {
  episode: Partial<IPodcastDetail>;
}

/**
 * The EpisodeCard component renders a card with episode information and an audio player.
 * @param  - episode - The episode object
 * @returns JSX.Element
 */
const EpisodeCard: FC<IProps> = ({ episode }) => {
  const { trackName, description, shortDescription, episodeUrl } = episode;
  return (
    <Grid item xs={12} md={8}>
      <Card>
        <Box className='p-5'>
          <Box className='text-md font-black pb-3'> {trackName}</Box>
          <Typography variant='body2' color='text.secondary'>
            {description || shortDescription}
          </Typography>
        </Box>
        <Box className='flex justify-center p-5'>
          <audio controls src={episodeUrl}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </Box>
      </Card>
    </Grid>
  );
};

export default EpisodeCard;
