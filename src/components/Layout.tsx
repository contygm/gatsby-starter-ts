import * as React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { useStaticQuery, graphql } from 'gatsby';
import '../styles.scss';

interface LayoutProps {
    children: React.ReactNode;
}

/**
 * @description Main layout for site. Includes navigation bar
 * and a footer
 * @param children - the page content that's passed in
 */
const Layout = ({ children }: LayoutProps) => {
    // Pull author from site metadata to pass to footer
    const data = useStaticQuery(graphql`
        query AuthorQuery {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `);

    const author = data.site.siteMetadata.author;

    return (
        <div id="app-container">
            <NavBar />
            <main className="container">{children}</main>
            <Footer author={author} />
        </div>
    );
};

export default Layout;
