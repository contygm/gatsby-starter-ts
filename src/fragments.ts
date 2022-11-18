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
        excerpt
        fields {
            slug
        }
        frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
        }
    }
    fragment PostElements on MarkdownRemark {
        id
        excerpt(pruneLength: 160)
        html
        frontmatter {
            title
            date(formatString: "DD MMMM YYYY, hh:mm a")
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
    fragment NeighborPost on MarkdownRemark {
        fields {
            slug
        }
        frontmatter {
            title
        }
    }
`;
