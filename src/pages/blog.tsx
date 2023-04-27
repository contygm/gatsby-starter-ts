import React from 'react';
import { graphql, HeadProps, PageProps } from 'gatsby';
import { Layout, SEO, PageHeader } from '../components';
import IndexFilterWrapper from '../components/posts/IndexFilterWrapper';

/**
 * Basic wiki page including page header and IndexFilterWrapper component
 * @param {PageProps<GenericPageProps>} data - all page query data
 *
 * @see GenericPageProps
 * @see IndexFilterWrapper
 * @see PageHeader
 * @class
 * @category Pages
 */
const BlogIndex = ({
    location,
    data: { index, allTags }, 
}: PageProps<GenericPageProps>) => {
    return (
        <Layout>
            <PageHeader
                title={`Blog Index`}
                alignCenter={true}
            />
            <IndexFilterWrapper
                index={index}
                allTags={allTags}
                type={'blog'}
                location={location}
            />
        </Layout>
    );
};

export default BlogIndex;

/**
 * A basic component for SEO focused information
 * @param {HeadProps<GenericPageProps>} site - site meta data
 *
 * @see GenericPageProps
 * @memberof BlogIndex
 */
export function Head({ data: { site } }: HeadProps<GenericPageProps>) {
    return <SEO title={site.title} />;
}

export const pageQuery = graphql`
    query BlogQuery {
        site: site {
            ...SiteMetadata
        }
        allTags: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "blog" } } }
        ) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
        index: allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { type: { eq: "blog" } } }
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
                frontmatter: { type: { eq: "blog" }, featured: { eq: true } }
            }
        ) {
            nodes {
                ...IndexElements
            }
        }
    }
`;
