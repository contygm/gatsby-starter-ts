import React from 'react';
import { render } from '@testing-library/react';
import WikiIndex, { Head } from '../wiki';
import { mockBlogHeadData, mockBlogPageData } from '../../../__mocks__/mock-page-data'

describe('Wiki Index Page', () => {
    it('renders correctly', () => {
        const { asFragment } = render(<WikiIndex {...mockBlogPageData} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('header meta data renders correctly', () => {
        const { asFragment } = render(<Head {...mockBlogHeadData} />);
        expect(asFragment()).toMatchSnapshot();
    });
});