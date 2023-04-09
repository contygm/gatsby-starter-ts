import React, { useEffect, useState } from 'react';
import { graphql, PageProps, HeadProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons';
import useCheckMobileScreen from '../utils/hooks/useCheckMobileScreen';
import useCheckBigScreen from '../utils/hooks/useCheckBigScreen';
import {
    Layout,
    PageHeader,
    SEO,
    AuthorBlurb,
    SideBar,
    ToC,
    OutsideClicker,
    StickySocialMedia
} from '../components';

/**
 * All properties of a basic blog post including content, frontmatter and header image
 * @property {{siteMetadata: SiteMetadata}} site - site metadata
 * @property {BlogPostElements} markdown - includes frontmatter, image, etc
 * @property {NeighborPost} previous - previous post (by date)
 * @property {NeighborPost} next - next post (by date)
 * @property {{nodes: IndexElements[]}} featured - featured blog posts
 * @property {{nodes: IndexElements[]}} related - related blog posts
 *
 * @see SiteMetadata
 * @see IndexElements
 * @see PostElements
 * @see NeighborPost
 * @memberof BlogPost
 * @category Template
 */
export interface BlogPostProps {
    site: {
        siteMetadata: SiteMetadata;
    };
    markdownRemark: BlogPostElements;
    previous: NeighborPost;
    next: NeighborPost;
    featured: {
        nodes: IndexElements[];
    };
    related: {
        nodes: IndexElements[];
    };
}

/**
 * A template for a blog post, including: sidebar, table of contents, blog content, and author section.
 * @param {BlogPostProps} data
 * 
 * @category Template
 * @class
 */
const BlogPost = ({
    data: { site, markdownRemark, previous, next, featured, related }
}: PageProps<BlogPostProps>) => {
    // const winSize = window.innerWidth <= 1215;
    const [showMobileToc, setShowMobileToc] = useState(false);
    const [isMobile, setIsMobile] = useState(useCheckMobileScreen());
    const [isBigScreen, setIsBigScreen] = useState(useCheckBigScreen());
    const [btnIcon, setBtnIcon] = useState(faEllipsis);
    const image = getImage(markdownRemark.frontmatter.headerImage);

    // TODO: generally gross
    // TODO: move to joint function/component cuz same as wiki
    const handleResize = () => {
        if (window.innerWidth < 1024) {
            // mobile screen
            setIsMobile(true);
            setIsBigScreen(false);
        } else if (1024 <= window.innerWidth && window.innerWidth <= 1215) {
            // medium screen
            setIsMobile(false);
            setIsBigScreen(false);
            setShowMobileToc(false);
        } else {
            // large screen
            setIsMobile(false);
            setShowMobileToc(false);
            setIsBigScreen(true);
        }
    };

    // TODO: move to joint function/component cuz same as wiki
    const handleClickOutside = () => {
        setShowMobileToc(false);
        setBtnIcon(faEllipsis);
    };

    // TODO: move to joint function/component cuz same as wiki
    const handleTocBtnClick = () => {
        if (btnIcon === faEllipsis && !showMobileToc) {
            setShowMobileToc(true);
            setBtnIcon(faXmark);
        } else if (btnIcon === faXmark && showMobileToc) {
            setBtnIcon(faEllipsis);
            setShowMobileToc(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    });

    return (
        <Layout>
            {/* TODO: move to joint function/component cuz same as wiki */}
            {/* full page header with social share */}
            <PageHeader
                title={markdownRemark.frontmatter.title}
                alignCenter={true}
                hasSocial={true}
                subtitle={markdownRemark.frontmatter.description}
            />
            {/* main body: ToC, sidebar, post content */}
            <div className="col-multi-wrapperr">
                {/* sticky table of contents */}
                <div className="post-toc">
                    <section
                        className={
                            isMobile ? 'mobile-post-toc' : 'web-post-toc'
                        }
                        style={{
                            display:
                                !isMobile || (isMobile && showMobileToc)
                                    ? 'block'
                                    : 'none'
                        }}
                    >
                        <OutsideClicker
                            callback={isMobile ? handleClickOutside : undefined}
                        >
                            <ToC
                                tocHtml={markdownRemark.tableOfContents}
                                includeTitle={true}
                            />
                        </OutsideClicker>
                    </section>
                    <button
                        className="post-toc-mobile-btn"
                        style={{ display: isMobile ? 'block' : 'none' }}
                        onClick={handleTocBtnClick}
                        data-testid="post-toc-mobile-btn"
                    >
                        <i className="icon">
                            <FontAwesomeIcon
                                className="icon"
                                icon={btnIcon}
                                size="xl"
                                id="toc-button"
                            />
                        </i>
                    </button>
                </div>
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
                        {!isBigScreen && (
                            <StickySocialMedia isVertical={true} />
                        )}

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
                <div className="post-sidebar-wrapper">
                    <div className="post-sidebar">
                        <SideBar
                            type={'blog'}
                            featured={featured.nodes}
                            related={related?.nodes}
                        />
                    </div>
                    {isBigScreen && <StickySocialMedia isVertical={false} />}
                </div>
            </div>
        </Layout>
    );
};

export default BlogPost;

/**
 * A basic component for SEO focused information
 * @param {HeadProps<BlogPostProps>} site - site meta data
 *
 * @memberof BlogPost
 */
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
