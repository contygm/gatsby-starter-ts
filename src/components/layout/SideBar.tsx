import React from 'react';
import { SideBarPostTile } from './SideBarPostTile';
import { getImage } from 'gatsby-plugin-image';

/**
 * Vertical sidebar for post templates
 * @property {PostType} type - the page title to be displayed
 * @property {IndexElements[]} featured - post(s) to be used in the featured section
 * @property {IndexElements[]} related - post(s) to be used in the related section
 *
 * @see Sidebar
 * @category Components
 */
export interface SideBarProps {
    type: PostType;
    featured: IndexElements[];
    related: IndexElements[];
}

/**
 * A vertical sidebar component with optional featured and related posts. Related posts sit
 * on top of the featured posts.
 * @category Components
 *
 * @param {SideBarProps} - props including featured posts, related posts, and type of post
 *
 * @see SideBarProps
 */
export const SideBar = ({ featured, related, type }: SideBarProps) => {
    // TODO: working search requires queries, tabling for now
    // const searchPlaceholder = type === 'glossary' ? 'A word...' : 'Title...';
    const firstSectionTitle =
        type === 'glossary' ? 'Featured Blog Posts' : `Related ${type}s`;
    const firstSectionSlugPrefix = type === 'glossary' ? '/blog' : `/${type}`;
    const secondSectionTitle =
        type === 'glossary' ? 'Featured Wiki Posts' : `Featured ${type}s`;
    const secondSectionSlugPrefix = type === 'glossary' ? '/wiki' : `/${type}`;

    return (
        <aside className="menu sidebar">
            {/* <div className="box">
                <p className="menu-label">{`Search the ${type}`}</p>
                <p className="menu-list control has-icons-left">
                    <span className="icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                    <input
                        className="input is-rounded"
                        type="text"
                        placeholder={searchPlaceholder}
                        aria-label="blog-search"
                    />
                </p>
            </div> */}
            {related && related.length > 0 && (
                <div className="box">
                    <p className="menu-label">{firstSectionTitle}</p>
                    <ul className="menu-list">
                        {related.length > 0 &&
                            related.map((post) => {
                                const image = getImage(
                                    post.frontmatter.headerImage
                                );

                                return (
                                    <li key={post.frontmatter.title}>
                                        <SideBarPostTile
                                            title={post.frontmatter.title}
                                            excerpt={post.excerpt}
                                            slug={`${firstSectionSlugPrefix}${post.fields.slug}`}
                                            image={image}
                                        />
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            )}
            <div className="box">
                <p className="menu-label">{secondSectionTitle}</p>
                <ul className="menu-list">
                    {featured.map((post) => {
                        const image = getImage(post.frontmatter.headerImage);
                        return (
                            <li key={post.frontmatter.title}>
                                <SideBarPostTile
                                    title={post.frontmatter.title}
                                    slug={`${secondSectionSlugPrefix}${post.fields.slug}`}
                                    excerpt={post.excerpt}
                                    image={image}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
};
