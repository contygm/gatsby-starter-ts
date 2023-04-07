import React from 'react';
import { Link } from 'gatsby';
import { legalPageMap } from '../../utils/constants/legalConstants';
import { Layout, SEO, PageHeader } from '../../components';

// TODO legal link interface
// TODO construct cytag
/**
 * A basic card component for all the legal pages
 * @param {Object} props - legal page card information
 * @param {string} props.title - display title for the link
 * @param {string} props.cyTag - cypress testing tag for the link
 * @param {string} props.url - relative url for the linked page
 * @param {string} props.description - linked page description
 * @memberof LegalPage
 */
const LegalLink = (props: {
    title: string;
    cyTag: string;
    url: string;
    description: string;
}) => {
    return (
        <div className="column is-half">
            <div className="card has-background-white-ter">
                <div className="card-content">
                    <h2 className="title is-2">
                        <Link
                            className="legal-link"
                            to={props.url}
                            data-cy={props.cyTag}
                        >
                            {props.title}
                        </Link>
                    </h2>
                    <p className="content">{props.description}</p>
                </div>
            </div>
        </div>
    );
};

/**
 * Basic Legal index page that displays cards for each available legal page. Each card
 * also links to the legal page
 *
 * @category Pages
 * @class
 */
const LegalPage = () => {
    return (
        <Layout>
            <PageHeader title="Legal Pages" />
            <section className="section my-4">
                <div className="container">
                    <div className="columns is-multiline">
                        {legalPageMap.map((page) => {
                            return (
                                <LegalLink
                                    key={page.title}
                                    title={page.title}
                                    url={page.url}
                                    description={page.description}
                                    cyTag={page.cyTag}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default LegalPage;

/**
 * A basic component for SEO focused information
 *
 * @memberof LegalPage
 */
export const Head = () => <SEO title="Legal" />;
