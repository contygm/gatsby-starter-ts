import React, { useEffect, useState } from 'react';
import { graphql, HeadProps, PageProps } from 'gatsby';
import {
    Layout,
    SEO,
    PageHeader,
    OutsideClicker,
    ToC,
    SideBar,
    StickySocialMedia
} from '../components';
import PostPage from '../components/posts/PostIndex';
import { faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons';
import useCheckMobileScreen from '../utils/hooks/useCheckMobileScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * All props needed for the glossary index page. Props come from a graphQL page query.
 * @property {SiteMetadata} site - site meta data
 * @property {Object} allTags - all tags used
 * @property {Array<{fieldValue: string, totalCount: number}>} allTags.group - all tags used
 * @property {Object} index - GlossaryElements for all glossary definitions
 * @property {GlossaryElements[]} index.nodes - GlossaryElements for all glossary definitions
 * @property {number} index.totalCount - total number of glossary definitions
 * @property {Object} blogFeatured - featured glossary articles
 * @property {IndexElements[]} blogFeatured.nodes - featured glossary articles content
 * @property {Object} wikiFeatured - featured glossary articles
 * @property {IndexElements[]} wikiFeatured.nodes - featured glossary articles content
 *
 * @see GlossaryElements
 * @see IndexElements
 * @memberof GlossaryPage
 * @category Pages
 */
export interface GlossaryPageProps {
    site: SiteMetadata;
    allTags: {
        group: {
            fieldValue: string;
            totalCount: number;
        }[];
    };
    index: {
        nodes: GlossaryElements[];
        totalCount: number;
    };
    allLetters: {
        group: {
            fieldValue: string;
        }[];
    };
    blogFeatured: {
        nodes: IndexElements[];
    };
    wikiFeatured: {
        nodes: IndexElements[];
    };
}

/**
 * A function that takes all the letters used in glossary definitions (sorted alphabetically) and
 * makes a table of contents based on these letters. Each letter will link to the appropriate header
 * on the glossary index page
 * @param {Array<{ fieldValue: string }>} letterObjs - All letters used by the glossary. Unused letters should not be included.
 * @return {string} - template string of ToC based on glossary letters
 *
 * @memberof GlossaryPage
 * @function makeGlossToC
 */
const makeGlossToC = (letterObjs: { fieldValue: string }[]) => {
    let letterElements = ``;

    letterObjs.forEach((letter) => {
        const letterListElement = `<li>\n<p><a href="#${letter.fieldValue}">${letter.fieldValue}</a></p>\n</li>`;
        letterElements += letterListElement;
    });

    const finalToC = `<ul>\n${letterElements}\n</ul>`;
    return finalToC;
};

/**
 * Glossary index page including page header, PostPage component, ToC, and sidebar.
 * @param {PageProps<GlossaryIndexProps>} data
 *
 * @see PostIndex
 * @see PageHeader
 * @see OutsideClicker
 * @see ToC
 * @class
 * @category Pages
 */
const GlossaryPage = ({
    data: { index, allTags, blogFeatured, wikiFeatured, allLetters }
}: PageProps<GlossaryPageProps>) => {
    const [showMobileToc, setShowMobileToc] = useState(false);
    const [isMobile, setIsMobile] = useState(useCheckMobileScreen());
    const [btnIcon, setBtnIcon] = useState(faEllipsis);

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
            <PageHeader
                title={`Glossary Index`}
                alignCenter={true}
            />
            <div className="col-multi-wrapper">
                {/* sticky table of contents */}
                <div className="glossary-toc">
                    <section
                        className={'glossary-toc-box'}
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
                                tocHtml={makeGlossToC(allLetters.group)}
                                includeTitle={false}
                            />
                        </OutsideClicker>
                    </section>
                    <button
                        id="toc-button"
                        className="primary-button-rounded"
                        style={{ display: isMobile ? 'block' : 'none' }}
                        onClick={handleTocBtnClick}
                        data-testid="post-toc-mobile-btn"
                    >
                        <i
                            className="icon"
                            id="icon-button"
                        >
                            <FontAwesomeIcon
                                className="icon"
                                icon={btnIcon}
                                size="xl"
                                id="toc-button-icon"
                            />
                        </i>
                    </button>
                </div>
                <div className="glossary-content-wrapper">
                    <PostPage
                        index={index}
                        allLetters={allLetters}
                        allTags={allTags}
                        type={'glossary'}
                    />
                </div>
                <div className="glossary-sidebar-wrapper">
                    {/* TODO featured are labeled as wiki, links for it go to wiki */}
                    <SideBar
                        type={'glossary'}
                        featured={wikiFeatured.nodes}
                        related={blogFeatured.nodes}
                    />
                    {/* TODO need mobile social */}
                    {!isMobile && <StickySocialMedia isVertical={false} />}
                </div>
            </div>
        </Layout>
    );
};
export default GlossaryPage;

/**
 * A basic component for SEO focused information
 * @param {HeadProps<GlossaryPageProps>} site - site meta data
 *
 * @see GlossaryPageProps
 * @memberof GlossaryPage
 */
export function Head({ data: { site } }: HeadProps<GlossaryPageProps>) {
    return <SEO title={site.title} />;
}

export const pageQuery = graphql`
    query GlossaryQuery {
        site: site {
            ...SiteMetadata
        }
        allTags: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "glossary" } } }
        ) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
        allLetters: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "glossary" } } }
        ) {
            group(field: frontmatter___letter) {
                fieldValue
            }
        }
        index: allMarkdownRemark(
            sort: { fields: [frontmatter___title], order: ASC }
            filter: { frontmatter: { type: { eq: "glossary" } } }
        ) {
            nodes {
                ...GlossaryElements
            }
            totalCount
        }
        blogFeatured: allMarkdownRemark(
            limit: 3
            sort: { fields: [frontmatter___letter], order: ASC }
            filter: {
                frontmatter: { type: { eq: "blog" }, featured: { eq: true } }
            }
        ) {
            nodes {
                ...IndexElements
            }
        }
        wikiFeatured: allMarkdownRemark(
            limit: 3
            sort: { fields: [frontmatter___letter], order: ASC }
            filter: {
                frontmatter: {
                    type: { eq: "glossary" }
                    featured: { eq: true }
                }
            }
        ) {
            nodes {
                ...IndexElements
            }
        }
    }
`;
