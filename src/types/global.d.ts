export {};

declare global {
    interface SiteMetadata {
        title: string;
        siteUrl: string;
        author: string;
        businessName: string;
        phone: string;
        email: string;
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
            date: Date;
            description: string;
        };
    }

    interface IndexElements {
        excerpt: string;
        fields: {
            slug: string;
        };
        frontmatter: {
            date: Date;
            title: string;
            description: string;
            tags: Array<string>;
        };
    }
}
