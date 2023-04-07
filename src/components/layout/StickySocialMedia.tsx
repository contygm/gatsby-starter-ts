import React, { useState } from 'react';
import {
    faMugHot,
    faGhost,
    faEnvelope,
    faChevronRight,
    faShare
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * A mobile and web friendly social media bar. When scrolling, the bar will stick to the top
 * of the page. The isVertical mode is ideal for mobile devices. The horizontal mode is ideal
 * for placement with in the sidebar component.
 * @param {boolean} isVertical - when true the social media bar will show vertically. This state is meant for mobile devices.
 * @param {string} [classes] - css classes to customize the look of the component
 * 
 * @category Components
 */
export const StickySocialMedia = ({
    isVertical,
    classes
}: {
    isVertical: boolean;
    classes?: string;
}) => {
    const [showMedia, setShowMedia] = useState(true);

    const verticalClass = isVertical ? 'is-vertical' : '';

    const handleCollapse = () => {
        setShowMedia(!showMedia);
    };

    return (
        <div
            className={`menu sticky box mt-4 ${verticalClass} ${classes ?? ''}`}
        >
            <p className="menu-label">
                {isVertical ? 'Share' : 'Share this post'}
            </p>
            <ul
                className={`has-text-black has-text-centered ${
                    isVertical ? '' : 'columns'
                }`}
            >
                {((isVertical && showMedia) || !isVertical) && (
                    <>
                        <div className="column">
                            <FontAwesomeIcon
                                className="faicon-link"
                                icon={faMugHot}
                                size="lg"
                            />
                        </div>
                        <div className="column">
                            <FontAwesomeIcon
                                className="faicon-link"
                                icon={faGhost}
                                size="lg"
                            />
                        </div>
                        <div className="column">
                            <FontAwesomeIcon
                                className="faicon-link"
                                icon={faEnvelope}
                                size="lg"
                            />
                        </div>
                    </>
                )}
                {isVertical && showMedia && (
                    <div className="column has-text-grey-lighter pt-4 pb-2">
                        <FontAwesomeIcon
                            className="faicon-link"
                            icon={faChevronRight}
                            size="sm"
                            onClick={handleCollapse}
                            data-testid={'sticky-social-hide'}
                        />
                    </div>
                )}
                {isVertical && !showMedia && (
                    <div className="has-text-grey-lighter">
                        <FontAwesomeIcon
                            className="faicon-link"
                            icon={faShare}
                            size="lg"
                            onClick={handleCollapse}
                            data-testid={'sticky-social-show-more'}
                        />
                    </div>
                )}
            </ul>
        </div>
    );
};
