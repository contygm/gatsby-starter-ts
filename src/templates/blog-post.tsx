import * as React from 'react';
import { Link, graphql, PageProps, HeadProps } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import sanitizeHtml from 'sanitize-html';

export interface BlogPostProps {
    site: SiteMetadata;
    markdownRemark: PostElements;
    previous: NeighborPost;
    next: NeighborPost;
}

const BlogPost = ({
    data: { markdownRemark, previous, next }
}: PageProps<BlogPostProps>) => {
    // const cleanHTML = sanitizeHtml(markdownRemark.html);
    const image = getImage(markdownRemark.frontmatter.headerImage);
    return (
        <Layout>
            <PageHeader
                title={markdownRemark.frontmatter.title}
                alignCenter={true}
                hasSocial={true}
                subtitle={markdownRemark.frontmatter.description}
            />
            <article className="content">
                {image && (
                    <section className="container has-text-centered mb-2 mt-6">
                        <GatsbyImage
                            alt={'blog-post-header'}
                            image={image}
                            className="post-header-image"
                        />
                    </section>
                )}
                <section className="section">
                    <div
                        className="container is-max-widescreen"
                        dangerouslySetInnerHTML={{
                            __html: markdownRemark.html
                        }}
                    />
                </section>
                <section className="section">
                    <div className="container">
                        <p>This is where the author will go</p>
                    </div>
                </section>
            </article>
            <nav className="blog-post-nav">
                <ul>
                    <li>
                        {previous && (
                            <Link
                                to={`/blog${previous.fields.slug}`}
                                rel="prev"
                            >
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link
                                to={`/blog${next.fields.slug}`}
                                rel="next"
                            >
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </Layout>
    );
};

export default BlogPost;
export function Head({ data: { markdownRemark } }: HeadProps<BlogPostProps>) {
    return <SEO title={markdownRemark.frontmatter.title} />;
}

export const pageQuery = graphql`
    query BlogPostBySlug(
        $id: String!
        $previousPostId: String
        $nextPostId: String
    ) {
        site {
            ...SiteMetadata
        }
        markdownRemark(id: { eq: $id }) {
            ...PostElements
        }
        previous: markdownRemark(id: { eq: $previousPostId }) {
            ...NeighborPost
        }
        next: markdownRemark(id: { eq: $nextPostId }) {
            ...NeighborPost
        }
    }
`;
