import React from 'react';
import {
    faMugHot,
    faGhost,
    faEnvelope,
    faPaperclip
} from '@fortawesome/free-solid-svg-icons';
import { FaIconLink } from './FaIconLink';

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

const Subtitle = (props: { subtitle: string }) => {
    return <p className="subtitle has-text-white">{props.subtitle}</p>;
};

/**
 * @description Page header for standard pages
 * @param title - the page title to be displayed
 * @param alignCenter - boolean;
 */
export const PageHeader = (props: {
    title: string;
    alignCenter?: boolean;
    subtitle?: string;
    hasSocial?: boolean;
}) => {
    const centerClass = props.alignCenter ? 'has-text-centered' : '';

    return (
        <header className="hero is-medium">
            <div className="hero-body has-background-black">
                <div className={`container ${centerClass}`}>
                    <h1 className="title has-text-white is-1">
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
