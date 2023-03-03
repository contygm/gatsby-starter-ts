import { useStaticQuery, graphql } from 'gatsby';

// TODO: not a hook
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
