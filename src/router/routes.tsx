import { useRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import PodcastDetail from '../pages/PodcastDetail';
import EpisodeDetail from '../pages/EpisodeDetail';
import NoFound from '../pages/NoFound';

/**
 * The Routes component returns a set of routes for the application.
 * @returns The `Routes` component is returning the `routes` variable, which is the result of calling
 * the `useRoutes` hook with an array of route objects.
 */
const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/podcast/:podcastId',
      element: <PodcastDetail />,
    },
    {
      path: '/podcast/:podcastId/episode/:episodeId',
      element: <EpisodeDetail />,
    },
    {
      path: '*',
      element: <NoFound />,
    },
  ]);
  return routes;
};

export default Routes;
