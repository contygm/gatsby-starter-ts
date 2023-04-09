import { Link } from 'gatsby';
import React from 'react';
/**
 * Props for the DefinitionCard component
 * @property {GlossaryElements} definition - The definition includes frontmatter and content.
 * Frontmatter contains: similar words, related posts, tags, title, etc.
 * @property {boolean} includeAll - A setting to indicate which of the 2 card forms to use. When set to  true, the all definition elements will be displayed. Otherwise, the following elements will not be displayed: similar words, related posts, and tag footer.
 *
 * @see GlossaryElements
 * @see DefinitionCard
 * @category Components
 */
interface DefinitionCardProps {
    definition: GlossaryElements;
    includeAll: boolean;
}

/**
 * A component for Glossary definitions. By default, this card will always include:
 * - definition content (html form)
 * - syllables
 * - phonetics
 *
 * This card has two forms: include all elements or not.
 * - **Include all elements**: This form includes similar words, related posts, and tags within the Definition card.
 * - **not**: This form includes a "read more" link to word on glossary index page. It does not include any of the elements from the above form.
 * @param {DefinitionCardProps} props - definition content, frontmatter, and includeAll setting
 *
 * @see DefinitionCardProps
 * @category Components
 */

// TODO break up into local components
// TODO name forms better
export const DefinitionCard = (props: DefinitionCardProps) => {
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
                                            {props.definition.frontmatter.syllables}
                                        </p>
                                    </div>
                                </div>
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading">Phonetics</p>
                                        <p className="subheading">
                                            {props.definition.frontmatter.phonetics}
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
                            __html:props.definition.html
                        }}
                    />
                    {!props.includeAll && (
                        <div className="has-text-centered">
                            <Link
                                to={`/glossary#${props.definition.frontmatter.title}`}
                            >
                                Read more...
                            </Link>
                        </div>
                    )}
                </div>

                {/* similar words and related posts */}
                {props.includeAll && (
                    <div className="content">
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
                                {props.definition.frontmatter.relatedPosts && (
                                    <div>
                                        <h4>RelatedPosts:</h4>
                                        <ol>
                                            {props.definition.frontmatter.relatedPosts.map(
                                                (post: {
                                                    title: string;
                                                    slug: string;
                                                }) => {
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
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* tag footer */}
            {props.includeAll && (
                <div className="card-footer">
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
            )}
        </div>
    );
};
