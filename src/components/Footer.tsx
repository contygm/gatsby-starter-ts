import { Link } from 'gatsby';
import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMugHot, faGhost } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

/**
 * @description Site wide footer, mobile friendly
 * @param author - string value passed from Layout
 */
const Footer = (props: { author: string }) => {
    /**
     * @description A icon link using FontAwesome icons with
     * footer styles
     * @param faIcon - IconProp, faicon name
     */
    const FaIconLink = (props: { faIcon: IconProp }) => {
        return (
            <li className="mx-2 is-inline">
                <Link
                    className="has-text-info-light"
                    to="/"
                >
                    <FontAwesomeIcon
                        icon={props.faIcon}
                        size="lg"
                    />
                </Link>
            </li>
        );
    };

    /**
     * @description A text link with footer styles
     * @param pageUrl - string, destination url
     * @param label - string, link text
     */
    const PageLink = (props: { pageUrl: string; label: string }) => {
        return (
            <li className="is-inline-desktop is-inline-tablet mx-4">
                <Link
                    className="has-text-info-light"
                    to={props.pageUrl}
                >
                    {props.label}
                </Link>
            </li>
        );
    };

    return (
        <footer className="footer">
            <div className="columns mb-1 is-vcentered has-text-centered-mobile">
                {/* Logo to the left */}
                <div className="column">
                    <Link
                        className=""
                        to="/"
                    >
                        <StaticImage
                            src="../images/icon.png"
                            alt="Logo"
                            placeholder="blurred"
                            className="footer-logo"
                            layout="constrained"
                            width={50}
                            height={50}
                        />
                    </Link>
                </div>
                {/* Navigation links centered */}
                <ul className="column has-text-centered">
                    <PageLink
                        label="Contact"
                        pageUrl="/"
                    />
                    <PageLink
                        label="About"
                        pageUrl="/"
                    />
                    <PageLink
                        label="Privacy"
                        pageUrl="/"
                    />
                </ul>
                {/* Social media links to the left */}
                <div className="column">
                    <ul className="has-text-right has-text-centered-mobile">
                        <FaIconLink faIcon={faStar} />
                        <FaIconLink faIcon={faMugHot} />
                        <FaIconLink faIcon={faGhost} />
                    </ul>
                </div>
            </div>
            {/* Copy right section with border */}
            <div className="footer-copyright has-text-centered has-text-grey-light is-size-7">
                <p className="pt-3">
                    © {new Date().getFullYear()}, Built by {props.author}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
