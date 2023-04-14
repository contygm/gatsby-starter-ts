import { Link } from 'gatsby';
import React, { SyntheticEvent } from 'react';

/**
 * Post information to be display or used in the post card
 * @property {IndexElements} post - post frontmatter and other index elements
 * @property {PostType} type - the type of post
 * @property {void} handleFilterUpdate - a function for when the a user interacts with the filter; `(e: any) => void`
 *
 * @see IndexElements
 * @see PostType
 * @see PostIndex
 * @category Components
 * @memberof PostCard
 */
interface PostCardProps {
    post: IndexElements;
    type: PostType;
    handleFilterUpdate: (e: SyntheticEvent) => void;
}

/**
 * A card component used to display minimal post information on the PostIndex
 * @param {PostCardProps} props - post information 
 * 
 * @class
 * @category Components
 */
export const PostCard = (props: PostCardProps) => {
    return (
        <div className="card">
            <div className="card-image">
                <Link
                    to={`?tag=${props.post.frontmatter.tags[0]}`}
                    className="post-card-main-tag"
                >
                    {props.post.frontmatter.tags[0]}
                </Link>
                <figure className="post-card-image">
                    <img
                        src="https://bulma.io/images/placeholders/1280x960.png"
                        alt="Placeholder image"
                    />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title-four">
                            {props.post.frontmatter.title}
                        </p>
                        <p className="subtitle-six">
                            <time dateTime={props.post.frontmatter.date}>
                                {props.post.frontmatter.date}
                            </time>
                        </p>
                    </div>
                </div>
                <div className="content">
                    <p>{props.post.frontmatter.description}</p>
                    <Link to={`/${props.type}${props.post.fields.slug}`}>
                        Read more...
                    </Link>
                </div>
                <div className="card-footer">
                    <p className="post-card-tag-title">Tags:</p>

                    <div className="tags">
                        {props.post.frontmatter.tags
                            .slice(1)
                            .map((tag: string) => {
                                return (
                                    <Link
                                        to={`?tag=${tag}`}
                                        id={tag}
                                        className="post-card-tag"
                                        key={tag}
                                        onClick={props.handleFilterUpdate}
                                    >
                                        {tag}
                                    </Link>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};
