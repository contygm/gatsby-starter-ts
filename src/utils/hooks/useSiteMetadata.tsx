import { useStaticQuery, graphql } from 'gatsby';

// TODO: not a hook
/**
 * a quick hook to get all the site meta data from the `gatsby-config.ts` file
 * @function useSiteMetadata
 * @returns {SiteMetadata}
 */
export const useSiteMetadata = () => {
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
