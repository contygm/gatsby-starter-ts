import React from 'react';
import { graphql, HeadProps, PageProps } from 'gatsby';
import { Layout, PageHeader, SEO } from '../components/';
import IndexFilterWrapper from '../components/posts/IndexFilterWrapper';

/**
 * Basic wiki page including page header and IndexFilterWrapper component
 * @param {PageProps<WikiIndexProps>} data - all page query data
 * @param {WikiIndexProps.index} data.index - IndexElements for all wiki posts
 * @param {WikiIndexProps.allTags} data.allTags - all tags used in wiki posts
 *
 * @see WikiIndexProps
 * @see IndexFilterWrapper
 * @see PageHeader
 * @class
 * @category Pages
 */
const WikiIndex = ({ data: { index, allTags } }: PageProps<GenericPageProps>) => {
    return (
        <Layout>
            <PageHeader
                title={`Wiki Index`}
                alignCenter={true}
            />
            <IndexFilterWrapper
                index={index}
                allTags={allTags}
                type={'wiki'}
            />
        </Layout>
    );
};

export default WikiIndex;

/**
 * A basic component for SEO focused information
 * @param {HeadProps<WikiIndexProps>} site - site meta data
 *
 * @see WikiProps
 * @memberof WikiIndex
 */
export function Head({ data: { site } }: HeadProps<GenericPageProps>) {
    return <SEO title={site.title} />;
}

export const pageQuery = graphql`
    query WikiIndexQuery {
        site: site {
            ...SiteMetadata
        }
        allTags: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "wiki" } } }
        ) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
        index: allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { type: { eq: "wiki" } } }
        ) {
            nodes {
                ...IndexElements
            }
            totalCount
        }
        featured: allMarkdownRemark(
            limit: 5
            sort: { fields: [frontmatter___date], order: DESC }
            filter: {
                frontmatter: { type: { eq: "wiki" }, featured: { eq: true } }
            }
        ) {
            nodes {
                ...IndexElements
            }
        }
    }
`;
