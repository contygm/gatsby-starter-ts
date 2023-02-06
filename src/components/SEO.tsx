import React from 'react';
import { useSiteMetadata } from '../utils/useSiteMetadata';

export const SEO = (props: {
    title?: string;
    description?: string;
    children?: React.ReactNode;
}) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        image,
        siteUrl
    } = useSiteMetadata();

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
