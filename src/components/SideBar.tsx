import * as React from 'react';
import FaIconLink from './FaIconLink';
import {
    faMugHot,
    faGhost,
    faEnvelope,
    faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HorizontalPostTile from './HorizontalPostTile';
import { getImage } from 'gatsby-plugin-image';

export interface SideBarProps {
    featured: Array<IndexElements>;
    related: Array<IndexElements>;
}

const SideBar = ({ featured, related }: SideBarProps) => {
    return (
        <>
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
                            const image = getImage(
                                post.frontmatter.headerImage
                            );
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
            {/* sticky social media */}
            <div className="menu sticky box mt-4">
                <p className="menu-label">Share this post</p>
                <ul className="has-text-black has-text-centered columns">
                    <div className="column">
                        <FaIconLink
                            faIcon={faMugHot}
                            color="black"
                        />
                    </div>
                    <div className="column">
                        <FaIconLink
                            faIcon={faGhost}
                            color="black"
                        />
                    </div>
                    <div className="column">
                        <FaIconLink
                            faIcon={faEnvelope}
                            color="black"
                        />
                    </div>
                </ul>
            </div>
        </>
    );
};

export default SideBar;
