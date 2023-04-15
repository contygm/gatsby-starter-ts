import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BlogWikiIndex } from '../BlogWikiIndex';
import { mockBlogPageData } from '../../../../__mocks__/mock-blog-page';

describe('BlogWikiIndex', () => {
    it('default renders and load btn works correctly', () => {
        const { asFragment, getByText, getAllByTestId } = render(
            <BlogWikiIndex
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
    });
});
