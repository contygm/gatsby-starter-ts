import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMugHot, faGhost, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

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
        <li className="is-inline is-inline-desktop is-inline-tablet mx-3">
            <Link
                className="has-text-info-light"
                to={props.pageUrl}
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
        <li className="dropdown is-hoverable is-up">
            <div className="dropdown-trigge">
                <Link 
                    className="has-text-info-light ml-3"
                    aria-haspopup="true"
                    aria-controls="footer-dropdown-menu"
                    to="/legal"
                >
                    Legal
                    <FontAwesomeIcon
                        icon={faAngleUp}
                        size="sm"
                        className="px-2"
                    />
                </Link>
            </div>
            <div className="dropdown-menu" id="footer-dropdown-menu" role="menu">
                <div className="dropdown-content">
                    <div className="dropdown-item">
                        <Link className="" to="/legal/copyright">Copyright</Link>
                    </div>
                    <div className="dropdown-item">
                        <Link className="" to="/legal/cookie-policy">Cookie Policy</Link>
                    </div>
                    <div className="dropdown-item">
                        <Link className="" to="/legal/terms-and-conditions">Terms and Conditions</Link>
                    </div>
                    <div className="dropdown-item">
                        <Link className="" to="/legal/disclaimer">Disclaimer</Link>
                    </div>
                </div>
            </div>
        </li>
    );
}

/**
 * @description Site wide footer, mobile friendly
 * @param author - author of site, passed in from layour
 */
const Footer = (props: { author: string }) => {
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
                    {/* TODO: display: flex for div will get tthe links to site straight  */}
                    {/* TODO: need to account for mobile tho */}
                    {/* https://stackoverflow.com/questions/27418104/whats-the-difference-between-displayinline-flex-and-displayflex */}
                    <div >
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
                            pageUrl="/legal/privacy-policy"
                        />
                        {/* contians the rest of the 'legal' pages */}
                        <DropDownLinkBtn />
                    </div>
                    
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
            {/* TODO: use <time /> */}
            <div className="footer-copyright has-text-centered has-text-grey-light is-size-7">
                <p className="pt-3">
                    © {new Date().getFullYear()}, Built by {props.author}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
