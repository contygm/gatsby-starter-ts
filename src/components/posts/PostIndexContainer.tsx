import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons';
import useCheckMobileScreen from '../../utils/hooks/useCheckMobileScreen';
import {
    Layout,
    PageHeader,
    SideBar,
    ToC,
    OutsideClicker,
    StickySocialMedia
} from '..';

/**
 * All properties of a basic post including content, frontmatter and header image. Accepts a type for markdown.
 *
 * @see IndexElements
 * @see PostType
 * @category Components
 * @memberof PostIndexContainer
 */
export interface PostIndexContainer<T> { 
    /** markdown and frontmatter for post */
    markdownRemark: T; 
    /** featured posts */
    featured: {
        nodes: IndexElements[];
    }; 
    /** related posts */
    related: {
        nodes: IndexElements[];
    }; 
    /** post type */
    postType: PostType;
    /** post index */
    children: React.ReactNode;
}

/**
 * A template for a blog post, including: sidebar, table of contents, blog content, and author section.
 * @param {PostIndexContainer<T>} props
 *
 * @category Components
 * @class
 */
const PostIndexContainer = <T extends WikiPostElements | BlogPostElements>(props: PostIndexContainer<T>) => {
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
            {/* full page header with social share */}
            <PageHeader
                title={props.markdownRemark.frontmatter.title}
                alignCenter={true}
                hasSocial={true}
                subtitle={props.markdownRemark.frontmatter.description}
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
                                tocHtml={props.markdownRemark.tableOfContents}
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
                    {props.children}
                </div>
                {/* 
                    side bar with related + featured posts 
                    and sticky social share btns 
                */}
                <div className="post-sidebar-wrapper">
                    <div className="post-sidebar">
                        <SideBar
                            type={props.postType}
                            featured={props.featured.nodes}
                            related={props.related?.nodes}
                        />
                    </div>
                    {!isMobile && <StickySocialMedia isVertical={false} />}
                    {isMobile && (
                        <StickySocialMedia isVertical={true} />
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default PostIndexContainer;