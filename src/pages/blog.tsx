import React, { FunctionComponent, useEffect, useState } from 'react';
import { graphql, HeadProps, PageProps } from 'gatsby';
import {
    Layout,
    SEO,
    PageHeader,
    SearchFilterRow,
    PostIndex
} from '../components';

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

const BlogIndex: FunctionComponent<PageProps<BlogIndexProps>> = ({
    data: { index, allTags }
}: PageProps<BlogIndexProps>) => {
    const INCREMENT = 6;
    const tags = allTags.distinct;
    const unfilteredPosts = index.nodes;
    const [allPosts, setAllPosts] = useState(index.nodes);
    const [tagFilter, setTagFilter] = useState('all');

    const handleFilterUpdate = (e: any) => {
        setTagFilter(e.target.id);
    };

    useEffect(() => {
        if (tagFilter === 'all') {
            setAllPosts(unfilteredPosts);
        } else {
            const filtered = unfilteredPosts.filter((post) =>
                post.frontmatter.tags.includes(tagFilter)
            );
            setAllPosts(filtered);
        }
    }, [tagFilter]);

    return (
        <Layout>
            <PageHeader
                title={`Blog Index`}
                alignCenter={true}
            />
            <SearchFilterRow
                tags={tags}
                handleFilterUpdate={handleFilterUpdate}
            />
            <PostIndex
                allPosts={allPosts}
                increment={INCREMENT}
                handleFilterUpdate={handleFilterUpdate}
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
