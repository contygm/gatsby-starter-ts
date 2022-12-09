import * as React from 'react';
import { graphql, PageProps, HeadProps } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import AuthorBlurb from '../components/AuthorBlurb';
import SideBar from '../components/SideBar';
import ToC from '../components/ToC';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons';
import OutsideClicker from '../components/OutsideClicker';
import StickySocialMedia from '../components/StickySocialMedia';
import useCheckMobileScreen from '../utils/useCheckMobileScreen';
import useCheckBigScreen from '../utils/useCheckBigScreen';

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
    // const winSize = window.innerWidth <= 1215;
    const [showMobileToc, setShowMobileToc] = useState(false);
    const [isMobile, setIsMobile] = useState(useCheckMobileScreen());
    const [isBigScreen, setIsBigScreen] = useState(useCheckBigScreen());
    const [btnIcon, setBtnIcon] = useState(faEllipsis);

    // TODO:
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

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    });

    const handleClickOutside = () => {
        setShowMobileToc(false);
        setBtnIcon(faEllipsis);
    };

    const handleTocBtnClick = () => {
        if (btnIcon === faEllipsis && !showMobileToc) {
            setShowMobileToc(true);
            setBtnIcon(faXmark);
        } else if (btnIcon === faXmark && showMobileToc) {
            setBtnIcon(faEllipsis);
            setShowMobileToc(false);
        }
    };

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
            {/* main body: ToC, sidebar, post content */}
            <div className="columns is-multiline">
                {/* stickey table of contetnts */}
                <div className="column blog-toc is-one-fifth-widescreen is-one-fifth-desktop is-narrow">
                    <section
                        className={
                            isMobile ? 'mobile-blog-toc' : 'web-blog-toc'
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
                            <ToC tocHtml={markdownRemark.tableOfContents} />
                        </OutsideClicker>
                    </section>
                    <button
                        className="button is-rounded is-primary"
                        style={{ display: isMobile ? 'block' : 'none' }}
                        onClick={handleTocBtnClick}
                        data-testid="blog-toc-mobile-btn"
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
                <div className="column is-three-fifths-widescreen is-four-fifths">
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
                <div className="column mt-6 is-one-fifth-widescreen">
                    <div className="blog-sidebar">
                        <SideBar
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
