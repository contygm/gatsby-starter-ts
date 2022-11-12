import React from 'react';
import { render } from '@testing-library/react';
import BlogPost, { Head } from '../../templates/blog-post';
import { mockBlogPostHeadData, mockBlogPostPageData } from './mock-data';

describe('Blog Posts Page', () => {
    it('renders correctly', () => {
        const { asFragment } = render(<BlogPost {...mockBlogPostPageData} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('header meta data renders correctly', () => {
        const { asFragment } = render(<Head {...mockBlogPostHeadData} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
