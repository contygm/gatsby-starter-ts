import React from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FaIconLink } from './FaIconLink';

/**
 * props needed for next and previous component
 * @property {NeighborPost} next - next post alphabetically
 * @property {NeighborPost} previous - previous post alphabetically
 * @property {PostType} type - post type
 *
 * @see PostType
 * @see NeighborPost
 * @see NextAndPrevious
 * @category Components
 */
interface NextAndPreviousProps {
    next?: NeighborPost;
    previous?: NeighborPost;
    type: PostType;
}

/**
 * A component with links to the next and previous posts (alphabetically by title). Links show as arrows
 * @param {NextAndPreviousProps} props - next and previous posts + post type
 *
 * @see NextAndPreviousProps
 * @category Components
 */
export const NextAndPrevious = ({
    next,
    previous,
    type
}: NextAndPreviousProps) => {
    return (
        <div className="level my-3">
            <div className="level-left">
                <div className="level-item">
                    {previous && (
                        <FaIconLink
                            faIcon={faArrowLeft}
                            url={`/${type}${previous.fields.slug}`}
                            label={previous.frontmatter.title}
                            labelLeft={false}
                            color="black"
                        />
                    )}
                </div>
            </div>
            <div className="level-right">
                <div className="level-item">
                    {next && (
                        <FaIconLink
                            faIcon={faArrowRight}
                            url={`/${type}${next.fields.slug}`}
                            label={next.frontmatter.title}
                            color="black"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
