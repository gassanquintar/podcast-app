import { Grid } from '@mui/material';
import { FC, Suspense, lazy } from 'react';
import { IEntry } from '../../types/podcast';
import PodcastCardSkeleton from '../PodcastCard/PodcastCardSkeleton';

type Props = {
  items: Partial<IEntry>[];
};

/* Uses the `lazy` function from React to dynamically import the `PodcastCard` component. */
const PodcastCard = lazy(() => import('../PodcastCard'));

/**
 * PodcastsList component renders the podcasts list.
 * @param {Props} items
 * @returns JSX.Element
 */
const PodcastsList: FC<Props> = ({ items }: Props) => {
  return (
    <>
      <Grid container className='gap-2 justify-start mt-2'>
        {items &&
          items.map((item: Partial<IEntry>, index: number) => (
            <Suspense key={index} fallback={<PodcastCardSkeleton />}>
              <PodcastCard key={index} item={item} />
            </Suspense>
          ))}
      </Grid>
    </>
  );
};

export default PodcastsList;
