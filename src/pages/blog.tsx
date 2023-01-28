import React, { FunctionComponent } from 'react';
import { graphql, HeadProps, PageProps } from 'gatsby';
import { Layout, SEO, PageHeader } from '../components';
import PostPage from '../templates/post-page';

export interface BlogIndexProps {
    site: SiteMetadata;
    allTags: {
        group: Array<{
            fieldValue: string;
            totalCount: number;
        }>;
    };
    index: {
        nodes: Array<IndexElements>;
        totalCount: number;
    };
    featured: {
        nodes: Array<IndexElements>;
    };
}

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
