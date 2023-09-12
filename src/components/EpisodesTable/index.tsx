import { FC } from 'react';
import { IPodcastDetail } from '../../types/podcast';
import {
  Box,
  Card,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import { format } from 'date-fns';

interface IProps {
  items: Partial<IPodcastDetail>[];
}

/**
 * The `EpisodesTable` component is a table that displays podcast episodes with their titles, release
 * dates, and durations.
 * @param {IProps} items - an array of objects representing podcast episodes.
 * @returns The EpisodesTable component is returning a JSX element.
 */
const EpisodesTable: FC<IProps> = ({ items }: IProps) => {
  const episodes = items.filter(
    (item) => item.wrapperType === 'podcastEpisode'
  );
  return (
    <>
      <Grid item xs={12} md={8}>
        <Card className='text-xl font-black shadow-sm shadow-gray-50 p-3 mb-5'>
          Episodes: {episodes.length}
        </Card>
        <TableContainer component={Paper}>
          <Table className='min-w-min' aria-label='episode table'>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align='center'>Date</TableCell>
                <TableCell align='center'>Duration</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {episodes.map((item, key) => {
                const {
                  collectionId,
                  trackId,
                  trackName,
                  releaseDate,
                  trackTimeMillis,
                } = item;
                const date = trackTimeMillis && new Date(trackTimeMillis);
                const duration =
                  date &&
                  `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
                return (
                  <TableRow
                    key={`${collectionId}-${trackId}-${key}`}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component='th' scope='row'>
                      <RouterLink
                        to={`/podcast/${collectionId}/episode/${trackId}`}>
                        <Box className='text-blue-600'>{trackName}</Box>
                      </RouterLink>
                    </TableCell>
                    <TableCell align='center'>
                      {releaseDate &&
                        format(Date.parse(releaseDate), 'MM/dd/yyyy')}
                    </TableCell>
                    <TableCell align='center'>{duration}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
};

export default EpisodesTable;
