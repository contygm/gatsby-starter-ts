import { graphql } from 'gatsby';

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
    fragment NeighborPost on MarkdownRemark {
        fields {
            slug
        }
        frontmatter {
            title
        }
    }
`;
