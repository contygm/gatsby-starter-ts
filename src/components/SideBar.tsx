import * as React from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HorizontalPostTile from './HorizontalPostTile';
import { getImage } from 'gatsby-plugin-image';

export interface SideBarProps {
    featured: Array<IndexElements>;
    related: Array<IndexElements>;
}

const SideBar = ({ featured, related }: SideBarProps) => {
    return (
        <aside className="menu sidebar">
            <div className="box">
                <p className="menu-label">Search the blog</p>
                <p className="menu-list control has-icons-left">
                    <span className="icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                    <input
                        className="input is-rounded"
                        type="text"
                        placeholder="A Blog Title..."
                        aria-label="blog-search"
                    />
                </p>
            </div>
            {related && related.length > 0 && (
                <div className="box">
                    <p className="menu-label">Related posts</p>
                    <ul className="menu-list">
                        {related.length > 0 &&
                            related.map((post) => {
                                const image = getImage(
                                    post.frontmatter.headerImage
                                );

                                return (
                                    <li key={post.frontmatter.title}>
                                        <HorizontalPostTile
                                            title={post.frontmatter.title}
                                            excerpt={post.excerpt}
                                            slug={post.fields.slug}
                                            image={image}
                                        />
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            )}
            <div className="box">
                <p className="menu-label">Featured posts</p>
                <ul className="menu-list">
                    {featured.map((post) => {
                        const image = getImage(post.frontmatter.headerImage);
                        return (
                            <li key={post.frontmatter.title}>
                                <HorizontalPostTile
                                    title={post.frontmatter.title}
                                    slug={post.fields.slug}
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

export default SideBar;
