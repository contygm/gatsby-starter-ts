import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

/**
 * properties for SideBarPostTile component
 *
 * @export
 * @interface SideBarPostTileProps
 * @typedef {SideBarPostTileProps}
 * @property {string} title - title of the post
 * @property {string} excerpt - post excerpt 
 * @property {string} slug - post slug
 * @property {IGatsbyImageData} [image] - optional tile image
 * 
 * @see SideBarPostTile
 */
export interface SideBarPostTileProps {
    title: string;
    excerpt: string;
    slug: string;
    image?: IGatsbyImageData;
}

/**
 * post tile component for site's SideBar
 * @param {SideBarPostTileProps} props - post details needed for SideBar tiles
 * 
 * @component 
 * @see SideBarPostTileProps
 */
export const SideBarPostTile = ({
    title,
    excerpt,
    slug,
    image
}: SideBarPostTileProps) => {
    return (
        <Link
            to={slug}
            className="horizontal-post-tile"
        >
            <div className="card">
                <div className="card-image">
                    {image && (
                        <figure>
                            <GatsbyImage
                                alt="blog image"
                                image={image}
                                className="image sidebar-tile-image"
                            />
                        </figure>
                    )}
                </div>
                <div className="card-content">
                    <div className="content">
                        <h6>{title}</h6>
                        <p>{excerpt}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};
