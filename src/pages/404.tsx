import React from 'react';
import { Link } from 'gatsby';
import { Layout, SEO } from '../components';

/**
 * 404 page for the site
 * @class
 * @category Pages
 */
const NotFoundPage = () => {
    return (
        <Layout>
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">Page not found</h1>
                        <p className="subtitle">
                            Sorry 😔, we couldn’t find that page.
                        </p>
                        <p>
                            <Link
                                className="button is-primary"
                                to="/"
                            >
                                Go home
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default NotFoundPage;

/**
 * A basic component for SEO focused information
 * @memberof NotFoundPage
 */
export const Head = () => <SEO title="404" />;
