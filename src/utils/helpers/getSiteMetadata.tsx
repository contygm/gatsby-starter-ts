import { useStaticQuery, graphql } from 'gatsby';

/**
 * a simple function to get all the site meta data from the `gatsby-config.ts` file
 * @function getSiteMetadata
 * @returns {SiteMetadata}
 */
export const getSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query SiteMetaData {
                site {
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
            }
        `
    );
    return site.siteMetadata;
};
