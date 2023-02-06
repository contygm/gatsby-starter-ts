import React from 'react';
import { render } from '@testing-library/react';
import { SideBar, SideBarProps } from '../SideBar';
import { mockBlogPost } from '../../../__mocks__/mock-blog-post';

const mockData: SideBarProps = {
    featured: mockBlogPost.featured.nodes,
    related: mockBlogPost.related.nodes
};

describe('SideBar', () => {
    let testProps: SideBarProps;

    beforeEach(() => {
        testProps = mockData;
    });

    it('renders correctly', () => {
        const { asFragment } = render(<SideBar {...testProps} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders correctly without related posts', () => {
        testProps.related = [];
        const { asFragment } = render(<SideBar {...testProps} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
