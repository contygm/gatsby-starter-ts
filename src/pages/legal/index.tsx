import * as React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'gatsby';
import PageHeader from '../../components/PageHeader';

const legalPageMap = [
    {
        title: 'Privacy Policy',
        url: '/legal/privacy-policy',
        description:
            'Bonbon tootsie roll lemon drops topping biscuit cookie. Icing gummi bears ice cream marshmallow jelly brownie icing soufflé.'
    },
    {
        title: 'Copyright',
        url: '/legal/copyright',
        description:
            'Bonbon tootsie roll lemon drops topping biscuit cookie. Icing gummi bears ice cream marshmallow jelly brownie icing soufflé.'
    },
    {
        title: 'Cookie Policy',
        url: '/legal/cookie-policy',
        description:
            'Bonbon tootsie roll lemon drops topping biscuit cookie. Icing gummi bears ice cream marshmallow jelly brownie icing soufflé.'
    },
    {
        title: 'Terms and Conditions',
        url: '/legal/terms-and-conditions',
        description:
            'Bonbon tootsie roll lemon drops topping biscuit cookie. Icing gummi bears ice cream marshmallow jelly brownie icing soufflé.'
    },
    {
        title: 'Disclaimer',
        url: '/legal/disclaimer',
        description:
            'Bonbon tootsie roll lemon drops topping biscuit cookie. Icing gummi bears ice cream marshmallow jelly brownie icing soufflé.'
    }
];

const LegalLink = (props: {
    title: string;
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
