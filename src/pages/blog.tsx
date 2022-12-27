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

const INCREMENT = 6;

const BlogIndex: FunctionComponent<PageProps<BlogIndexProps>> = ({
    data: { index, allTags }
}: PageProps<BlogIndexProps>) => {
    
    const tags = allTags.group;
    const tagFromQuery = location.search.match(/(?<=\btag=)\w+/g);
    const unfilteredPosts = index.nodes;
    const [allPosts, setAllPosts] = useState(index.nodes);
    const [tagFilter, setTagFilter] = useState(
        tagFromQuery ? tagFromQuery[0] : 'all'
    );

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
                activeTag={tagFilter}
                totalPostCount={index.totalCount}
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
