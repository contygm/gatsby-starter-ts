import React, { FunctionComponent, useEffect, useState } from 'react';
import { SearchFilterRow, PostIndex, GlossaryIndex } from '../components';

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
const PostPage: FunctionComponent<PostPageProps> = ({
    index,
    allTags,
    type,
    allLetters
}: PostPageProps) => {
    const hasLocation = typeof location !== "undefined";
    const unfilteredPosts = index.nodes;
    const [allPosts, setAllPosts] = useState(index.nodes);

    const searchFromQuery = hasLocation ? location.search.match(/(?<=\bsearch=)\w+/g) : null;
    const [searchQuery, setSearchQuery] = useState(
        searchFromQuery ? searchFromQuery[0] : ''
    );

    const tags = allTags.group;
    const tagFromQuery = hasLocation ? location.search.match(/(?<=\btag=)\w+/g) : null;
    const [tagFilter, setTagFilter] = useState(
        tagFromQuery ? tagFromQuery[0] : 'all'
    );

    const handleFilterUpdate = (e: any) => {
        setTagFilter(e.target.id);
    };

    const clearSearchQuery = () => {
        setSearchQuery('');
        window.history.replaceState(null, '', `/${type}`);
    };

    const handleSubmitSearch = (e: any) => {
        e.preventDefault();
        const queryValue =
            e.target.searchPost && e.target.searchPost.value
                ? e.target.searchPost.value
                : '';

        setSearchQuery(queryValue);

        const queryStr =
            queryValue === '' ? `/${type}` : `?search=${queryValue}`;
        window.history.replaceState(null, '', queryStr);
    };

    useEffect(() => {
        if (tagFilter === 'all') {
            setAllPosts(unfilteredPosts);
        } else {
            const filtered = unfilteredPosts.filter((post) =>
                post.frontmatter.tags.includes(tagFilter)
            );
            setAllPosts(filtered);
        }
    }, [tagFilter]);

    // useEffect(() => {
    //     if (searchQuery === '') {
    //         setAllPosts(unfilteredPosts);
    //     } else {
    //         const posts = unfilteredPosts ?? []; // start w all posts

    //         const filteredData = posts.filter((post) => {
    //             const { description, title } = post.frontmatter;

    //             return (
    //                 // standardize data with .toLowerCase()
    //                 // return true if the description or title
    //                 description
    //                     .toLowerCase()
    //                     .includes(searchQuery.toLowerCase()) ||
    //                 title.toLowerCase().includes(searchQuery.toLowerCase())
    //             );
    //         });
    //         setAllPosts(filteredData);
    //     }
    // }, [searchQuery]);

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
