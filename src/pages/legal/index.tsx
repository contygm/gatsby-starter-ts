import * as React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'gatsby';

const LegalPage = () => {
    return (
		<Layout>
			<article className="content has-text-left">
				<header className="section">
					<h1 className="title is-1">Legal Pages</h1>
					<p>
						Bonbon tootsie roll lemon drops topping biscuit cookie. Icing gummi bears ice cream marshmallow jelly brownie icing soufflé. Muffin cake halvah marshmallow carrot cake powder. Lemon drops muffin biscuit marzipan jujubes cupcake.
					</p>
				</header>
				<section className="section">
					<h2 className="title is-2">
						<Link to="/legal/privacy-policy">Privacy Policy</Link>
					</h2>
					<p>
						Bonbon tootsie roll lemon drops topping biscuit cookie. Icing gummi bears ice cream marshmallow jelly brownie icing soufflé.
					</p>
					<h2 className="title is-2">
						<Link className="" to="/legal/copyright">Copyright</Link>
					</h2>
					<p>
						Bonbon tootsie roll lemon drops topping biscuit cookie. Icing gummi bears ice cream marshmallow jelly brownie icing soufflé.
					</p>
					<h2 className="title is-2">
						<Link className="" to="/legal/cookie-policy">Cookie Policy</Link>
					</h2>
					<p>
						Bonbon tootsie roll lemon drops topping biscuit cookie. Icing gummi bears ice cream marshmallow jelly brownie icing soufflé.
					</p>
					<h2 className="title is-2">
						<Link className="" to="/legal/terms-and-conditions">Terms and Conditions</Link>
					</h2>
					<p>
						Bonbon tootsie roll lemon drops topping biscuit cookie. Icing gummi bears ice cream marshmallow jelly brownie icing soufflé.
					</p>
					<h2 className="title is-2">
						<Link className="" to="/legal/disclaimer">Disclaimer</Link>
					</h2>
					<p>
						Bonbon tootsie roll lemon drops topping biscuit cookie. Icing gummi bears ice cream marshmallow jelly brownie icing soufflé.
					</p>
				</section>
			</article>
			
		</Layout>
	);
}

export default LegalPage;