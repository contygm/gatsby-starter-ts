import React from 'react';
import { useSiteMetadata } from '../utils/hooks/useSiteMetadata';
import { Layout, SEO, PageHeader, ContactForm } from '../components';

/**
 * Basic about page that pulls businessName, phone number and email from site metadata.
 *
 * It uses the ContactForm component.
 * @class
 * @category Pages
 * @see ContactForm
 */
const AboutPage = () => {
    const { businessName, phone, email } = useSiteMetadata();

    return (
        <Layout>
            <PageHeader title={`About ${businessName}`} />
            <article className="content">
                <section className="section">
                    <div className="container">
                        <h2 className="title is-2">Our Story</h2>
                        <p>
                            Bonbon tootsie roll lemon drops topping biscuit
                            cookie. Icing gummi bears ice cream marshmallow
                            jelly brownie icing soufflé. Muffin cake halvah
                            marshmallow carrot cake powder. Lemon drops muffin
                            biscuit marzipan jujubes cupcake.
                        </p>
                        <p>
                            Biscuit cake candy brownie sweet bear claw croissant
                            pastry jelly-o. Dessert pie marzipan liquorice apple
                            pie toffee shortbread pie sweet roll. Candy canes
                            halvah icing dragée toffee sweet dessert topping
                            chocolate bar.
                        </p>
                        <p>
                            Icing marzipan sugar plum danish chocolate candy
                            canes gummies. Chocolate cotton candy candy halvah
                            jujubes toffee jelly beans ice cream. Sweet roll
                            candy tart gummi bears danish icing biscuit apple
                            pie. Chocolate cake gummies sugar plum candy canes
                            pudding macaroon.
                        </p>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <h2 className="title is-2">Our Tech</h2>
                        <p>
                            Bonbon tootsie roll lemon drops topping biscuit
                            cookie. Icing gummi bears ice cream marshmallow
                            jelly brownie icing soufflé. Muffin cake halvah
                            marshmallow carrot cake powder. Lemon drops muffin
                            biscuit marzipan jujubes cupcake.
                        </p>
                        <p>
                            Biscuit cake candy brownie sweet bear claw croissant
                            pastry jelly-o. Dessert pie marzipan liquorice apple
                            pie toffee shortbread pie sweet roll. Candy canes
                            halvah icing dragée toffee sweet dessert topping
                            chocolate bar.
                        </p>
                        <ul>
                            <li> GatsbyJS </li>
                            <li> Typescript </li>
                            <li> NetlifyCMS </li>
                            <li> Bulma </li>
                        </ul>
                        <p>
                            Icing marzipan sugar plum danish chocolate candy
                            canes gummies. Chocolate cotton candy candy halvah
                            jujubes toffee jelly beans ice cream. Sweet roll
                            candy tart gummi bears danish icing biscuit apple
                            pie. Chocolate cake gummies sugar plum candy canes
                            pudding macaroon.
                        </p>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <h2
                            className="title is-2"
                            id="contact-us"
                        >
                            Contact Us
                        </h2>
                        <p>
                            Have any questions, comments or concerns for{' '}
                            {businessName}? We would love to hear from you. Feel
                            free to reach out to us using our contact
                            information below:
                        </p>
                        <ul>
                            <li> Email: {email}</li>
                            <li> Phone Number: {phone} </li>
                        </ul>
                        <p>
                            Biscuit cake candy brownie sweet bear claw croissant
                            pastry jelly-o. Dessert pie marzipan liquorice apple
                            pie toffee shortbread pie sweet roll. Candy canes
                            halvah icing dragée toffee sweet dessert topping
                            chocolate bar.
                        </p>
                        <div className="columns my-2">
                            <div className="column is-two-thirds-desktop">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </Layout>
    );
};

export default AboutPage;

/**
 * A basic component for SEO focused information
 * @memberof AboutPage
 */
export const Head = () => <SEO title="About" />;
