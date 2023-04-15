import React from 'react';
import { graphql, HeadProps, PageProps } from 'gatsby';
import { Layout, PageHeader, SEO } from '../components/';
import PostPage from '../components/posts/PostIndex';

// TODO is this any different from the blog index?
/**
 * All props needed for the wiki index page. Props come from a graphQL page query.
 * @property {SiteMetadata} site - site meta data
 * @property {Object} allTags - all tags used
 * @property {Array<{fieldValue: string, totalCount: number}>} allTags.group - all tags used
 * @property {Object} index - indexElements for all wiki posts
 * @property {IndexElements[]} index.nodes - IndexElements for all wiki posts
 * @property {number} index.totalCount - total number of wiki posts
 * @property {Object} featured - featured wiki articles
 * @property {IndexElements[]} featured.nodes - featured wiki articles content
 *
 * @category Pages
 * @see IndexElements
 * @memberof WikiIndex
 */
export interface WikiIndexProps {
    site: SiteMetadata;
    allTags: {
        group: {
            fieldValue: string;
            totalCount: number;
        }[];
    };
    index: {
        nodes: IndexElements[];
        totalCount: number;
    };
    featured: {
        nodes: IndexElements[];
    };
}

/**
 * Basic wiki page including page header and PostPage component
 * @param {PageProps<WikiIndexProps>} data - all page query data
 * @param {WikiIndexProps.index} data.index - IndexElements for all wiki posts
 * @param {WikiIndexProps.allTags} data.allTags - all tags used in wiki posts
 *
 * @see WikiIndexProps
 * @see PostIndex
 * @see PageHeader
 * @class
 * @category Pages
 */
const WikiIndex = ({ data: { index, allTags } }: PageProps<WikiIndexProps>) => {
    return (
        <Layout>
            <PageHeader
                title={`Wiki Index`}
                alignCenter={true}
            />
            <PostPage
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
export function Head({ data: { site } }: HeadProps<WikiIndexProps>) {
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
