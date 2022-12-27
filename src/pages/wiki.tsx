import React from 'react';
import { graphql, HeadProps, PageProps } from 'gatsby';
import { Layout, PageHeader, SEO } from '../components/';
import PostPage from '../templates/post-page';

export interface WikiIndexProps {
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
            />
        </Layout>
    );
};

export default WikiIndex;
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
