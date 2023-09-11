import { render, screen } from '@testing-library/react';
import PodcastCard from './index';
import { IEntry } from '../../types/podcast';

describe('PodcastCard', () => {
  const mockItem: Partial<IEntry> = {
    podcastTitle: 'Test Title',
    podcastArtist: 'Test Artist',
    podcastImage: 'https://test-image.com',
  };
  it('renders the title and artist', () => {
    render(<PodcastCard item={mockItem} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Author: Test Artist')).toBeInTheDocument();
  });

  it('renders the image', () => {
    render(<PodcastCard item={mockItem} />);
    expect(screen.getByAltText('Test Title')).toBeInTheDocument();
  });
});
