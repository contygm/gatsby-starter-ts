import React from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { useSiteMetadata } from '../../utils/useSiteMetadata';
import '../styles.scss';

interface LayoutProps {
    children: React.ReactNode;
}

/**
 * @description Main layout for site. Includes navigation bar
 * and a footer
 * @param children - the page content that's passed in
 */
export const Layout = ({ children }: LayoutProps) => {
    const { author } = useSiteMetadata();

    return (
        <div id="app-container">
            <NavBar />
            <main>{children}</main>
            <Footer author={author.name} />
        </div>
    );
};

// export default Layout;
