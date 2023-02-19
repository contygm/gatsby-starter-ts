import { Link } from 'gatsby';
import React from 'react';

export const DefinitionCard = (props: {
    definition: GlossaryElements;
    includeAll: boolean;
    // handleFilterUpdate: (e: any) => void;
}) => {
    return (
        <div className="card mb-5">
            <div className="card-content">
                {/* title section: word, phonetics and syllables */}
                <div className="media">
                    <div className="media-content">
                        <div className="level">
                            <div className="level-left">
                                <div className="level-item">
                                    <h3
                                        className="title is-3"
                                        id={props.definition.frontmatter.title.toLowerCase()}
                                    >
                                        {props.definition.frontmatter.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="level-right">
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading">Syllables</p>
                                        <p className="subheading">
                                            {
                                                props.definition.frontmatter
                                                    .syllables
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading">Phonetics</p>
                                        <p className="subheading">
                                            {
                                                props.definition.frontmatter
                                                    .phonetics
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* definition html */}
                <div className="content">
                    <div
                        className="container"
                        dangerouslySetInnerHTML={{
                            __html: props.definition.html
                        }}
                    />
                </div>

                {/* similar words and related posts */}
                {
                    props.includeAll && <div className="content">
                        <div className="level ">
                            <div className="level-item is-justify-content-left">
                                <div>
                                    <h4>Similar Words:</h4>
                                    <ol>
                                        {props.definition.frontmatter.similarWords.map(
                                            (word: string) => {
                                                return (
                                                    <li key={word}>
                                                        <Link
                                                            to={`#${word}`}
                                                            className=""
                                                        >
                                                            {word}
                                                        </Link>
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ol>
                                </div>
                            </div>
                            <div className="level-item is-justify-content-left">
                            {props.definition.frontmatter.relatedPosts && <div>
                                    <h4>RelatedPosts:</h4>
                                    <ol>
                                        {props.definition.frontmatter.relatedPosts.map(
                                            (post: {title: string, slug: string}) => {
                                                return (
                                                    <li key={post.slug}>
                                                        <Link
                                                            to={`${post.slug}`}
                                                            className=""
                                                        >
                                                            {post.title}
                                                        </Link>
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ol>
                                </div>}
                            </div>
                        </div>
                    </div>
                }
            </div>
            {/* tag footer */} 
            {
                props.includeAll && <div className="card-footer">
                    <p className="my-2 ml-5 mr-2">Tags:</p>

                    <div className="tags">
                        {props.definition.frontmatter.tags.map((tag: string) => {
                            return (
                                <Link
                                    to={`?tag=${tag}`}
                                    id={tag}
                                    className="tag is-success is-light"
                                    key={tag}
                                    // onClick={props.handleFilterUpdate}
                                >
                                    {tag}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            }
            
        </div>
    );
};
