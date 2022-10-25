import * as React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'gatsby';
import PageHeader from '../../components/PageHeader';

const LegalPage = () => {
    return (
		<Layout>
			<PageHeader title="Legal Pages" />
			<section className="section">
				<div className="container">
					<div className="notification">
						<h2 className="title is-2">
							<Link to="/legal/privacy-policy">Privacy Policy</Link>
						</h2>
						<p>
							Bonbon tootsie roll lemon drops topping biscuit cookie. Icing gummi bears ice cream marshmallow jelly brownie icing soufflé.
						</p>
					</div>
					<div className="notification">
						<h2 className="title is-2">
							<Link className="" to="/legal/copyright">Copyright</Link>
						</h2>
						<p>
							Bonbon tootsie roll lemon drops topping biscuit cookie. Icing gummi bears ice cream marshmallow jelly brownie icing soufflé.
						</p>
					</div>
					<div className="notification">
						<h2 className="title is-2">
							<Link className="" to="/legal/cookie-policy">Cookie Policy</Link>
						</h2>
						<p>
							Bonbon tootsie roll lemon drops topping biscuit cookie. Icing gummi bears ice cream marshmallow jelly brownie icing soufflé.
						</p>
					</div>
					<div className="notification">
						<h2 className="title is-2">
							<Link className="" to="/legal/terms-and-conditions">Terms and Conditions</Link>
						</h2>
						<p>
							Bonbon tootsie roll lemon drops topping biscuit cookie. Icing gummi bears ice cream marshmallow jelly brownie icing soufflé.
						</p>
					</div>
					<div className="notification">
						<h2 className="title is-2">
							<Link className="" to="/legal/disclaimer">Disclaimer</Link>
						</h2>
						<p>
							Bonbon tootsie roll lemon drops topping biscuit cookie. Icing gummi bears ice cream marshmallow jelly brownie icing soufflé.
						</p>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default LegalPage;