export {};

declare global {
    interface SiteMetadata {
        title: string;
        siteUrl: string;
        author: {
            name: string;
            description: string;
        };
        description: string;
        businessName: string;
        phone: string;
        email: string;
        image: string;
    }

    interface NeighborPost {
        fields: {
            slug: string;
        };
        frontmatter: {
            title: string;
        };
    }

    interface PostElements {
        id: string;
        excerpt: string;
        html: string;
        frontmatter: {
            title: string;
            date: string;
            description: string;
            related: Array<string>;
            tags: Array<string>;
            headerImage: {
                childImageSharp: {
                    gatsbyImageData: GatsbyImageProps.image;
                };
            };
        };
    }

    interface IndexElements {
        excerpt: string;
        fields: {
            slug: string;
        };
        frontmatter: {
            title: string;
            description: string;
            headerImage: {
                childImageSharp: {
                    gatsbyImageData: GatsbyImageProps.image;
                };
            };
        };
    }
}
