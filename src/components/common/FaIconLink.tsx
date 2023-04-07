import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'gatsby';

/**
 * properties for FaIconLink component
 * @property {IconProp} faIcon - Font Awesome icon to be used
 * @property {string} [url] - url value (optional)
 * @property {string} [label] - label value (optional)
 * @property {boolean} [labelLeft] - setting to  display label on left of label (optional)
 * @property {'white' | 'black'} [color] - color setting for label text (optional)
 *
 * @see FaIconLink
 * @memberOf FaIconLink
 * @category Components
 */
interface FaIconLinkProps {
    faIcon: IconProp;
    url?: string;
    label?: string;
    labelLeft?: boolean;
    color?: 'white' | 'black';
}

/**
 * An icon link using FontAwesome icons with optional label text on the left or right of the icon.
 * @param {FaIconLinkProps} props - various settings for the FontAwesome icon link
 * @param {string} [props.url='/'] - default value is site home page
 * @param {string} [props.labelLeft=true] - default value is true. If a label is present, it will show up to the left  of the icon as a default
 * @param {string} [props.color='white'] - default value is white. This color applies to icon and label text color
 *
 * @see FaIconLinkProps
 * @category Components
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
