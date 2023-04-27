import React from 'react';
import { Link } from 'gatsby';
import { legalPageMap } from '../../utils/constants/legalConstants';
import { Layout, SEO, PageHeader } from '../../components';

/**
 * @property {string} props.title - display title for the link
 * @property {string} props.cyTag - cypress testing tag for the link
 * @property {string} props.url - relative url for the linked page
 * @property {string} props.description - linked page description
 *
 * @category Pages
 * @memberof LegalPage
 */
interface LegalLinkProps {
    title: string;
    cyTag: string;
    url: string;
    description: string;
}
/**
 * A basic card component for all the legal pages
 * @property {LegalLinkProps} props - legal page card information
 *
 * @category Pages
 * @memberof LegalPage
 */
const LegalCard = (props: LegalLinkProps) => {
    return (
        <div className="legal-card-wrapper">
            <div className="legal-card">
                <div className="card-content">
                    <h2 className="title-two">
                        <Link
                            className="legal-card-link"
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
            <section className="legal-index-wrapper">
                <div className="container">
                    <div className="col-multi-wrapper">
                        {legalPageMap.map((page) => {
                            return (
                                <LegalCard
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
 * @memberof LegalPage
 */
export const Head = () => <SEO title="Legal" />;
