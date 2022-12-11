import React from 'react';
import { graphql, HeadProps, PageProps } from 'gatsby';
import {
    Layout,
    PageHeader,
    PostIndex,
    SearchFilterRow,
    SEO
} from '../components/';

export interface WikiIndexProps {
    site: SiteMetadata;
    allTags: {
        distinct: Array<string>;
    };
    index: {
        nodes: Array<IndexElements>;
    };
    featured: {
        nodes: Array<IndexElements>;
    };
}

const WikiIndex = ({ data: { index, allTags } }: PageProps<WikiIndexProps>) => {
    const INCREMENT = 6;
    const tags = allTags.distinct;
    const allPosts = index.nodes;

    return (
        <Layout>
            <PageHeader
                title={`Wiki Index`}
                alignCenter={true}
            />
            <SearchFilterRow tags={tags} />
            <PostIndex
                allPosts={allPosts}
                increment={INCREMENT}
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
            distinct(field: frontmatter___tags)
        }
        index: allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { type: { eq: "wiki" } } }
        ) {
            nodes {
                ...IndexElements
            }
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
