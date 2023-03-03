import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'gatsby';

/**
 * properties for FaIconLink component
 * @interface FaIconLinkProps
 * @typedef {FaIconLinkProps}
 * @property {IconProp} faIcon - Font Awesome icon to be used
 * @property {string} [url='/''] - url value (optional)
 * @property {string} [label] - label value (optional)
 * @property {boolean} [labelLeft=true] - setting to  display label on left of label (optional)
 * @property {'white' | 'black'} [color='white'] - color setting for label text (optional)
 */
interface FaIconLinkProps {
    faIcon: IconProp;
    url?: string;
    label?: string;
    labelLeft?: boolean;
    color?: 'white' | 'black';
}

/**
 * An icon link using FontAwesome icons with footer styles
 * @component
 * @param {FaIconLinkProps} props
 * @see FaIconLinkProps
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
