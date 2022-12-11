import React, { FunctionComponent } from 'react';
import { graphql, HeadProps, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import PostIndex from '../components/PostIndex';
import SearchFilterRow from '../components/SearchFilterRow';
import SEO from '../components/SEO';

export interface BlogIndexProps {
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

const BlogIndex: FunctionComponent<PageProps<BlogIndexProps>> = ({ data: { index, allTags } }: PageProps<BlogIndexProps>) => {
    const INCREMENT = 6;
    const tags = allTags.distinct;
    const allPosts = index.nodes;

    return (
        <Layout>
            <PageHeader
                title={`Blog Index`}
                alignCenter={true}
            />
            <SearchFilterRow tags={tags}/>
            <PostIndex allPosts={allPosts} increment={INCREMENT}/>
        </Layout>
    );
} 

export default BlogIndex;

export function Head({ data: { site } }: HeadProps<BlogIndexProps>) {
    return <SEO title={site.title} />;
}

export const pageQuery = graphql`
    query BlogQuery {
        site: site {
            ...SiteMetadata
        }
        allTags: allMarkdownRemark(filter: {frontmatter: {type: {eq: "blog"}}}) {
			distinct(field: frontmatter___tags)
		}
        index: allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { type: { eq: "blog" } } }
        ) {
            nodes {
                ...IndexElements
            }
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
