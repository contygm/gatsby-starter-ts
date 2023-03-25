import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

/**
 * Site wide navigation used in layout. This nobile friendly
 * navigation has the logo on the right, navigation links center, and a
 * search bar on the right.
 * @component
 */
export const NavBar = () => {
    const [showBurger, setShowBurger] = useState('');

    /**
     * Toggle active class for 'hamburger' menu. When active,
     * the mobile navigation will show
     * @function handleUpdateShowBurger
     * @memberof NavBar
     */
    function handleUpdateShowBurger() {
        const newVal = showBurger === '' ? 'is-active' : '';
        return setShowBurger(newVal);
    }

    return (
        <nav
            className="navbar is-primary"
            role="navigation"
            aria-label="main navigation"
        >
            {/* Logo Image */}
            <div className="navbar-brand">
                <Link
                    className="navbar-item"
                    to="/"
                >
                    <StaticImage
                        src="../../images/bulma-logo-white.png"
                        alt="Logo"
                        placeholder="blurred"
                        className="nav-side-width"
                        layout="constrained"
                        data-cy="nav-link-logo"
                    />
                </Link>
                {/* Mobile Hamburger Graphic - following Bulma docs */}
                <button
                    className={`navbar-burger ${showBurger}`}
                    aria-label="menu"
                    aria-expanded="false"
                    onClick={handleUpdateShowBurger}
                    data-testid="siteNav"
                    data-cy="nav-hamburger"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>
            {/* Navigation links to main pages */}
            <div
                id="siteNav"
                className={`navbar-menu ${showBurger}`}
            >
                <div className="navbar-start">
                    <Link
                        to="/"
                        className="navbar-item"
                        data-cy="nav-link-home"
                    >
                        Home
                    </Link>
                    <Link
                        to="/blog"
                        className="navbar-item"
                        data-cy="nav-link-blog"
                    >
                        Blog
                    </Link>
                    <Link
                        to="/wiki"
                        className="navbar-item"
                        data-cy="nav-link-wiki"
                    >
                        Wiki
                    </Link>
                    <Link
                        to="/glossary"
                        className="navbar-item"
                        data-cy="nav-link-glossary"
                    >
                        Glossary
                    </Link>
                </div>
            </div>
        </nav>
    );
};
