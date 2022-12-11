import React from 'react';
import { Link } from 'gatsby';
import { Layout, SEO,  PageHeader} from '../../components';


const legalPageMap = [
    {
        title: 'Privacy Policy',
        cyTag: 'legal-index-privacy',
        url: '/legal/privacy-policy',
        description:
            'Bonbon tootsie roll lemon drops topping biscuit cookie. Icing gummi bears ice cream marshmallow jelly brownie icing soufflé.'
    },
    {
        title: 'Copyright',
        cyTag: 'legal-index-copyright',
        url: '/legal/copyright',
        description:
            'Bonbon tootsie roll lemon drops topping biscuit cookie. Icing gummi bears ice cream marshmallow jelly brownie icing soufflé.'
    },
    {
        title: 'Cookie Policy',
        cyTag: 'legal-index-cookie',
        url: '/legal/cookie-policy',
        description:
            'Bonbon tootsie roll lemon drops topping biscuit cookie. Icing gummi bears ice cream marshmallow jelly brownie icing soufflé.'
    },
    {
        title: 'Terms and Conditions',
        cyTag: 'legal-index-terms',
        url: '/legal/terms-and-conditions',
        description:
            'Bonbon tootsie roll lemon drops topping biscuit cookie. Icing gummi bears ice cream marshmallow jelly brownie icing soufflé.'
    },
    {
        title: 'Disclaimer',
        cyTag: 'legal-index-disclaimer',
        url: '/legal/disclaimer',
        description:
            'Bonbon tootsie roll lemon drops topping biscuit cookie. Icing gummi bears ice cream marshmallow jelly brownie icing soufflé.'
    }
];

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
export const Head = () => <SEO title="Legal" />;
