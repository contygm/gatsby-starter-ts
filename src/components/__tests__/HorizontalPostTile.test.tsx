import React from 'react';
import { render } from '@testing-library/react';
import HorizontalPostTile, { PostTileProps } from '../HorizontalPostTile';
import { IGatsbyImageData } from 'gatsby-plugin-image';

const mockData: PostTileProps = {
    title: 'A Blog Title',
    excerpt: 'Cheesecake lemon drops cheesecake lemon drops pastry danish…',
    slug: '/blog-url/',
    image: {} as IGatsbyImageData
};

describe('HorizontalPostTile', () => {
    it('renders correctly', () => {
        const { asFragment } = render(<HorizontalPostTile {...mockData} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
