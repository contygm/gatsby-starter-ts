import { Link, graphql, HeadProps, PageProps } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

export interface BlogIndexProps {
    site: SiteMetadata;
    index: {
        nodes: Array<IndexElements>;
    };
    featured: {
        nodes: Array<IndexElements>;
    };
}

const BlogIndex = ({ data: { index } }: PageProps<BlogIndexProps>) => {
    const posts = index.nodes;
    return (
        <Layout>
            <PageHeader
                title={`Blog Index`}
                alignCenter={true}
            />
            <article className="section">            
                <section className='container is-max-desktop'>
                    <div className="columns is-multiline is-centered">
                        {posts.map((post: IndexElements) => {
                            return (
                                <div className='column is-4' key={post.frontmatter.title}>
                                    <div className="card" >
                                        <div className="card-image">
                                        <span className="tag is-primary sticky-tag">{post.frontmatter.tags[0]}</span>
                                            <figure className="image is-4by3 blog-card-image">
                                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                            </figure>
                                        </div>
                                        <div className="card-content">
                                            <div className="media">
                                                <div className="media-content">
                                                    <p className="title is-4">{post.frontmatter.title}</p>
                                                    <p className="subtitle is-6"><time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time></p>
                                                </div>
                                            </div>

                                            <div className="content">
                                                <p>
                                                    {post.frontmatter.description}
                                                </p>
                                                
                                                <Link to={`/blog${post.fields.slug}`}>
                                                    Read more...
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </article>
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
