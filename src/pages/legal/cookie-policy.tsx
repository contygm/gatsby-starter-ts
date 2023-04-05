import React from 'react';
import { Layout, SEO } from '../../components';
import { useSiteMetadata } from '../../utils/useSiteMetadata';

/**
 * Basic cookie policy page that uses the `businessName` and `siteUrl` from SiteMetadata
 *
 * @category Pages
 * @subcategory Legal Pages
 * @class
 * @see LegalPage
 * @see SiteMetadata
 */
const CookiesPage = () => {
    const { businessName, siteUrl } = useSiteMetadata();

    return (
        <Layout>
            <section className="section">
                <div className="container">
                    <article className="content">
                        <h1 className="title is-1">Cookie Page</h1>
                        <p>
                            Welcome to {siteUrl} (the “Site”). We understand
                            that privacy online is important to users of our
                            Site, especially when conducting business. This
                            statement governs our privacy policies with respect
                            to those users of the Site (“Visitors”) who visit
                            without transacting business and Visitors who
                            register to transact business on the Site and make
                            use of the various services offered by
                            {businessName} (collectively, “Services”)
                            (“Authorized Customers”).
                        </p>
                        <h2>
                            What Personally Identifiable Information is
                            collected?
                        </h2>
                        <p>
                            Bonbon tootsie roll lemon drops topping biscuit
                            cookie. Icing gummi bears ice cream marshmallow
                            jelly brownie icing soufflé. Muffin cake halvah
                            marshmallow carrot cake powder. Lemon drops muffin
                            biscuit marzipan jujubes cupcake.
                        </p>
                        <p>
                            Bonbon tootsie roll lemon drops topping biscuit
                            cookie. Icing gummi bears ice cream marshmallow
                            jelly brownie icing soufflé. Muffin cake halvah
                            marshmallow carrot cake powder. Lemon drops muffin
                            biscuit marzipan jujubes cupcake.
                        </p>
                        <h2>What Soufflé lemon drops Soufflé lemon drops ?</h2>
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
                        <h2>What Soufflé lemon drops Soufflé lemon drops ?</h2>
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
                        <h2>What Soufflé lemon drops Soufflé lemon drops ?</h2>
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
                        <h2>What Soufflé lemon drops Soufflé lemon drops ?</h2>
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
                        <h2>What Soufflé lemon drops Soufflé lemon drops ?</h2>
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
                    </article>
                </div>
            </section>
        </Layout>
    );
};

export default CookiesPage;

/**
 * A basic component for SEO focused information
 *
 * @memberof CookiesPage
 */
export const Head = () => <SEO title="Cookie Policy" />;
