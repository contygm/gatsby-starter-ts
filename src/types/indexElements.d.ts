/**
 * All frontmatter elements needed to make a card from a Glossary definition. Also all that is needed to display the full glossary definition.
 *
 * These 2 uses have been combined for this interface.
 * @category Index Elements
 */
interface GlossaryElements {
    /** the full html content of the glossary definition */
    html: string;
    /** the full frontmatter object for glossary card */
    frontmatter: {
        /** the word being defined */
        title: string;
        /** tags for the definition */
        tags: string[];
        /** publish date */
        date: string;
        /** post type, should always be glossary */
        type: PostType;
        /** first letter of the word */
        letter: string;
        /** syllable breakdown of word */
        syllables: string;
        /** phonetic breakdown of word */
        phonetics: string;
        /** similar words from glossary */
        similarWords: string[];
        /** related posts (wiki and glossary) */
        relatedPosts: Array<{
            /** post title */
            title: string;
            /** relative url for post */
            slug: string;
        }>;
    };
}

/**
 * All frontmatter elements needed to make a card from a Wiki or Blog post.
 * @category Index Elements
 */
interface IndexElements {
    /** post excerpt - first 60 char */
    excerpt: string;
    /** an object to hold fields related to the post */
    fields: {
        /** relative url for specific post */
        slug: string;
    };
    /** frontmatter needed to make card from wiki/blog */
    frontmatter: {
        /** post title */
        title: string;
        /** post date (DD MMMM YYYY) */
        date: string;
        /** list of tags used for post */
        tags: string[];
        /** type of post */
        type: PostType;
        /** post description (different from an excerpt) */
        description: string;
        /** post's header image data */
        headerImage: {
            childImageSharp: {
                gatsbyImageData: GatsbyImageProps.image;
            };
        };
    };
}
