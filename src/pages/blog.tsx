import { Link, graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';
import PostHeader from '../components/PostHeader';
import SEO from '../components/SEO';

const BlogIndex = (props: { data: any }) => {
    const posts = props.data.index.nodes;
    return (
        <Layout>
            <PostHeader title={`Blog`} />
            <article className="content">
                <p>some content</p>
            </article>
            <section>
                <h2>All Blogs</h2>
                <ul>
                    {posts.map(
                        (post: {
                            frontmatter: {
                                title:
                                    | boolean
                                    | React.ReactElement<
                                          any,
                                          | string
                                          | React.JSXElementConstructor<any>
                                      >
                                    | React.ReactFragment
                                    | React.Key
                                    | null
                                    | undefined;
                            };
                            fields: { slug: any };
                        }) => {
                            return (
                                <li key={post.frontmatter.title}>
                                    <Link to={`/blog${post.fields.slug}`}>
                                        {post.frontmatter.title}
                                    </Link>
                                </li>
                            );
                        }
                    )}
                </ul>
            </section>
        </Layout>
    );
};

export default BlogIndex;
export const Head = () => <SEO title="Blog" />;

export const pageQuery = graphql`
    query BlogQuery {
        site: site {
            siteMetadata {
                title
            }
        }
        index: allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { type: { eq: "blog" } } }
        ) {
            nodes {
                excerpt
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    description
                    tags
                }
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
                excerpt
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    description
                    tags
                }
            }
        }
    }
`;
