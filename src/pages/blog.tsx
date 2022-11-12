import { Link, graphql, HeadProps, PageProps } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';
import PostHeader from '../components/PostHeader';
import SEO from '../components/SEO';

type BlogIndexProps = {
    site: SiteMetadata;
    index: {
        nodes: Array<IndexElements>;
    };
    featured: {
        nodes: Array<IndexElements>;
    };
};

const BlogIndex = ({ data: { index } }: PageProps<BlogIndexProps>) => {
    const posts = index.nodes;
    return (
        <Layout>
            <PostHeader title={`Blog`} />
            <article className="content">
                <p>some content</p>
            </article>
            <section>
                <h2>All Blogs</h2>
                <ul>
                    {posts.map((post: IndexElements) => {
                        return (
                            <li key={post.frontmatter.title}>
                                <Link to={`/blog${post.fields.slug}`}>
                                    {post.frontmatter.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </section>
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
