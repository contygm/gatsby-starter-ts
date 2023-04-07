import React, { FunctionComponent } from 'react';
import { graphql, HeadProps, PageProps } from 'gatsby';
import { Layout, SEO, PageHeader } from '../components';
import PostPage from '../templates/post-page';

/**
 * All props needed for the blog index page. Props come from a graphQL page query.
 * @property {SiteMetadata} site - site meta data
 * @property {Object} allTags - all tags used
 * @property {{fieldValue: string, totalCount: number}[]} allTags.group - all tags used
 * @property {Object} index - indexElements for all blog posts
 * @property {IndexElements[]} index.nodes - IndexElements for all blog posts
 * @property {number} index.totalCount - total number of blog posts
 * @property {Object} featured - featured blog articles
 * @property {IndexElements[]} featured.nodes - featured blog articles content
 * @memberof BlogIndex
 * @category Pages
 */
export interface BlogIndexProps {
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
 * @class
 * @category Pages
 *
 * @param {PageProps<BlogIndexProps>} data - all page query data
 * @param {BlogIndexProps.index} data.index - IndexElements for all wiki posts
 * @param {BlogIndexProps.allTags} data.allTags - all tags used in wiki posts
 *
 * @see IndexElements
 * @see PostIndex
 * @see PageHeader
 */
const BlogIndex: FunctionComponent<PageProps<BlogIndexProps>> = ({
    data: { index, allTags }
}: PageProps<BlogIndexProps>) => {
    return (
        <Layout>
            <PageHeader
                title={`Blog Index`}
                alignCenter={true}
            />
            <PostPage
                index={index}
                allTags={allTags}
                type={'blog'}
            />
        </Layout>
    );
};

export default BlogIndex;

/**
 * A basic component for SEO focused information
 * @param {HeadProps<BlogIndexProps>} site - site meta data
 *
 * @see BlogIndexProps
 * @memberof BlogIndex
 */
export function Head({ data: { site } }: HeadProps<BlogIndexProps>) {
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
