import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import BlogIndex, { Head } from '../blog';
import {
    mockBlogHeadData,
    mockBlogPageData
} from '../../../__mocks__/mock-page-data';

describe('Blog Index Page', () => {
    it('renders and filters correctly', () => {
        const { asFragment, getByTestId, getAllByTestId } = render(
            <BlogIndex {...mockBlogPageData} />
        );
        expect(asFragment()).toMatchSnapshot();
        expect(getAllByTestId('post-card').length).toEqual(3);

        fireEvent.click(getByTestId('one'));
        expect(getAllByTestId('post-card').length).toEqual(2);
    });

    it('searches correctly', () => {
        const { asFragment, getByTestId, getAllByTestId } = render(
            <BlogIndex {...mockBlogPageData} />
        );
        expect(asFragment()).toMatchSnapshot();
        expect(getAllByTestId('post-card').length).toEqual(3);

        const input = getByTestId('searchPost') as HTMLInputElement;
        fireEvent.change(input, {target: {value: 'baking'}})
        expect(input.value).toBe('baking')
        
        fireEvent.click(getByTestId('searchPostSubmit'));
        waitFor(() => expect(getAllByTestId('post-card').length).toEqual(2));
        
    });

    it('header meta data renders correctly', () => {
        const { asFragment } = render(<Head {...mockBlogHeadData} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
