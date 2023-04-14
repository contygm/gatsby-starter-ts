import React from 'react';
import { getSiteMetadata } from '../../utils/helpers/getSiteMetadata';

/**
 * properties for reusable SEO component
 *
 * @property {string} [title] - page title
 * @property {string} [description] - page meta description
 * @property {React.ReactNode} [children] - the page contents
 *
 * @see SEO
 * @category Components
 */
interface SeoProps {
    title?: string;
    description?: string;
    children?: React.ReactNode;
}

/**
 * A reusable SEO wrapper for page components. This will give the page all attributes listed in SeoProps
 * @param {SeoProps} props - post details needed for SideBar tiles
 *
 * @category Components
 * @see SeoProps
 */
export const SEO = (props: SeoProps) => {
    // set the title + description from SiteMetaData as default title + desc
    const {
        title: defaultTitle,
        description: defaultDescription,
        image,
        siteUrl
    } = getSiteMetadata();

    // use provided title if it exists
    const seo = {
        title: props.title || defaultTitle,
        description: props.description || defaultDescription,
        image: `${siteUrl}${image}`
    };

    return (
        <>
            <title>{seo.title}</title>
            <meta
                name="description"
                content={seo.description}
            />
            <meta
                name="image"
                content={seo.image}
            />
            <link
                rel="icon"
                href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
            />
            {props.children}
        </>
    );
};
