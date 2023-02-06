import React from 'react';
import { render } from '@testing-library/react';
import { SideBarPostTile, PostTileProps } from '../SideBarPostTile';
import { IGatsbyImageData } from 'gatsby-plugin-image';

const mockData: PostTileProps = {
    title: 'A Blog Title',
    excerpt: 'Cheesecake lemon drops cheesecake lemon drops pastry danish…',
    slug: '/blog-url/',
    image: {} as IGatsbyImageData
};

describe('SideBarPostTile', () => {
    it('renders correctly', () => {
        const { asFragment } = render(<SideBarPostTile {...mockData} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
