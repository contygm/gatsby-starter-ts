import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { NextAndPrevious } from '../common/NextAndPrevious';

/**
 * All the properties needed for the Author section at the end of a post
 * @property {Object} author - An object containing the author name and description
 * @property {string} author.name - the name of the author
 * @property {string} author.description - the description of the author
 * @property {string[]} postTags - A list of all the tags for the post
 * @property {string} postDate - the post's date
 * @property {NeighborPost} [previousPost] - the post published immediately *before* this post (sorted by postDate)
 * @property {NeighborPost} [nextPost] - the post published immediately *after* this post (sorted by postDate)
 *
 * @category Components
 * @memberof AuthorBlurb
 */
export interface AuthorBlurbProps {
    author: {
        name: string;
        description: string;
    };
    postTags: string[];
    postDate: string;
    previousPost?: NeighborPost;
    nextPost?: NeighborPost;
}

/**
 * The author media sub-component uses a placeholder author image and displays the author name + description next to the image.
 * @param {AuthorBlurbProps.author} - the author's name and description
 *
 * @memberof AuthorBlurb
 */
const AuthorMedia = ({ name, description }: AuthorBlurbProps['author']) => {
    return (
        <div className="author-media-wrapper">
            <figure className="author-media-figure">
                <StaticImage
                    src="../../images/icon.png"
                    alt="author image"
                    placeholder="blurred"
                    className="author-media-image"
                />
            </figure>
            <div className="author-media-content">
                <div className="content">
                    <p>
                        <strong>{name}</strong>
                        <br />
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

/**
 * A row with the post's publish date and all the tags. This is the first row in the author blurb component
 * @param { AuthorBlurbProps.postTags } postTags - all post tags
 * @param { AuthorBlurbProps.postDate } postDate - the post's publication date
 *
 * @memberof AuthorBlurb
 */
const DateAndTags = (props: { postTags: string[]; postDate: string }) => {
    return (
        <div className="author-dates-tags-wrapper">
            <div className="level-left">
                <div className="level-item">
                    <p>
                        Published: <time>{props.postDate}</time>
                    </p>
                </div>
            </div>
            <div className="level-right">
                <div className="level-item">
                    {props.postTags.map((tag) => {
                        return (
                            <Link
                                to={`/blog?tag=${tag}`}
                                className="post-tag"
                                key={tag}
                            >
                                {tag}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

/**
 * A component to display author info and some post info at the bottom of the post. The post's tags and publish date
 * are displayed on the first row. Then the author image + description are on the second row. The last row contains
 * links to the next and previous post (sorted by date).
 * @param {AuthorBlurbProps} props - includes the author info as well as post tags + date. Also includes next and previous post
 *
 * @see AuthorBlurbProps
 * @category Components
 * @class
 */
export const AuthorBlurb = (props: AuthorBlurbProps) => {
    return (
        <section className="section">
            <div className="author-container">
                <DateAndTags
                    postTags={props.postTags}
                    postDate={props.postDate}
                />
                <AuthorMedia
                    name={props.author.name}
                    description={props.author.description}
                />
                <NextAndPrevious
                    next={props.nextPost}
                    previous={props.previousPost}
                    type={'blog'}
                />
            </div>
        </section>
    );
};
