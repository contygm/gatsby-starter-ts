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
    SideBar,
    ToC,
    OutsideClicker,
    StickySocialMedia,
    NextAndPrevious
} from '../components';

/**
 * All properties of a basic wiki post including content, frontmatter and header image
 * @property {{siteMetadata: SiteMetadata}} site - site metadata
 * @property {WikiPostElements} markdown - includes frontmatter, image, etc
 * @property {NeighborPost} previous - previous post (by date)
 * @property {NeighborPost} next - next post (by date)
 * @property {{nodes: IndexElements[]}} featured - featured blog posts
 * @property {{nodes: IndexElements[]}} related - related blog posts
 *
 * @see SiteMetadata
 * @see IndexElements
 * @see WikiPostElements
 * @see NeighborPost
 * @memberof WikiPost
 * @category Template
 */
// TODO same as blog mostly
export interface WikiPostProps {
    site: {
        siteMetadata: SiteMetadata;
    };
    markdownRemark: WikiPostElements;
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
 * A template for a wiki post, including: sidebar, table of contents, blog content, and author section.
 * @param {WikiPostProps} data
 *
 * @category Template
 * @class
 */
const WikiPost = ({
    data: { markdownRemark, featured, related, next, previous }
}: PageProps<WikiPostProps>) => {
    // const winSize = window.innerWidth <= 1215;
    const [showMobileToc, setShowMobileToc] = useState(false);
    const [isMobile, setIsMobile] = useState(useCheckMobileScreen());
    const [isBigScreen, setIsBigScreen] = useState(useCheckBigScreen());
    const [btnIcon, setBtnIcon] = useState(faEllipsis);
    const image = getImage(markdownRemark.frontmatter.headerImage);

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
                            <section className="baseball-card-wrapper">
                                {/* TODO component */}
                                <div className="baseball-card">
                                    <div className="baseball-card-summary">
                                        <div className="media">
                                            <figure className="baseball-card-img">
                                                <GatsbyImage
                                                    alt={'wiki-post-header'}
                                                    image={image}
                                                />
                                            </figure>
                                        </div>

                                        <div className="baseball-card-title-wrapper">
                                            <p className="baseball-card-title">
                                                Topic
                                            </p>
                                        </div>

                                        <div className="baseball-card-table-wrapper">
                                            <table className="baseball-card-table">
                                                <tbody>
                                                    {markdownRemark.frontmatter.summary.map(
                                                        (attrObj) => {
                                                            return (
                                                                <tr
                                                                    key={
                                                                        attrObj.field
                                                                    }
                                                                    className={
                                                                        'baseball-card-row'
                                                                    }
                                                                >
                                                                    <td className="baseball-card-table-label">
                                                                        {
                                                                            attrObj.field
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            attrObj.value
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            );
                                                        }
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </section>
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
                        {!isBigScreen && (
                            <StickySocialMedia isVertical={true} />
                        )}
                        {/* TODO need tags */}
                        <section className="wiki-post-footer-wrapper">
                            <div className="wiki-post-footer">
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
                    {isBigScreen && <StickySocialMedia isVertical={false} />}
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
export function Head({ data: { markdownRemark } }: HeadProps<WikiPostProps>) {
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
