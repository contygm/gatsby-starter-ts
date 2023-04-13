import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

/**
 * properties for SideBarPostTile component
 * @property {string} title - title of the post
 * @property {string} excerpt - post excerpt
 * @property {string} slug - post slug
 * @property {IGatsbyImageData} [image] - optional tile image
 *
 * @see SideBarPostTile
 * @category Components
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
 * @see SideBarPostTileProps
 * @category Components
 */
// TODO ? move to common and make "simple tile"
export const SideBarPostTile = (props: SideBarPostTileProps) => {
    return (
        <Link
            to={props.slug}
            className="sidebar-post-tile"
        >
            <div className="card">
                <div className="card-image">
                    {props.image && (
                        <figure>
                            <GatsbyImage
                                alt="blog image"
                                image={props.image}
                                className="sidebar-tile-image"
                            />
                        </figure>
                    )}
                </div>
                <div className="card-content">
                    <div className="content">
                        <h6>{props.title}</h6>
                        <p>{props.excerpt}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};
