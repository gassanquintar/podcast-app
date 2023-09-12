import { FC } from 'react';
import { IPodcastDetail } from '../../types/podcast';
import { Box, Card, Divider, Grid } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';

interface IProps {
  track: Partial<IPodcastDetail>;
  link?: string;
}

/**
 * The SidebarPodcast component displays information about a podcast track, including its artwork,
 * collection name, artist name, and description.
 * @param {IProps} track - The track object | link - The link to the podcast
 * @returns JSX.Element
 */
const SidebarPodcast: FC<IProps> = ({ track, link }: IProps) => {
  return (
    <Grid item xs={12} md={4}>
      <Card>
        <Box className='flex flex-col justify-center p-4 gap-1'>
          <Box className='flex justify-center'>
            {link ? (
              <RouterLink to={link}>
                <img
                  className='h-auto w-40 mb-5 rounded-md'
                  src={track?.artworkUrl100}
                  alt={track?.collectionName}
                />
              </RouterLink>
            ) : (
              <img
                className='h-auto w-40 mb-5 rounded-md'
                src={track?.artworkUrl100}
                alt={track?.collectionName}
              />
            )}
          </Box>
          <Divider />
          <Box className='text-sm font-black'>{track?.collectionName}</Box>
          <Box className='text-xs italic' color='text.secondary' component='p'>
            {link ? (
              <RouterLink to={link}>{track?.artistName}</RouterLink>
            ) : (
              track?.artistName
            )}
          </Box>
          <Divider />
          <Box className='text-sm font-black'>Description:</Box>
          <Box className='text-xs italic' color='text.secondary' component='p'>
            {track?.collectionName}
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};

export default SidebarPodcast;
