import React, { useEffect, useState } from 'react';
import { PostCard } from './PostCard';

/**
 * All props needed for the PostIndex component.
 * @property {IndexElements[]} allPosts - a list of allPosts available. This included front matter and other index elements
 * @property {number} increment - when the user clicks the 'see more posts' button, this is how many more posts should show
 * @property {PostType} type - the type of post
 * @property {void} handleFilterUpdate - a void function for when the a user interacts with the filter; `(e: any) => void`
 *
 * @see IndexElements
 * @see PostType
 * @see PostIndex
 * @category Components
 */
interface PostIndexProps {
    allPosts: IndexElements[];
    increment: number;
    type: PostType;
    handleFilterUpdate: (e: any) => void;
}

/**
 * A post index component that displays basic post info in PostCards. The component can also filter available posts based on tags.
 * Additionally, a 'see more button' that will display more posts. The initial amount of posts displayed as well as additional amount
 * of posts displayed with the button are both based on the increment passed in.
 * @param {PostIndexProps} props - includes allPosts, increment, type, handleFilterUpdate
 *
 * @category Components
 * @see PostIndexProps
 * @see PostCard
 */
export const PostIndex = ({
    allPosts,
    increment,
    type,
    handleFilterUpdate
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
        setDisplayPosts([...allPosts.slice(0, increment)]);
    }, [allPosts]);

    useEffect(() => {
        const stillHasMore = displayPosts.length < allPosts.length;
        setHasMore(stillHasMore);
    }, [displayPosts]);

    return (
        <article className="section">
            <section className="container is-max-desktop">
                {/* post cards */}
                <div className="columns is-multiline is-centered">
                    {displayPosts.length > 0 ? (
                        displayPosts.map((post: IndexElements) => {
                            return (
                                <div
                                    data-testid={'post-card'}
                                    className="column is-4"
                                    key={post.frontmatter.title}
                                >
                                    <PostCard
                                        type={type}
                                        post={post}
                                        handleFilterUpdate={handleFilterUpdate}
                                    />
                                </div>
                            );
                        })
                    ) : (
                        <h2 className="title is-size-3">No results</h2>
                    )}
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
