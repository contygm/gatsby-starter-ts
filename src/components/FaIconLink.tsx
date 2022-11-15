import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'gatsby';

/**
 * @description A icon link using FontAwesome icons with
 * footer styles
 * @param faIcon - IconProp, faicon name
 */
const FaIconLink = (props: { faIcon: IconProp }) => {
    return (
        <li className="faicon-link-container is-inline">
            <Link
                className="faicon-link"
                to="/"
                data-cy={`faicon-link`}
                aria-label="social media link"
            >
                <FontAwesomeIcon
                    icon={props.faIcon}
                    size="xl"
                />
            </Link>
        </li>
    );
};

export default FaIconLink;
