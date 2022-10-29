import * as React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
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
    const { author } = useSiteMetadata();

    return (
        <div id="app-container">
            <NavBar />
            <main>{children}</main>
            <Footer author={author} />
        </div>
    );
};

export default Layout;
