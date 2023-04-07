import { Link } from 'gatsby';
import React from 'react';

// TODO interface
/**
 * A card component used to display minimal post information on the PostIndex
 * @category Components
 *
 * @param {IndexElements} post - post frontmatter and other index elements
 * @param {PostType} type - the type of post
 * @param {void} handleFilterUpdate - a function for when the a user interacts with the filter; `(e: any) => void`
 *
 * @see IndexElements
 * @see PostType
 * @see PostIndex
 * @category Components
 */
export const PostCard = (props: {
    post: IndexElements;
    type: PostType;
    handleFilterUpdate: (e: any) => void;
}) => {
    return (
        <div className="card">
            <div className="card-image">
                <Link
                    to={`?tag=${props.post.frontmatter.tags[0]}`}
                    className="tag is-primary sticky-tag"
                >
                    {props.post.frontmatter.tags[0]}
                </Link>
                <figure className="image is-4by3 blog-card-image">
                    <img
                        src="https://bulma.io/images/placeholders/1280x960.png"
                        alt="Placeholder image"
                    />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">
                            {props.post.frontmatter.title}
                        </p>
                        <p className="subtitle is-6">
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
                    <p className="mt-2 ml-2 mr-2">Tags:</p>

                    <div className="tags">
                        {props.post.frontmatter.tags
                            .slice(1)
                            .map((tag: string) => {
                                return (
                                    <Link
                                        to={`?tag=${tag}`}
                                        id={tag}
                                        className="tag mt-2"
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
