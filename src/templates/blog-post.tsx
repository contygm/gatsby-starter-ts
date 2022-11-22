import * as React from 'react';
import { graphql, PageProps, HeadProps } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import AuthorBlurb from '../components/AuthorBlurb';
import SideBar from '../components/SideBar';
import ToC from '../components/ToC';
// import sanitizeHtml from 'sanitize-html';

export interface BlogPostProps {
    site: {
        siteMetadata: SiteMetadata;
    };
    markdownRemark: PostElements;
    previous: NeighborPost;
    next: NeighborPost;
    featured: {
        nodes: Array<IndexElements>;
    };
    related: {
        nodes: Array<IndexElements>;
    };
}

const BlogPost = ({
    data: { site, markdownRemark, previous, next, featured, related }
}: PageProps<BlogPostProps>) => {
    // const cleanHTML = sanitizeHtml(markdownRemark.html);
    const image = getImage(markdownRemark.frontmatter.headerImage);
    return (
        <Layout>
            {/* full page header with social share */}
            <PageHeader
                title={markdownRemark.frontmatter.title}
                alignCenter={true}
                hasSocial={true}
                subtitle={markdownRemark.frontmatter.description}
            />
            <div className="columns is-desktop">
                {/* stickey table of contetnts */}
                <div className="column">
                    <section className="blog-toc pb-0 mt-5 sticky">
                        <ToC tocHtml={markdownRemark.tableOfContents} />
                    </section>
                </div>
                <div className="column is-three-fifths-desktop">
                    <article className="content">
                        {/* image header */}
                        {image && (
                            <section className="container has-text-centered mb-2 mt-6">
                                <GatsbyImage
                                    alt={'blog-post-header'}
                                    image={image}
                                    className="post-header-image"
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
                {/* 
                    side bar with related + featured posts 
                    and sticky social share btns 
                */}
                <div className="column mr-3 mt-6">
                    <SideBar
                        featured={featured.nodes}
                        related={related?.nodes}
                    />
                </div>
            </div>
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
