import React, { FunctionComponent, useEffect, useState } from 'react';
import { SearchFilterRow, PostIndex, GlossaryIndex } from '../components';
import { filterWithSearchQuery } from '../utils/helpers/searchFunctions';

// TODO get rid of nesting if possible
// TODO types for tags + letters + index
/**
 * All properties needed for post page, including: all tags used for post type, all posts for type,
 * post type, and all letters used (optional, for glossary)
 *
 * @interface PostPageProps
 * @property {{group: Array}} allTags - all tags used for post type
 * @property {Array<{fieldValue: string, totalCount: number }>} allTags.group - inner object array with tag value and count
 * @property {Object} index - all posts of given type
 * @property {GlossaryElements[] | IndexElements[]} index.nodes - all posts of given type
 * @property {number} index.totalCount - all posts of given type
 * @property {PostType} type - post type: blog, wiki, glossary
 * @property {{group: Array}} [allLetters] - all letters used in glossary
 * @property {Array<{fieldValue: string}>} [allLetters.group] - inner object with letter value
 *
 * @see PostType
 * @see IndexElements
 * @see GlossaryElements
 * @memberof PostPage
 * @category Template
 */
export interface PostPageProps {
    allTags: {
        group: Array<{
            fieldValue: string;
            totalCount: number;
        }>;
    };
    index: {
        nodes: Array<GlossaryElements | IndexElements>;
        totalCount: number;
    };
    type: PostType;
    allLetters?: {
        group: Array<{
            fieldValue: string;
        }>;
    };
}

const INCREMENT = 6;

// TODO should be named index page or something
/**
 * A general index page component that works with all post types. Includes search, filter, and card based index.
 * @category Template
 * @class
 *
 * @param {PostPageProps} props - all posts, all tags, type, and all letters (optional, for glossary)
 */
const PostPage: FunctionComponent<PostPageProps> = ({
    index,
    allTags,
    type,
    allLetters
}: PostPageProps) => {
    const unfilteredPosts = index.nodes;
    const tags = allTags.group;
    const [allPosts, setAllPosts] = useState(index.nodes);
    const [searchQuery, setSearchQuery] = useState('');
    const [tagFilter, setTagFilter] = useState('');

    const handleFilterUpdate = (e: any) => {
        if (searchQuery === '') {
            setTagFilter(e.target.id);
        }
    };

    const handleSubmitSearch = (e: any) => {
        e.preventDefault();
        const queryValue =
            e.target.searchPost && e.target.searchPost.value
                ? e.target.searchPost.value
                : '';

        setSearchQuery(queryValue);
    };

    const clearSearchQuery = () => {
        setSearchQuery('');
        setTagFilter('');
    };

    useEffect(() => {
        // TODO move to hook
        if (tagFilter === '') {
            setAllPosts(unfilteredPosts);
        } else if (tagFilter === 'all') {
            setAllPosts(unfilteredPosts);
        } else {
            const filtered = unfilteredPosts.filter((post) =>
                post.frontmatter.tags.includes(tagFilter)
            );
            setAllPosts(filtered);
        }
    }, [tagFilter]);

    useEffect(() => {
        // TODO handle the if else in the new hook
        const filteredData = filterWithSearchQuery(
            unfilteredPosts,
            searchQuery
        );
        setAllPosts(filteredData);
    }, [searchQuery]);

    return (
        <>
            {/* TODO test on searchFilterRow to get all the btn states n such */}
            <SearchFilterRow
                type={type}
                tags={tags}
                activeTag={tagFilter}
                totalPostCount={index.totalCount}
                clearSearchQuery={clearSearchQuery}
                handleFilterUpdate={handleFilterUpdate}
                handleSubmitSearch={handleSubmitSearch}
                searchQuery={searchQuery}
            />
            {type !== 'glossary' ? (
                <PostIndex
                    allPosts={allPosts as Array<IndexElements>}
                    increment={INCREMENT}
                    handleFilterUpdate={handleFilterUpdate}
                    type={type}
                />
            ) : (
                <GlossaryIndex
                    allDefinitions={allPosts as Array<GlossaryElements>}
                    allLetters={allLetters}
                />
            )}
        </>
    );
};

export default PostPage;
