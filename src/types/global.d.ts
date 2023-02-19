export {};

declare global {
    type PostType = 'blog' | 'wiki' | 'glossary';

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
        tableOfContents: string;
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

    interface WikiPostElements {
        id: string;
        excerpt: string;
        html: string;
        tableOfContents: string;
        frontmatter: {
            title: string;
            date: string;
            description: string;
            related: Array<string>;
            tags: Array<string>;
            summary: Array<{
                field: string;
                value: string;
            }>;
            headerImage: {
                childImageSharp: {
                    gatsbyImageData: GatsbyImageProps.image;
                };
            };
        };
    }

    interface GlossaryElements {
        html: string;
        frontmatter: {
            title: string;
            letter: string;
            date: string;
            type: string;
            syllables: string;
            phonetics: string;
            similarWords: Array<string>;
            relatedPosts: Array<{
                title: string;
                slug: string;
            }>;
            tags: Array<string>;
        };
    }

    interface IndexElements {
        excerpt: string;
        fields: {
            slug: string;
        };
        frontmatter: {
            title: string;
            date: string;
            description: string;
            tags: Array<string>;
            headerImage: {
                childImageSharp: {
                    gatsbyImageData: GatsbyImageProps.image;
                };
            };
        };
    }
}
