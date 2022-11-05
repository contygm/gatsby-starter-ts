import * as React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { SEO } from '../components/SEO';

/**
 * @description Main landing page for the site
 * @note place holder content and styles
 */
const IndexPage = () => {
    return (
        <Layout>
            <div className="content">
                <section className="section pb-2">
                    <h1 className="title is-1">{"You're Home!"}</h1>
                </section>
                <section className="section pt-2">
                    <StaticImage
                        src="../images/xlarge.png"
                        alt="Logo"
                        placeholder="blurred"
                        className="block mx-auto"
                        layout="constrained"
                    />
                    <p>
                        Ice cream danish cookie muffin soufflé lollipop. Bonbon
                        sweet roll topping candy canes halvah pastry jelly-o.
                        Candy canes candy chocolate bar shortbread gummi bears
                        muffin cake bear claw icing.
                    </p>
                    <p>
                        Candy canes chocolate cake caramels bonbon sesame snaps
                        soufflé gummi bears powder chupa chups. Tiramisu oat
                        cake shortbread tootsie roll candy gingerbread. Carrot
                        cake halvah soufflé pudding macaroon marshmallow
                        marzipan carrot cake bonbon.
                    </p>
                    <h2 className="title is-2">Second Heading</h2>
                    <p>
                        Chocolate cake cotton candy chupa chups marzipan
                        topping. Caramels bonbon bonbon lollipop jujubes cupcake
                        cookie. Cookie tiramisu cake pie pudding chocolate cake
                        dessert carrot cake.
                    </p>
                    <p>
                        Brownie sweet roll chupa chups cotton candy marshmallow
                        pudding wafer. Donut macaroon danish topping pastry
                        brownie carrot cake. Pudding chocolate tootsie roll bear
                        claw toffee toffee bear claw. Biscuit tootsie roll sweet
                        roll caramels gingerbread toffee.
                    </p>
                    <h3 className="title is-3">Third Heading</h3>
                    <p>
                        Chocolate cake cotton candy chupa chups marzipan
                        topping. Caramels bonbon bonbon lollipop jujubes cupcake
                        cookie. Cookie tiramisu cake pie pudding chocolate cake
                        dessert carrot cake.
                    </p>
                    <p>
                        Brownie sweet roll chupa chups cotton candy marshmallow
                        pudding wafer. Donut macaroon danish topping pastry
                        brownie carrot cake. Pudding chocolate tootsie roll bear
                        claw toffee toffee bear claw. Biscuit tootsie roll sweet
                        roll caramels gingerbread toffee.
                    </p>
                </section>
            </div>
        </Layout>
    );
};

export default IndexPage;
export const Head = () => <SEO title="Home" />;
