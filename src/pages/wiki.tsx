import React, { useEffect, useState } from 'react';
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

const WikiIndex = ({ data: { index, allTags } }: PageProps<WikiIndexProps>) => {
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
                title={`Wiki Index`}
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
