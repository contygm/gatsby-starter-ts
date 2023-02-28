import React from 'react';
import { render } from '@testing-library/react';
import { SearchFilterRow } from '../SearchFilterRow';
import { mockBlogs } from '../../../__mocks__/mock-blog-page';

describe('SearchFilterRow', () => {
    it('renders correctly with a query', () => {
        const { asFragment } = render(<SearchFilterRow
			type={'blog'}
			tags={mockBlogs.allTags.group}
			activeTag={''}
			totalPostCount={mockBlogs.index.totalCount}
			clearSearchQuery={jest.fn()}
			handleFilterUpdate={jest.fn()}
			handleSubmitSearch={jest.fn()}
			searchQuery={'hello'}
		/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders correctly without a query', () => {
        const { asFragment } = render(<SearchFilterRow
			type={'blog'}
			tags={mockBlogs.allTags.group}
			activeTag={''}
			totalPostCount={mockBlogs.index.totalCount}
			clearSearchQuery={jest.fn()}
			handleFilterUpdate={jest.fn()}
			handleSubmitSearch={jest.fn()}
			searchQuery={''}
		/>);
        expect(asFragment()).toMatchSnapshot();
    });

	it('renders correctly with an active tag', () => {
        const { asFragment } = render(<SearchFilterRow
			type={'blog'}
			tags={mockBlogs.allTags.group}
			activeTag={'one'}
			totalPostCount={mockBlogs.index.totalCount}
			clearSearchQuery={jest.fn()}
			handleFilterUpdate={jest.fn()}
			handleSubmitSearch={jest.fn()}
			searchQuery={''}
		/>);
        expect(asFragment()).toMatchSnapshot();
    });
});
