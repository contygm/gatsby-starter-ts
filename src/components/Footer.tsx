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
import { FaIconLink } from './FaIconLink';

/**
 * @description A text link with footer styles
 * @param pageUrl - string, destination url
 * @param label - string, link text
 */
const PageLink = (props: { pageUrl: string; label: string }) => {
    return (
        <li
            className="is-inline-desktop is-inline-tablet m-4 footer-link"
            role="listitem"
        >
            <Link
                className="footer-link"
                to={props.pageUrl}
                data-cy={`footer-link-${props.label}`}
            >
                {props.label}
            </Link>
        </li>
    );
};

/**
 * @description A link dropdown that routes to the legal pages: Copyright,
 * Cookie Policy, Terms and Conditions, Disclaimer. Dropdown actually drops UP
 */
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
                    <div className="dropdown-item">
                        <Link
                            className="footer-drawer-link"
                            to="/legal/copyright"
                            data-cy="footer-link-copyright"
                        >
                            Copyright
                        </Link>
                    </div>
                    <div className="dropdown-item">
                        <Link
                            className="footer-drawer-link"
                            to="/legal/cookie-policy"
                            data-cy="footer-link-cookie"
                        >
                            Cookie Policy
                        </Link>
                    </div>
                    <div className="dropdown-item">
                        <Link
                            className="footer-drawer-link"
                            to="/legal/terms-and-conditions"
                            data-cy="footer-link-terms"
                        >
                            Terms and Conditions
                        </Link>
                    </div>
                    <div className="dropdown-item">
                        <Link
                            className="footer-drawer-link"
                            to="/legal/disclaimer"
                            data-cy="footer-link-disclaimer"
                        >
                            Disclaimer
                        </Link>
                    </div>
                </div>
            </div>
        </li>
    );
};

/**
 * @description Site wide footer, mobile friendly
 * @param author - author of site, passed in from layour
 */
export const Footer = (props: { author: string }) => {
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
                                src="../images/bulma-logo-white.png"
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
                        {/* contians the rest of the 'legal' pages */}
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
                    © <time>{new Date().getFullYear()}</time>, Built by{' '}
                    {props.author}
                </p>
            </div>
        </footer>
    );
};