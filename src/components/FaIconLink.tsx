import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'gatsby';

interface FaIconLinkProps {
    faIcon: IconProp;
    url?: string;
    label?: string;
    labelLeft?: boolean;
    color?: 'white' | 'black';
}

/**
 * @description A icon link using FontAwesome icons with
 * footer styles
 * @param faIcon - IconProp, faicon name
 */
export const FaIconLink = ({
    faIcon,
    label,
    url = '/',
    labelLeft = true,
    color = 'white'
}: FaIconLinkProps) => {
    const labelClass = label ? 'with-label' : 'no-label';
    const colorClass = color === 'white' ? 'is-white' : 'is-black';

    return (
        <li className={`faicon-link-container`}>
            <Link
                className={`faicon-link ${labelClass} ${colorClass}`}
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