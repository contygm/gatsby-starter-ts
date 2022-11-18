import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'gatsby';

interface FaIconLinkProps {
    faIcon: IconProp;
    url?: string;
    label?: string;
    labelLeft?: boolean;
}

/**
 * @description A icon link using FontAwesome icons with
 * footer styles
 * @param faIcon - IconProp, faicon name
 */
const FaIconLink = ({
    faIcon,
    url = '/',
    label,
    labelLeft = true
}: FaIconLinkProps) => {
    const classes = label
        ? 'faicon-link-container is-inline icon-text'
        : 'faicon-link-container is-inline';

    const colorClass = label ? 'with-label' : 'no-label';

    return (
        <li className={classes}>
            <Link
                className={`faicon-link ${colorClass}`}
                to={url}
                data-cy={`faicon-link`}
                aria-label="social media link"
            >
                {label && labelLeft && <span>{label}</span>}
                <FontAwesomeIcon
                    className="icon"
                    icon={faIcon}
                    size="xl"
                />
                {label && !labelLeft && <span>{label}</span>}
            </Link>
        </li>
    );
};

export default FaIconLink;
