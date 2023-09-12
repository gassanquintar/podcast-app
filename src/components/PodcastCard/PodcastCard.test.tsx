import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PodcastCard from './index';
import { IEntry } from '../../types/podcast';

const mockItem: Partial<IEntry> = {
  postcastId: '1',
  podcastTitle: 'Test Podcast',
  podcastArtist: 'Test Artist',
  podcastImage: 'https://test.com/image.png',
};

describe('PodcastCard', () => {
  it('renders podcast title and artist', () => {
    render(
      <BrowserRouter>
        <PodcastCard item={mockItem} />
      </BrowserRouter>
    );

    const title = screen.getByText('Test Podcast');
    const artist = screen.getByText('Author: Test Artist');

    expect(title).toBeInTheDocument();
    expect(artist).toBeInTheDocument();
  });

  it('renders podcast image', () => {
    render(
      <BrowserRouter>
        <PodcastCard item={mockItem} />
      </BrowserRouter>
    );

    const image = screen.getByAltText('Test Podcast');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://test.com/image.png');
  });

  it('renders link to podcast page', () => {
    render(
      <BrowserRouter>
        <PodcastCard item={mockItem} />
      </BrowserRouter>
    );

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/podcast/1');
  });
});
