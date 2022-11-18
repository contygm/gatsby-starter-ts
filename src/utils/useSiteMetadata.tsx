import { useStaticQuery, graphql } from 'gatsby';

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
