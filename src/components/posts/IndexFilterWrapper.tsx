import React, { SyntheticEvent, useEffect, useState } from 'react';
import { SearchFilterRow, PostIndex, GlossaryIndex } from '..';
import { filterWithSearchQuery } from '../../utils/helpers/searchFunctions';

/**
 * All properties needed for post page, including: all tags used for post type, all posts for type,
 * post type, and all letters used (optional, for glossary)
 *
 * @property {{group: Array}} allTags - all tags used for post type
 * @property {Array<{fieldValue: string, totalCount: number}>} allTags.group - inner object array with tag value and count
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
 * @memberof IndexFilterWrapper
 * @category Components
 */
export interface IndexFilterWrapperProps {
    allTags: {
        group: {
            fieldValue: string;
            totalCount: number;
        }[];
    };
    index: {
        nodes: (GlossaryElements | IndexElements)[];
        totalCount: number;
    };
    type: PostType;
    allLetters?: {
        group: {
            fieldValue: string;
        }[];
    };
}

const INCREMENT = 6;

/**
 * A general index page component that works with all post types. Includes search, filter, and card based index.
 * @param {IndexFilterWrapperProps} props - all posts, all tags, type, and all letters (optional, for glossary)
 *
 * @category Components
 * @class
 */
const IndexFilterWrapper = ({
    index,
    allTags,
    type,
    allLetters
}: IndexFilterWrapperProps) => {
    const unfilteredPosts = index.nodes;
    const tags = allTags.group;
    const [allPosts, setAllPosts] = useState(index.nodes);
    const [searchQuery, setSearchQuery] = useState('');
    const [tagFilter, setTagFilter] = useState('');

    const handleFilterUpdate = (e: SyntheticEvent) => {
        if (searchQuery === '') {
            console.log(e.currentTarget.id);
            setTagFilter(e.currentTarget.id);
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
        const filteredData = filterWithSearchQuery(
            unfilteredPosts,
            searchQuery
        );
        setAllPosts(filteredData);
    }, [searchQuery]);

    return (
        <>
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
                    allPosts={allPosts as IndexElements[]}
                    increment={INCREMENT}
                    handleFilterUpdate={handleFilterUpdate}
                    type={type}
                />
            ) : (
                <GlossaryIndex
                    allDefinitions={allPosts as GlossaryElements[]}
                    allLetters={allLetters}
                />
            )}
        </>
    );
};

export default IndexFilterWrapper;
