import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

/**
 * @description 404 page
 * @note placeholder content
 */
const NotFoundPage = () => {
    return (
        <Layout>
            <div className="hero is-halfheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">Page not found</h1>
                        <p className="subtitle">
                            Sorry 😔, we couldn’t find what you were looking
                            for.
                        </p>
                        <p>
                            <Link
                                className="button is-dark"
                                to="/"
                            >
                                Go home
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NotFoundPage;
