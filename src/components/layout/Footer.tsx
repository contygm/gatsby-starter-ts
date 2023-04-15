import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStar,
    faMugHot,
    faGhost,
    faAngleUp
} from '@fortawesome/free-solid-svg-icons';
import { FaIconLink } from '../common/FaIconLink';
import { LEGAL_LINKS } from '../../utils/constants/legalDropdownLinks';

/**
 * A text link with footer styles
 * @param {string} pageUrl - string, destination url
 * @param {string} label - string, link text
 *
 * @memberof Footer
 */
const PageLink = (props: { pageUrl: string; label: string }) => {
    return (
        <li
            className="footer-pg-link-wrapper"
            role="listitem"
        >
            <Link
                className="footer-link-base"
                to={props.pageUrl}
                data-cy={`footer-link-${props.label}`}
            >
                {props.label}
            </Link>
        </li>
    );
};

/**
 * A link with dropdown styles that will go to a specific legal page
 * @param {string} label - string, link text
 * @param {string} slug - string, destination url
 *
 * @memberof Footer
 */
const DropUpLink = (props: { label: string; slug: string }) => {
    return (
        <div className="dropdown-item">
            <Link
                className="footer-drawer-link"
                to={`${props.slug}`}
                data-cy={`footer-link-${props.slug}`}
            >
                {props.label}
            </Link>
        </div>
    );
};

/**
 * A link dropdown that routes to the legal page index and the individual legal pages (hardcoded values):
 * - Copyright
 * - Cookie Policy
 * - Terms and Conditions
 * - Disclaimer.
 *
 * Dropdown actually drops UP.
 * @memberof Footer
 */
const DropUpBtn = (props: {
    links: {
        label: string;
        slug: string;
    }[]
}) => {
    return (
        <li
            className="footer-dropup"
            role="listitem"
        >
            <div className="dropdown-trigger">
                <Link
                    className="footer-dropup-menu"
                    aria-haspopup="true"
                    aria-controls="footer-dropdown-menu"
                    to="/legal"
                    data-cy="footer-link-legal"
                >
                    Legal
                    <FontAwesomeIcon
                        icon={faAngleUp}
                        size="sm"
                        className="px-2"
                    />
                </Link>
            </div>
            <div
                className="dropdown-menu"
                id="footer-dropdown-menu"
                role="menu"
            >
                <div className="dropdown-content">
                    {props.links.map((link) => (
                        <DropUpLink
                            key={link.label}
                            label={link.label}
                            slug={link.slug}
                        />
                    ))}
                </div>
            </div>
        </li>
    );
};

/**
 * Site-wide, mobile-friendly footer that includes:
 * - copyright with site author
 * - legal page links in a dropdown button
 * - site logo
 * - links to privacy, contact and about pages
 * - social media links
 * @param author - author of site, passed in from layout
 *
 * @category Components
 */
export const Footer = (props: { author: string }) => {
    return (
        <footer className="footer">
            <div className="footer-main-content-wrapper">
                {/* Logo to the left */}
                <div className="column">
                    <Link
                        className=""
                        to="/"
                        data-cy="footer-logo"
                    >
                        <figure className="footer-logo">
                            <StaticImage
                                src="../../images/bulma-logo-white.png"
                                alt="Logo"
                                placeholder="blurred"
                                layout="constrained"
                                width={128}
                            />
                        </figure>
                    </Link>
                </div>
                {/* Navigation links centered */}
                {/* NOTE: flex basis will keep dropdown btn in line with the links */}
                <ul
                    className="centered-col"
                    style={{ flexBasis: 'auto' }}
                    role="list"
                >
                    <div>
                        <PageLink
                            label="Contact"
                            pageUrl="/about#contact-us"
                        />
                        <PageLink
                            label="About"
                            pageUrl="/about"
                        />
                        <PageLink
                            label="Privacy"
                            pageUrl="/legal/privacy-policy"
                        />
                        {/* contains the rest of the 'legal' pages */}
                        <DropUpBtn links={LEGAL_LINKS}/>
                    </div>
                </ul>
                {/* Social media links to the left */}
                <div className="column">
                    <ul className="footer-social-media">
                        <FaIconLink faIcon={faStar} />
                        <FaIconLink faIcon={faMugHot} />
                        <FaIconLink faIcon={faGhost} />
                    </ul>
                </div>
            </div>
            {/* Copy right section with border */}
            <div className="footer-copyright">
                <p
                    className="pt-3"
                    data-testid="copyright"
                >
                    © <time>{new Date().getFullYear()}</time>, Built by{' '}
                    {props.author}
                </p>
            </div>
        </footer>
    );
};
