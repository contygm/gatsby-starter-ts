import React, { FunctionComponent, useEffect, useState } from 'react';
import {

    SearchFilterRow,
    PostIndex
} from '../components';

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
}

const INCREMENT = 6;

const PostPage: FunctionComponent<PostPageProps> = ({ index, allTags }: PostPageProps) => {
    
    const tags = allTags.group;
    const tagFromQuery = location.search.match(/(?<=\btag=)\w+/g);
    const unfilteredPosts = index.nodes;
    const [allPosts, setAllPosts] = useState(index.nodes);
    const [tagFilter, setTagFilter] = useState(
        tagFromQuery ? tagFromQuery[0] : 'all'
    );

    const handleFilterUpdate = (e: any) => {
        setTagFilter(e.target.id);
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

    return (
        <>
            <SearchFilterRow
                tags={tags}
                activeTag={tagFilter}
                totalPostCount={index.totalCount}
                handleFilterUpdate={handleFilterUpdate}
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
