import React, { useEffect, useState } from 'react';
import { graphql, PageProps, HeadProps, Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons';
import useCheckMobileScreen from '../utils/hooks/useCheckMobileScreen';
import {
    Layout,
    PageHeader,
    SEO,
    SideBar,
    ToC,
    OutsideClicker,
    StickySocialMedia,
    NextAndPrevious
} from '../components';
import BaseballCard from '../components/common/BaseballCard';

/**
 * A template for a wiki post, including: sidebar, table of contents, blog content, and author section.
 * @param {PostIndexProps} data
 *
 * @category Template
 * @class
 */
const WikiPost = ({
    data: { markdownRemark, featured, related, next, previous }
}: PageProps<PostIndexProps<WikiPostElements>>) => {
    const [showMobileToc, setShowMobileToc] = useState(false);
    const [isMobile, setIsMobile] = useState(useCheckMobileScreen());
    const [btnIcon, setBtnIcon] = useState(faEllipsis);
    const image = getImage(markdownRemark.frontmatter.headerImage);

    const handleResize = () => {
        // mobile screen
        if (window.innerWidth < 1024) {
            setIsMobile(true);
        } else { // large or tablet screen
            
            setIsMobile(false);
            setShowMobileToc(false);
        }
    };

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

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    });

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
            <div className="col-multi-wrapper">
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
                        className="primary-button-rounded"
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
                        {isMobile && (
                            <StickySocialMedia isVertical={true} />
                        )}
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
                {/* 
                    side bar with related + featured posts 
                    and sticky social share btns 
                */}
                <div className="post-sidebar-wrapper">
                    <div className="post-sidebar">
                        <SideBar
                            type={'wiki'}
                            featured={featured.nodes}
                            related={related?.nodes}
                        />
                    </div>
                    {!isMobile && <StickySocialMedia isVertical={false} />}
                </div>
            </div>
        </Layout>
    );
};

export default WikiPost;

/**
 * A basic component for SEO focused information
 * @param {HeadProps<WikiPostProps>} site - site meta data
 *
 * @memberof WikiPost
 */
export function Head({ data: { markdownRemark } }: HeadProps<PostIndexProps<BlogPostElements>>) {
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
