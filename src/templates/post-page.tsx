import React, { FunctionComponent, useEffect, useState } from 'react';
import { SearchFilterRow, PostIndex, GlossaryIndex } from '../components';
import { filterWithSearchQuery } from '../utils/searchFunctions';

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
    const unfilteredPosts = index.nodes;
    const tags = allTags.group;
    const [allPosts, setAllPosts] = useState(index.nodes);
    const [searchQuery, setSearchQuery] = useState('');
    const [tagFilter, setTagFilter] = useState('');

    const handleFilterUpdate = (e: any) => {
        if(searchQuery === '') {
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
        setSearchQuery('')
        setTagFilter('')
    }

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
        const filteredData = filterWithSearchQuery(unfilteredPosts, searchQuery);
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
