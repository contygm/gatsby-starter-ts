import * as React from 'react';
import { graphql, PageProps, HeadProps } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import AuthorBlurb from '../components/AuthorBlurb';
// import sanitizeHtml from 'sanitize-html';

export interface BlogPostProps {
    site: {
        siteMetadata: SiteMetadata;
    };
    markdownRemark: PostElements;
    previous: NeighborPost;
    next: NeighborPost;
}

const BlogPost = ({
    data: { site, markdownRemark, previous, next }
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
            {/* TODO <aside></aside> */}
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
                {/* content section */}
                <section className="section">
                    <div
                        className="container is-max-widescreen"
                        dangerouslySetInnerHTML={{
                            __html: markdownRemark.html
                        }}
                    />
                </section>
                {/* author section */}
                <AuthorBlurb
                    author={site.siteMetadata.author}
                    postDate={markdownRemark.frontmatter.date}
                    postTags={markdownRemark.frontmatter.tags}
                    previousPost={previous}
                    nextPost={next}
                />
            </article>
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
