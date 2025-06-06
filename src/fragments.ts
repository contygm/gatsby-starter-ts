import { graphql } from 'gatsby';

/**
 * These fragments are a gatsby set up to allow reusable queries. The fragments need to be aligned with their corresponding types.
 *
 * @see SiteMetadata
 * @see IndexElements
 * @see GlossaryElements
 * @see PostElements
 * @see WikiPostElements
 * @see NeighborPost
 */
export const fragments = graphql`
    fragment SiteMetadata on Site {
        siteMetadata {
            title
            siteUrl
            author {
                name
                description
            }
            businessName
            phone
            email
        }
    }
    fragment IndexElements on MarkdownRemark {
        excerpt(pruneLength: 60)
        fields {
            slug
        }
        frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            description
            tags
            type
            headerImage {
                childImageSharp {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                    )
                }
            }
        }
    }

    fragment GlossaryElements on MarkdownRemark {
        html
        frontmatter {
            title
            letter
            date(formatString: "DD MMMM YYYY")
            type
            syllables
            phonetics
            similarWords
            relatedPosts {
                title
                slug
            }
            tags
        }
    }

    fragment PostElements on MarkdownRemark {
        id
        excerpt(pruneLength: 160)
        tableOfContents
        html
        frontmatter {
            title
            date(formatString: "DD MMMM YYYY, hh:mm a")
            description
            related
            tags
            headerImage {
                childImageSharp {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                    )
                }
            }
        }
    }

    fragment WikiPostElements on MarkdownRemark {
        id
        excerpt(pruneLength: 160)
        tableOfContents
        html
        frontmatter {
            title
            date(formatString: "DD MMMM YYYY, hh:mm a")
            description
            related
            tags
            summary {
                field
                value
            }
            headerImage {
                childImageSharp {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                    )
                }
            }
        }
    }

    fragment NeighborPost on MarkdownRemark {
        fields {
            slug
        }
        frontmatter {
            title
        }
    }
`;
