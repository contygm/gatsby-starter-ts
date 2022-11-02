import * as React from 'react';
import { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

/**
 * @description Site wide navigation used in layout. This nobile friendly
 * navigation has the logo on the right, navigation links center, and a
 * search bar on the right.
 */
const NavBar = () => {
    const [showBurger, setShowBurger] = useState('');

    /**
     * @description Set active class for 'hamburger' menu. When active,
     * the mobile navigation options will show
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
                        src="../images/bulma-logo-white.png"
                        alt="Logo"
                        placeholder="blurred"
                        className="nav-side-width"
                        layout="constrained"
                    />
                </Link>
                {/* Mobile Hamburger Graphic - following Bulma docs */}
                <button
                    className={`navbar-burger ${showBurger}`}
                    aria-label="menu"
                    aria-expanded="false"
                    onClick={handleUpdateShowBurger}
                    data-testid="siteNav"
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
                    >
                        Home
                    </Link>
                    <Link
                        to="/"
                        className="navbar-item"
                    >
                        Blog
                    </Link>
                    <Link
                        to="/"
                        className="navbar-item"
                    >
                        Wiki
                    </Link>
                    <Link
                        to="/404"
                        className="navbar-item"
                    >
                        Glossary
                    </Link>
                </div>
                {/* Search bar */}
                <div className="navbar-end">
                    <div className="field nav-side-width">
                        <p className="control has-icons-left has-icons-right">
                            <input
                                className="input is-rounded is-small"
                                type="text"
                                placeholder="Search..."
                            />

                            <span className="icon is-small is-left">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
