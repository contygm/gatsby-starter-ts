import React, { useState } from 'react';
import {
    faMugHot,
    faGhost,
    faEnvelope,
    faShare,
    faChevronUp
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
export const StickySocialMedia = (props: {
    isVertical: boolean;
    classes?: string;
}) => {
    const [showMedia, setShowMedia] = useState(false);

    const verticalClass = props.isVertical ? 'is-vertical' : 'sticky';

    const handleCollapse = () => {
        setShowMedia(!showMedia);
    };

    return (
        <div
            className={`sticky-social-wrapper ${verticalClass} ${
                props.classes ?? ''
            }`}
        >
            <p className="menu-label">
                {props.isVertical ? 'Share' : 'Share this post'}
            </p>
            <ul
                className={`sticky-social-list-wrapper ${
                    props.isVertical ? '' : 'columns'
                }`}
            >
                {((props.isVertical && showMedia) || !props.isVertical) && (
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
                {props.isVertical && showMedia && (
                    <div className="sticky-social-hidden">
                        <FontAwesomeIcon
                            className="faicon-link"
                            icon={faChevronUp}
                            size="sm"
                            onClick={handleCollapse}
                            data-testid={'sticky-social-hide'}
                        />
                    </div>
                )}
                {props.isVertical && !showMedia && (
                    <div className="sticky-social-show">
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
