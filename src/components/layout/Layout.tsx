import React from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { getSiteMetadata } from '../../utils/helpers/getSiteMetadata';
import '../../styles/main.scss';

/**
 * Layout props including only the children
 * @property {React.ReactNode} children - the content to be wrapped by layout component
 *
 * @see Layout
 * @category Components
 */
interface LayoutProps {
    children: React.ReactNode;
}

/**
 * Main layout wrapper for all pages. Includes navigation bar and footer. Passes author (from site meta data) to footer
 * @param children - the page content that's passed in
 *
 * @category Components
 * @see LayoutProps
 */
export const Layout = (props: LayoutProps) => {
    const { author } = getSiteMetadata();

    return (
        <div id="app-container">
            <NavBar />
            <main>{props.children}</main>
            <Footer author={author.name} />
        </div>
    );
};
