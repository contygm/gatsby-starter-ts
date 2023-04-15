import React from 'react';
import { graphql, PageProps, HeadProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { SEO, AuthorBlurb } from '../components';
import PostIndexContainer from '../components/posts/PostIndexContainer';

/**
 * A template for a blog post, including: sidebar, table of contents, blog content, and author section.
 * @param {IndexFilterWrapperProps<BlogPostElements>} data
 *
 * @category Template
 * @class
 */
const BlogPost = ({
    data: { site, markdownRemark, previous, next, featured, related }
}: PageProps<IndexFilterWrapperProps<BlogPostElements>>) => {
    const image = getImage(markdownRemark.frontmatter.headerImage);

    return (
        <PostIndexContainer
            tocHtml={markdownRemark.tableOfContents}
            title={markdownRemark.frontmatter.title}
            subtitle={markdownRemark.frontmatter.description}
            featured={featured}
            related={related}
            postType={'blog'}
        >
            <div className="post-article-wrapper">
                <article className="content">
                    {/* image header */}
                    {image && (
                        <section className="blog-post-header-wrapper">
                            <GatsbyImage
                                alt={'blog-post-header'}
                                image={image}
                                className="blog-post-header-image"
                            />
                        </section>
                    )}
                    {/* Table of Contents */}
                    <section className="section">
                        <div
                            className="container"
                            dangerouslySetInnerHTML={{
                                __html: markdownRemark.html
                            }}
                        />
                    </section>

                    {/* author, tags, and prev/next post nav */}
                    <AuthorBlurb
                        author={site.siteMetadata.author}
                        postDate={markdownRemark.frontmatter.date}
                        postTags={markdownRemark.frontmatter.tags}
                        previousPost={previous}
                        nextPost={next}
                    />
                </article>
            </div>
        </PostIndexContainer>
    );
};

export default BlogPost;

/**
 * A basic component for SEO focused information
 * @param {HeadProps<BlogPostProps>} site - site meta data
 *
 * @memberof BlogPost
 */
export function Head({
    data: { markdownRemark }
}: HeadProps<IndexFilterWrapperProps<BlogPostElements>>) {
    return <SEO title={markdownRemark.frontmatter.title} />;
}

export const pageQuery = graphql`
    query BlogPostBySlug(
        $id: String!
        $previousPostId: String
        $nextPostId: String
        $relatedPosts: [String]
    ) {
        site {
            ...SiteMetadata
        }
        markdownRemark(id: { eq: $id }) {
            ...PostElements
        }
        related: allMarkdownRemark(
            filter: {
                fields: { slug: { in: $relatedPosts } }
                frontmatter: { type: { eq: "blog" } }
            }
        ) {
            nodes {
                ...IndexElements
            }
        }
        featured: allMarkdownRemark(
            limit: 3
            sort: { fields: [frontmatter___date], order: DESC }
            filter: {
                frontmatter: { type: { eq: "blog" }, featured: { eq: true } }
            }
        ) {
            nodes {
                ...IndexElements
            }
        }
        previous: markdownRemark(id: { eq: $previousPostId }) {
            ...NeighborPost
        }
        next: markdownRemark(id: { eq: $nextPostId }) {
            ...NeighborPost
        }
    }
`;
