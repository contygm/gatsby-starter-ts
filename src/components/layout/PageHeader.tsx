import React from 'react';
import {
    faMugHot,
    faGhost,
    faEnvelope,
    faPaperclip
} from '@fortawesome/free-solid-svg-icons';
import { FaIconLink } from '../common/FaIconLink';

/**
 * Sub-component containing 4 hardcoded social media links
 * @memberof PageHeader
 */
const SocialMediaRow = () => {
    return (
        <p className="subtitle header-icon-row">
            <span className="bulma-fa-mixin">
                <FaIconLink faIcon={faMugHot} />
            </span>
            <span className="bulma-fa-mixin">
                <FaIconLink faIcon={faGhost} />
            </span>
            <span className="bulma-fa-mixin">
                <FaIconLink faIcon={faEnvelope} />
            </span>
            <span className="bulma-fa-mixin">
                <FaIconLink faIcon={faPaperclip} />
            </span>
        </p>
    );
};

/**
 * Sub-component for the subtitle
 * @memberof PageHeader
 *
 * @param {string} subtitle - a subtitle for the main header component
 */
const Subtitle = ({ subtitle }: { subtitle: string }) => {
    return <p className="subtitle has-text-white">{subtitle}</p>;
};

/**
 * Page header for standard pages
 *
 * @property {string} title - the page title to be displayed
 * @property {boolean} [alignCenter = false] - Setting to center the header content
 * @property {string} [subtitle] - optional subtitle the displays under title
 * @property {boolean} [hasSocial] - optional. Add social media buttons under title and subtitle
 *
 * @see PageHeader
 */
interface PageHeaderProps {
    title: string;
    alignCenter?: boolean;
    subtitle?: string;
    hasSocial?: boolean;
}

/**
 * Page header for standard pages
 * @category Components
 *
 * @param {PageHeaderProps} props - includes the title, subtitle, hasSocial option,
 * and align center option
 *
 * @see PageHeaderProps
 */
export const PageHeader = ({
    title,
    alignCenter = false,
    subtitle,
    hasSocial
}: PageHeaderProps) => {
    const centerClass = alignCenter ? 'has-text-centered' : '';

    return (
        <header className="hero is-medium">
            <div className="hero-body has-background-black">
                <div className={`container ${centerClass}`}>
                    <h1 className="title has-text-white is-1">
                        {title}
                        <span className="pg-header-period">.</span>
                    </h1>
                    {subtitle && <Subtitle subtitle={subtitle} />}
                    {hasSocial && <SocialMediaRow />}
                </div>
            </div>
        </header>
    );
};
