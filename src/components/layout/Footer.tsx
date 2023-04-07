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
const PageLink = ({ pageUrl, label }: { pageUrl: string; label: string }) => {
    return (
        <li
            className="is-inline-desktop is-inline-tablet m-4 footer-link"
            role="listitem"
        >
            <Link
                className="footer-link"
                to={pageUrl}
                data-cy={`footer-link-${label}`}
            >
                {label}
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
// TODO: move to dropdown btn file
// TODO: pass full slug
// TODO: make general footer dropdown link
const DrawerLegalLink = ({ label, slug }: { label: string; slug: string }) => {
    return (
        <div className="dropdown-item">
            <Link
                className="footer-drawer-link"
                to={`/legal/copyright${slug}`}
                data-cy={`footer-link-${slug}`}
            >
                {label}
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
// TODO: modify to take legal links as an arg
// TODO: move to dropdown btn file
const DropDownLinkBtn = () => {
    return (
        <li
            className="dropdown is-hoverable is-up"
            role="listitem"
        >
            <div className="dropdown-trigger">
                <Link
                    className="m-4 footer-link"
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
                    {LEGAL_LINKS.map((link) => (
                        <DrawerLegalLink
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
export const Footer = ({ author }: { author: string }) => {
    return (
        <footer className="footer">
            <div className="columns mb-1 is-vcentered has-text-centered-mobile">
                {/* Logo to the left */}
                <div className="column">
                    <Link
                        className=""
                        to="/"
                        data-cy="footer-logo"
                    >
                        <figure className="image footer-logo">
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
                    className="column has-text-centered"
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
                        {/* TODO: pass legal pages */}
                        <DropDownLinkBtn />
                    </div>
                </ul>
                {/* Social media links to the left */}
                <div className="column">
                    <ul className="has-text-right has-text-centered-mobile footer-link">
                        <FaIconLink faIcon={faStar} />
                        <FaIconLink faIcon={faMugHot} />
                        <FaIconLink faIcon={faGhost} />
                    </ul>
                </div>
            </div>
            {/* Copy right section with border */}
            <div className="footer-copyright has-text-centered has-text-grey-light is-size-7">
                <p
                    className="pt-3"
                    data-testid="copyright"
                >
                    © <time>{new Date().getFullYear()}</time>, Built by {author}
                </p>
            </div>
        </footer>
    );
};
