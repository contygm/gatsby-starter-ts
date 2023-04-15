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
 * A subcomponent for word (as title), syllable breakdown, and phonetic breakdown
 * @param {string} title - word being defined
 * @param {string} syllables - syllable breakdown of the word
 * @param {string} phonetics - phonetic breakdown of the word
 *
 * @memberof DefinitionCard
 */
const TitleRow = (props : {
    title: string;
    syllables: string;
    phonetics: string;
}) => {
    return (
        <div className="level">
            <div className="level-left">
                <div className="level-item">
                    <h3
                        className="title-three"
                        id={props.title.toLowerCase()}
                    >
                        {props.title}
                    </h3>
                </div>
            </div>

            <div className="level-right">
                <div className="centered-level">
                    <div>
                        <p className="heading">Syllables</p>
                        <p className="subheading">
                            {props.syllables}
                        </p>
                    </div>
                </div>
                <div className="centered-level">
                    <div>
                        <p className="heading">Phonetics</p>
                        <p className="subheading">
                            {props.phonetics}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

/**
 * A subcomponent for similar words and related posts
 * @param {string[]} similarWords - tags for the definition
 * @param {Object[]} relatedPosts - related post info
 * @param {string} relatedPosts.title - post title
 * @param {string} relatedPosts.slug - post slug
 *
 * @memberof DefinitionCard
 */
const SimilarWordsRelatedPosts = (props: { 
    similarWords: string[], 
    relatedPosts: {
        title: string;
        slug: string;
    }[]
}) => {
    return (
        <div className="content">
            <div className="level">
                <div className="justified-left-level">
                    <div>
                        <h4>Similar Words:</h4>
                        <ol>
                            {props.similarWords.map(
                                (word: string) => {
                                    return (
                                        <li key={word}>
                                            <Link
                                                to={`#${word}`}
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
                <div className="justified-left-level">
                    {props.relatedPosts && (
                        <div>
                            <h4>RelatedPosts:</h4>
                            <ol>
                                {props.relatedPosts.map(
                                    (post: {
                                        title: string;
                                        slug: string;
                                    }) => {
                                        return (
                                            <li key={post.slug}>
                                                <Link
                                                    to={`${post.slug}`}
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
    )
}

/**
 * A subcomponent for tags
 * @param {string[]} tags - tags for the definition
 *
 * @memberof DefinitionCard
 */
const Tags = (props: {tags: string[]}) => {
    return (
        <div className="card-footer">
            <p className="definition-card-tag-title">Tags:</p>

            <div className="tags">
                {props.tags.map(
                    (tag: string) => {
                        return (
                            <Link
                                to={`?tag=${tag}`}
                                id={tag}
                                className="definition-card-tag"
                                key={tag}
                            >
                                {tag}
                            </Link>
                        );
                    }
                )}
            </div>
        </div>
    )
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
export const DefinitionCard = (props: DefinitionCardProps) => {
    return (
        <div className="card mb-5">
            <div className="card-content">
                {/* title section: word, phonetics and syllables */}
                <div className="media">
                    <div className="media-content">
                        <TitleRow
                            title={props.definition.frontmatter.title}
                            syllables={props.definition.frontmatter.syllables}
                            phonetics={props.definition.frontmatter.phonetics}
                        />
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
                    <>
                        <SimilarWordsRelatedPosts 
                            similarWords={props.definition.frontmatter.similarWords}
                            relatedPosts={props.definition.frontmatter.relatedPosts}
                        />
                        <Tags tags={props.definition.frontmatter.tags} />
                    </>
                     
                )}
            </div>
        </div>
    );
};
