import {
  AppBar,
  Box,
  CircularProgress,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { FC } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';

/**
 * The MainBar component renders a navigation bar with a title.
 * @returns The MainBar component is returning a JSX element.
 */
const MainBar: FC = () => {
  const { initialLoad } = useSelector((state: RootState) => state.podcasts);
  return (
    <Box className='flex-grow'>
      <AppBar position='static' color='primary'>
        <Toolbar variant='dense'>
          <Grid container className='flex justify-between'>
            <Grid item>
              <Typography variant='h6' color='inherit' component='div'>
                <RouterLink to='/'>Podcaster</RouterLink>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='h6' color='inherit' component='div'>
                {initialLoad && <CircularProgress color='success' size={20} />}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default React.memo(MainBar);
