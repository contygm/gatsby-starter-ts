import React from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SideBarPostTile } from './SideBarPostTile';
import { getImage } from 'gatsby-plugin-image';

export interface SideBarProps {
    type: PostType;
    featured: Array<IndexElements>;
    related: Array<IndexElements>;
}

export const SideBar = ({ featured, related, type }: SideBarProps) => {
    const searchPlaceholder = type === 'glossary' ? 'A word...' : 'Title...';
    const firstSectionTitle =
        type === 'glossary' ? 'Featured Blog Posts' : 'Related posts';
    const firstSectionSlugPrefix = type === 'glossary' ? '/blog' : `/${type}`;
    const secondSectionTitle =
        type === 'glossary' ? 'Featured Wiki Posts' : 'Featured posts';
    const secondSectionSlugPrefix = type === 'glossary' ? '/wiki' : `/${type}`;

    return (
        <aside className="menu sidebar">
            <div className="box">
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
            </div>
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
