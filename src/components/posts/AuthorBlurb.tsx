import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { NextAndPrevious } from '../common/NextAndPrevious';

/**
 * All the properties needed for the Author section at the end of a post
 * @interface AuthorBlurbProps
 *
 * @property {Object} author - An object containing the author name and description
 * @property {string} author.name - the name of the author
 * @property {string} author.description - the description of the author
 * @property {string[]} postTags - A list of all the tags for the post
 * @property {string} postDate - the post's date
 * @property {NeighborPost} [previousPost] - the post published immediately *before* this post (sorted by postDate)
 * @property {NeighborPost} [nextPost] - the post published immediately *after* this post (sorted by postDate)
 *
 * @see AuthorBlurb
 */
// TODO group objects for easy typing on sub components
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
 * @memberof AuthorBlurb
 *
 * @param {AuthorBlurbProps.author} - the author's name and description
 */
const AuthorMedia = ({ name, description }: AuthorBlurbProps['author']) => {
    return (
        <div className="media p-2 m-2">
            <figure className="media-left ml-0 mb-0">
                <StaticImage
                    src="../../images/icon.png"
                    alt="author image"
                    placeholder="blurred"
                    className="image is-96x96"
                />
            </figure>
            <div className="media-content m-auto">
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
 * @memberof AuthorBlurb
 * @param { AuthorBlurbProps.postTags } postTags - all post tags
 * @param { AuthorBlurbProps.postDate } postDate - the post's publication date
 */
const DateAndTags = ({
    postTags,
    postDate
}: {
    postTags: string[];
    postDate: string;
}) => {
    return (
        <div className="level mb-2">
            <div className="level-left">
                <div className="level-item">
                    <p>
                        Published: <time>{postDate}</time>
                    </p>
                </div>
            </div>
            <div className="level-right">
                <div className="level-item">
                    {postTags.map((tag) => {
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
 * @category Components
 * @param {AuthorBlurbProps} props - includes the author info as well as post tags + date. Also includes next and previous post
 *
 * @see AuthorBlurbProps
 */
export const AuthorBlurb = (props: AuthorBlurbProps) => {
    return (
        <section className="section">
            <div className="container author-container">
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
