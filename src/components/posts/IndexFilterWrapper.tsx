import React, { SyntheticEvent, useEffect, useState } from 'react';
import { PageProps } from 'gatsby';
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
    location: any;
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
    allLetters,
    location
}: IndexFilterWrapperProps) => {
    const unfilteredPosts = index.nodes;
    const tags = allTags.group;
    const [searchQuery, setSearchQuery] = useState('');
    const tagFromQuery = location
        ? location.search.match(/(?<=\btag=)\w+/g)
        : null;
    const [tagFilter, setTagFilter] = useState(
        tagFromQuery ? tagFromQuery[0] : ''
    );
    const [allPosts, setAllPosts] = useState(unfilteredPosts);

    const handleFilterUpdate = (e: SyntheticEvent) => {
        if (searchQuery === '') {
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

    function filterOnTag(tagFilter: string, posts: any[]) {
        if (tagFilter === 'all' || tagFilter === '') {
            return posts;
        }
        return posts.filter((post) =>
            post.frontmatter.tags.includes(tagFilter)
        );
    }

    useEffect(() => {
        if (searchQuery === '') {
            const temp = filterOnTag(tagFilter, unfilteredPosts);
            setAllPosts(temp);
        }
    }, [tagFilter]);

    useEffect(() => {
        if (tagFilter === 'all' || tagFilter === '') {
            const filteredData = filterWithSearchQuery(
                unfilteredPosts,
                searchQuery
            );
            setAllPosts(filteredData);
        }
    }, [searchQuery]);

    return (
        <>
            <SearchFilterRow
                type={type}
                tags={tags}
                activeTag={tagFilter}
                totalPostCount={index.totalCount}
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
