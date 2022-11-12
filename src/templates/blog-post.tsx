import * as React from 'react';
import { Link, graphql, PageProps, HeadProps } from 'gatsby';
import Layout from '../components/Layout';
import { SEO } from '../components/SEO';
import PostHeader from '../components/PostHeader';
// import sanitizeHtml from 'sanitize-html'; TODO

type DataProps = {
    site: SiteMetadata;
    markdownRemark: PostElements;
    previous: NeighborPost;
    next: NeighborPost;
};

const BlogPost = ({
    data: { markdownRemark, previous, next }
}: PageProps<DataProps>) => {
    // const cleanHTML = sanitizeHtml(post.html);
    const cleanHTML = markdownRemark.html;

    return (
        <Layout>
            <article className="blog-post">
                <PostHeader title={markdownRemark.frontmatter.title} />
                <section
                    dangerouslySetInnerHTML={{ __html: cleanHTML }}
                    //   itemProp="articleBody"
                />
                <hr />
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
export function Head(props: HeadProps<DataProps>) {
	return (
		<SEO title={props.data.markdownRemark.frontmatter.title} />
	)
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
