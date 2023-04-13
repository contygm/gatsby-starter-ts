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
 * @memberof FaIconLink
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
 * url = '/',
    labelLeft = true,
    color = 'white'
 * @see FaIconLinkProps
 * @category Components
 */
export const FaIconLink = (props: FaIconLinkProps) => {
    const hasLeftLabel = props.labelLeft === undefined ? true : props.labelLeft;
    const url = props.url === undefined ? '/' : props.url;
    const labelClass = props.label ? 'with-label' : '';
    const colorClass =
        props.color && props.color === 'black'
            ? 'is-black'
            : 'is-white';

    return (
        <li className={`faicon-link-container`}>
            <Link
                className={`faicon-link ${labelClass} ${colorClass}`}
                to={url}
                data-cy={`faicon-link`}
                aria-label="social media link"
            >
                {props.label && hasLeftLabel && <span>{props.label}</span>}
                <FontAwesomeIcon
                    className="icon"
                    icon={props.faIcon}
                    size="xl"
                />
                {props.label && !hasLeftLabel && <span>{props.label}</span>}
            </Link>
        </li>
    );
};
