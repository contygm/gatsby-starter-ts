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
 *
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
 * @category Template
 * @class
 *
 * @param {Object} data
 * @param {WikiPostElements} data.markdown - includes frontmatter, image, etc
 * @param {NeighborPost} data.previous - previous post (by date)
 * @param {NeighborPost} data.next - next post (by date)
 * @param {{nodes: IndexElements[]}} data.featured - featured blog posts
 * @param {{nodes: IndexElements[]}} data.related - related blog posts
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
            <div className="columns is-multiline">
                {/* sticky table of contents */}
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
                            <ToC
                                tocHtml={markdownRemark.tableOfContents}
                                includeTitle={true}
                            />
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
                    <article className="content mb-6">
                        {/* baseball card */}
                        {image && (
                            <section className="container mb-2 mt-6">
                                <div className="card baseball-card">
                                    <div className="card-content wiki-summary">
                                        <div className="media">
                                            <figure className="image baseball-card-img">
                                                <GatsbyImage
                                                    alt={'wiki-post-header'}
                                                    image={image}
                                                />
                                            </figure>
                                        </div>

                                        <div className="content has-text-centered">
                                            <p className="title is-5">Topic</p>
                                        </div>

                                        <div className="content has-text-left">
                                            <table className="table is-fullwidth">
                                                <tbody>
                                                    {markdownRemark.frontmatter.summary.map(
                                                        (attrObj) => {
                                                            return (
                                                                <tr
                                                                    key={
                                                                        attrObj.field
                                                                    }
                                                                    className={
                                                                        'wiki-summary-row'
                                                                    }
                                                                >
                                                                    <td className="has-text-weight-semibold">
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
                                className="container wiki-post-content"
                                dangerouslySetInnerHTML={{
                                    __html: markdownRemark.html
                                }}
                            />
                        </section>
                        {!isBigScreen && (
                            <StickySocialMedia isVertical={true} />
                        )}
                        <section className="section px-0">
                            <div className="container author-container">
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
                <div className="column mt-6 is-one-fifth-widescreen">
                    <div className="blog-sidebar">
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
