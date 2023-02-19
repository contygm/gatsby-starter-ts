import React from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FaIconLink } from './FaIconLink';

export const NextAndPrevious = (props: {
    next?: NeighborPost;
    previous?: NeighborPost;
    type: PostType
}) => {
    return (
        <div className="level my-3">
            <div className="level-left">
                <div className="level-item">
                    {props.previous && (
                        <FaIconLink
                            faIcon={faArrowLeft}
                            url={`/${props.type}${props.previous.fields.slug}`}
                            label={props.previous.frontmatter.title}
                            labelLeft={false}
                            color="black"
                        />
                    )}
                </div>
            </div>
            <div className="level-right">
                <div className="level-item">
                    {props.next && (
                        <FaIconLink
                            faIcon={faArrowRight}
                            url={`/${props.type}${props.next.fields.slug}`}
                            label={props.next.frontmatter.title}
                            color="black"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};