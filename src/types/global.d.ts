export {};

declare global {
    interface SiteMetadata {
        title: string;
        siteUrl: string;
        author: string;
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
            date: string;
            title: string;
            description: string;
            tags: Array<string>;
        };
    }
}
