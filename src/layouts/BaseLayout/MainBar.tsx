import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

interface IProps {
  children?: ReactNode;
}

/**
 * The MainBar component renders a navigation bar with a title and a main content area.
 * @param  {IProps} props
 * @returns The MainBar component is returning a JSX element.
 */
const MainBar: FC<IProps> = ({ children }: IProps) => {
  return (
    <Box className='flex-grow'>
      <AppBar position='static' color='primary'>
        <Toolbar variant='dense'>
          <Typography variant='h6' color='inherit' component='div'>
            <RouterLink to='/'>Podcaster</RouterLink>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component='main' className='p-4'>
        {children}
      </Box>
    </Box>
  );
};

export default MainBar;
