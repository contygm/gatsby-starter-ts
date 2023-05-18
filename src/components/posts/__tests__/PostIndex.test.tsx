import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { PostIndex } from '../PostIndex';
import { mockBlogPageData } from '../../../../__mocks__/mock-blog-page';

describe('PostIndex', () => {
    it('default renders and load btn works correctly', () => {
        const { asFragment, getByText, getAllByTestId, queryByText } = render(
            <PostIndex
                allPosts={mockBlogPageData.data.index.nodes}
                increment={2}
                type={'blog'}
                handleFilterUpdate={() => {
                    return;
                }}
            />
        );
        expect(asFragment()).toMatchSnapshot();
        expect(getAllByTestId('post-card').length).toEqual(2);

        // load more btn should load more
        fireEvent.click(getByText('Load more...'));
        expect(getAllByTestId('post-card').length).toEqual(3);

        // load btn should no longer appear
        expect(queryByText('Load more...')).toBeNull();
    });

    it('no posts', () => {
        const { queryByText } = render(
            <PostIndex
                allPosts={[]}
                increment={1}
                type={'blog'}
                handleFilterUpdate={() => {
                    return;
                }}
            />
        );
        // no post cards
        expect(queryByText('No results')).toBeDefined();
        // no load btn
        expect(queryByText('Load more...')).toBeNull();
    });
});
