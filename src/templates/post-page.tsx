import React, { FunctionComponent, useEffect, useState } from 'react';
import { SearchFilterRow, PostIndex } from '../components';

export interface PostPageProps {
    allTags: {
        group: Array<{
            fieldValue: string;
            totalCount: number;
        }>;
    };
    index: {
        nodes: Array<IndexElements>;
        totalCount: number;
    };
    type: 'blog' | 'wiki';
}

const INCREMENT = 6;

const PostPage: FunctionComponent<PostPageProps> = ({
    index,
    allTags,
    type
}: PostPageProps) => {
    const unfilteredPosts = index.nodes;
    const [allPosts, setAllPosts] = useState(index.nodes);

    const searchFromQuery = location.search.match(/(?<=\bsearch=)\w+/g);
    const [searchQuery, setSearchQuery] = useState(
        searchFromQuery ? searchFromQuery[0] : ''
    );

    const tags = allTags.group;
    const tagFromQuery = location.search.match(/(?<=\btag=)\w+/g);
    const [tagFilter, setTagFilter] = useState(
        tagFromQuery ? tagFromQuery[0] : 'all'
    );

    const handleFilterUpdate = (e: any) => {
        setTagFilter(e.target.id);
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

    useEffect(() => {
        if (searchQuery === '') {
            setAllPosts(unfilteredPosts);
        } else {
            const posts = unfilteredPosts ?? []; // start w all posts

            const filteredData = posts.filter((post) => {
                const { description, title } = post.frontmatter;

                return (
                    // standardize data with .toLowerCase()
                    // return true if the description or title
                    description
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    title.toLowerCase().includes(searchQuery.toLowerCase())
                );
            });
            setAllPosts(filteredData);
        }
    }, [searchQuery]);

    return (
        <>
            <SearchFilterRow
                tags={tags}
                activeTag={tagFilter}
                totalPostCount={index.totalCount}
                handleFilterUpdate={handleFilterUpdate}
                handleSubmitSearch={handleSubmitSearch}
            />
            <PostIndex
                allPosts={allPosts}
                increment={INCREMENT}
                handleFilterUpdate={handleFilterUpdate}
            />
        </>
    );
};

export default PostPage;
