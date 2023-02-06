import React, { FunctionComponent, useEffect, useState } from 'react';
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
import PostPage from '../templates/post-page';
import { faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons';
import useCheckMobileScreen from '../utils/useCheckMobileScreen';
import useCheckBigScreen from '../utils/useCheckBigScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface GlossaryPageProps {
    site: SiteMetadata;
    allTags: {
        group: Array<{
            fieldValue: string;
            totalCount: number;
        }>;
    };
    index: {
        nodes: Array<GlossaryElements>;
        totalCount: number;
    };
    blogFeatured: {
        nodes: Array<IndexElements>;
    };
    wikiFeatured: {
        nodes: Array<IndexElements>;
    };
}

const GlossaryPage: FunctionComponent<PageProps<GlossaryPageProps>> = ({
    data: { index, allTags, blogFeatured, wikiFeatured }
}: PageProps<GlossaryPageProps>) => {
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
            {/* sticky table of contents */}
            <div className="columns ">
                <div className="column ">
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
                            {/* <ToC tocHtml={markdownRemark.tableOfContents} /> */}
                            <h2>TOC</h2>
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
                <div className="column is-four-fifths-desktop">
                    <PostPage
                        glossaryIndex={index}
                        allTags={allTags}
                        type={'glossary'}
                    />
                </div>
                <div className="column mr-1 mt-6 is-one-fifth-widescreen">
                    <div className="blog-sidebar">
                        <SideBar
                            featured={blogFeatured.nodes}
                            related={wikiFeatured.nodes}
                        />
                    </div>
                    {isBigScreen && <StickySocialMedia isVertical={false} />}
                </div>
            </div>
        </Layout>
    );
};
export default GlossaryPage;

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
            limit: 5
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
            limit: 5
            sort: { fields: [frontmatter___letter], order: ASC }
            filter: {
                frontmatter: { type: { eq: "wiki" }, featured: { eq: true } }
            }
        ) {
            nodes {
                ...IndexElements
            }
        }
    }
`;
