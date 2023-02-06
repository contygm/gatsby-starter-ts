import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

export interface PostTileProps {
    title: string;
    excerpt: string;
    slug: string;
    image?: IGatsbyImageData;
}

export const SideBarPostTile = ({ title, excerpt, slug, image }: PostTileProps) => {
    return (
        <Link
            to={`/blog${slug}`}
            className="horizontal-post-tile"
        >
            <div className="card">
                <div className="card-image">
                    {image && (
                        <figure>
                            <GatsbyImage
                                alt="blog image"
                                image={image}
                                className="image "
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