import React from 'react';
import { render } from '@testing-library/react';
import BlogIndex, { Head } from '../blog';
import { mockBlogHeadData, mockBlogPageData } from './mock-data';

describe('Blog Index Page', () => {
    it('renders correctly', () => {
        const { asFragment } = render(<BlogIndex {...mockBlogPageData} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('header meta data renders correctly', () => {
        const { asFragment } = render(<Head {...mockBlogHeadData} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
