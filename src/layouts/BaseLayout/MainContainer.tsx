import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';
import MainBar from './MainBar';
import React from 'react';

interface IProps {
  children?: ReactNode;
}

/**
 * The MainBar component renders the main content area.
 * @param  {IProps} props
 * @returns The MainContainer component is returning a JSX element.
 */
const MainContainer: FC<IProps> = ({ children }: IProps) => {
  return (
    <>
      <MainBar />
      <Box component='main' className='p-4'>
        {children}
      </Box>
    </>
  );
};

export default React.memo(MainContainer);
