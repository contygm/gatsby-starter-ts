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
        <p className="pg-header-icon-row">
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
 *
 * @param {string} subtitle - a subtitle for the main header component
 * @memberof PageHeader
 */
const Subtitle = ({ subtitle }: { subtitle: string }) => {
    return <p className="pg-header-subtitle">{subtitle}</p>;
};

/**
 * Page header for standard pages
 * @property {string} title - the page title to be displayed
 * @property {boolean} [alignCenter = false] - Setting to center the header content
 * @property {string} [subtitle] - optional subtitle the displays under title
 * @property {boolean} [hasSocial] - optional. Add social media buttons under title and subtitle
 *
 * @see PageHeader
 * @category Components
 */
interface PageHeaderProps {
    title: string;
    alignCenter?: boolean;
    subtitle?: string;
    hasSocial?: boolean;
}

/**
 * Page header for standard pages
 * @param {PageHeaderProps} props - includes the title, subtitle, hasSocial option,
 * and align center option
 *
 * @see PageHeaderProps
 * @category Components
 */
export const PageHeader = (props: PageHeaderProps) => {
    const centerClass = props.alignCenter ? 'has-text-centered' : '';

    return (
        <header className="medium-hero">
            <div className="pg-header-hero-black">
                <div className={`container ${centerClass}`}>
                    <h1 className="pg-header-title">
                        {props.title}
                        <span className="pg-header-period">.</span>
                    </h1>
                    {props.subtitle && <Subtitle subtitle={props.subtitle} />}
                    {props.hasSocial && <SocialMediaRow />}
                </div>
            </div>
        </header>
    );
};
