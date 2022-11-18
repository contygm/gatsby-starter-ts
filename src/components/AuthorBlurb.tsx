import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import FaIconLink from '../components/FaIconLink';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export interface AuthorBlurbProps {
    author: {
        name: string;
        description: string;
    };
    postTags: Array<string>;
    postDate: string;
    previousPost: NeighborPost;
    nextPost: NeighborPost;
}

const AuthorMedia = ({ name, description }: AuthorBlurbProps['author']) => {
    return (
        <div className="media p-2 m-2">
            <figure className="media-left ml-0 mb-0">
                <StaticImage
                    src="../images/icon.png"
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

const DateAndTags = (props: { tags: Array<string>; date: string }) => {
    return (
        <div className="level mb-2">
            <div className="level-left">
                <div className="level-item">
                    <p>
                        Published: <time>{props.date}</time>
                    </p>
                </div>
            </div>
            <div className="level-right">
                <div className="level-item">
                    {props.tags.map((tag) => {
                        return (
                            <a
                                href="/404"
                                className="post-tag"
                                key={tag}
                            >
                                {tag}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const NextAndPrevious = (props: {
    next: NeighborPost;
    previous: NeighborPost;
}) => {
    return (
        <div className="level my-3">
            <div className="level-left">
                <div className="level-item">
                    {props.previous && (
                        <FaIconLink
                            faIcon={faArrowLeft}
                            url={`/blog${props.previous.fields.slug}`}
                            label={props.previous.frontmatter.title}
                            labelLeft={false}
                        />
                    )}
                </div>
            </div>
            <div className="level-right">
                <div className="level-item">
                    {props.next && (
                        <FaIconLink
                            faIcon={faArrowRight}
                            url={`/blog${props.next.fields.slug}`}
                            label={props.next.frontmatter.title}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

const AuthorBlurb = (props: AuthorBlurbProps) => {
    return (
        <section className="section">
            <div className="container author-container">
                <DateAndTags
                    tags={props.postTags}
                    date={props.postDate}
                />
                <AuthorMedia
                    name={props.author.name}
                    description={props.author.description}
                />
                <NextAndPrevious
                    next={props.nextPost}
                    previous={props.previousPost}
                />
            </div>
        </section>
    );
};

export default AuthorBlurb;
