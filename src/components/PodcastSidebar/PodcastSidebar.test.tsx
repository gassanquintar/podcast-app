import { render, screen } from '@testing-library/react';
import SidebarPodcast from './index';
import { IPodcastDetail } from '../../types/podcast';

describe('SidebarPodcast', () => {
  const mockItem: Partial<IPodcastDetail>[] = [
    {
      wrapperType: 'track',
      artworkUrl100: 'https://example.com/image.jpg',
      collectionName: 'Test Collection',
      artistName: 'Test Artist',
      description: 'Test Description',
    },
  ];

  it('renders the podcast artwork', () => {
    render(<SidebarPodcast track={mockItem} />);
    const artwork = screen.getByAltText('Test Collection');
    expect(artwork).toBeInTheDocument();
    expect(artwork).toHaveAttribute('src', mockItem[0]?.artworkUrl100);
  });

  it('renders the podcast collection name and artist name', () => {
    render(<SidebarPodcast track={mockItem} />);
    const artistName = screen.getByText('By Test Artist');
    expect(artistName).toBeInTheDocument();
  });
});
