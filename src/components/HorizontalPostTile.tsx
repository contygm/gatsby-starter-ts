import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';

export interface PostTileProps {
    title: string;
    excerpt: string;
    slug: string;
    image?: IGatsbyImageData;
}

const HorizontalPostTile = ({ title, excerpt, slug, image }: PostTileProps) => {
    return (
        <Link
            to={`/blog${slug}`}
            className="horizontal-post-tile"
        >
            <div className="media">
                {image && (
                    <figure className="media-left my-auto">
                        <GatsbyImage
                            alt="blog image"
                            image={image}
                            className="image is-64x64 post-tile-image"
                        />
                    </figure>
                )}
                <div className="media-content">
                    <div className="content">
                        <h6>{title}</h6>
                        <p>{excerpt}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default HorizontalPostTile;
