import { mockBlogs } from '../../../__mocks__/mock-blog-page';
import { mockGlossary } from '../../../__mocks__/mock-glossary-page';
import { filterWithSearchQuery } from '../helpers/searchFunctions';

describe('Search Functions', () => {
    it('filterWithSearchQuery works with GlossaryElements', () => {
        const unfilteredGlossaryPosts = mockGlossary.index.nodes;
        let filteredPosts = filterWithSearchQuery(
            unfilteredGlossaryPosts,
            'window'
        );
        expect(filteredPosts.length).toEqual(1);

        filteredPosts = filterWithSearchQuery(unfilteredGlossaryPosts, 'lemon');
        expect(filteredPosts.length).toEqual(5);
    });

    it('filterWithSearchQuery works with IndexElements', () => {
        const unfilteredIndexPosts = mockBlogs.index.nodes;
        let filteredPosts = filterWithSearchQuery(
            unfilteredIndexPosts,
            'lemon'
        );
        expect(filteredPosts.length).toEqual(2);

        filteredPosts = filterWithSearchQuery(unfilteredIndexPosts, '');
        expect(filteredPosts.length).toEqual(3);
    });

    it('filterWithSearchQuery works with empty array', () => {
        const unfilteredIndexPosts: IndexElements[] = [];
        const filteredPosts = filterWithSearchQuery(
            unfilteredIndexPosts,
            'hello'
        );
        expect(filteredPosts).toEqual([]);
    });
});
