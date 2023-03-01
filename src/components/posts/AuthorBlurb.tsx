import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { NextAndPrevious } from '../common/NextAndPrevious';

export interface AuthorBlurbProps {
    author: {
        name: string;
        description: string;
    };
    postTags: Array<string>;
    postDate: string;
    previousPost?: NeighborPost;
    nextPost?: NeighborPost;
}

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

export const AuthorBlurb = (props: AuthorBlurbProps) => {
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
                    type={'blog'}
                />
            </div>
        </section>
    );
};
