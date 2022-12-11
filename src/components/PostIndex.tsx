import React, { FunctionComponent, useEffect, useState } from 'react';
import PostCard from './PostCard';

interface PostIndexProps {
    allPosts: Array<IndexElements>;
    increment: number;
}

const PostIndex: FunctionComponent<PostIndexProps> = ({
    allPosts,
    increment
}: PostIndexProps) => {
    const [displayPosts, setDisplayPosts] = useState([
        ...allPosts.slice(0, increment)
    ]);
    const [loadMore, setLoadMore] = useState(false);
    const [hasMore, setHasMore] = useState(allPosts.length > increment);

    const handleLoadMore = () => {
        setLoadMore(true);
    };

    useEffect(() => {
        if (loadMore && hasMore) {
            const postCount = displayPosts.length;
            const stillHasMore = postCount < allPosts.length;
            const nextResults = stillHasMore
                ? allPosts.slice(postCount, postCount + increment)
                : [];
            // combine old displayPosts with next batch of posts
            setDisplayPosts([...displayPosts, ...nextResults]);
            setLoadMore(false);
        }
    }, [loadMore, hasMore]);

    useEffect(() => {
        const stillHasMore = displayPosts.length < allPosts.length;
        setHasMore(stillHasMore);
    }, [displayPosts]);

    return (
        <article className="section">
            <section className="container is-max-desktop">
                {/* post cards */}
                <div className="columns is-multiline is-centered">
                    {displayPosts.map((post: IndexElements) => {
                        return (
                            <div
                                className="column is-4"
                                key={post.frontmatter.title}
                            >
                                <PostCard post={post} />
                            </div>
                        );
                    })}
                </div>
                {hasMore && (
                    <div className="columns is-mobile is-centered">
                        <button
                            className="button is-dark"
                            onClick={handleLoadMore}
                        >
                            Load more...
                        </button>
                    </div>
                )}
            </section>
        </article>
    );
};

export default PostIndex;
