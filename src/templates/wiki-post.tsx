import React from 'react';
import { graphql, PageProps, HeadProps, Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { NextAndPrevious, SEO } from '../components';
import BaseballCard from '../components/common/BaseballCard';
import PostIndexContainer from '../components/posts/PostIndexContainer';

/**
 * A template for a wiki post, including: sidebar, table of contents, blog content, and author section.
 * @param {IndexFilterWrapperProps} data
 *
 * @category Template
 * @class
 */
const WikiPost = ({
    data: { markdownRemark, featured, related, next, previous }
}: PageProps<IndexFilterWrapperProps<WikiPostElements>>) => {
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
                <article className="wiki-post-article">
                    {/* baseball card */}
                    {image && (
                        <BaseballCard 
                            image={image}
                            summary={markdownRemark.frontmatter.summary}
                        />
                    )}
                    {/* main post content */}
                    <section className="">
                        <div
                            className="wiki-post-content"
                            dangerouslySetInnerHTML={{
                                __html: markdownRemark.html
                            }}
                        />
                    </section>
                    <section className="wiki-post-footer-wrapper">
                        <div className="wiki-post-footer">
                            <>
                                {markdownRemark.frontmatter.tags.map((tag) => {
                                    return (
                                        <Link
                                            to={`/wiki?tag=${tag}`}
                                            className="post-tag"
                                            key={tag}
                                        >
                                            {tag}
                                        </Link>
                                    );
                                })}
                            </>
                            <NextAndPrevious
                                next={next}
                                previous={previous}
                                type={'wiki'}
                            />
                        </div>
                    </section>
                </article>
            </div>
        </PostIndexContainer>
    );
};

export default WikiPost;

/**
 * A basic component for SEO focused information
 * @param {HeadProps<WikiPostProps>} site - site meta data
 *
 * @memberof WikiPost
 */
export function Head({ data: { markdownRemark } }: HeadProps<IndexFilterWrapperProps<BlogPostElements>>) {
    return <SEO title={markdownRemark.frontmatter.title} />;
}

export const pageQuery = graphql`
    query WikiPostBySlug(
        $id: String!
        $previousPostId: String
        $nextPostId: String
        $relatedPosts: [String]
    ) {
        site {
            ...SiteMetadata
        }
        markdownRemark(id: { eq: $id }) {
            ...WikiPostElements
        }
        related: allMarkdownRemark(
            filter: {
                fields: { slug: { in: $relatedPosts } }
                frontmatter: { type: { eq: "wiki" } }
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
                frontmatter: { type: { eq: "wiki" }, featured: { eq: true } }
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
