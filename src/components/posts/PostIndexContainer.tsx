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
export interface PostIndexContainer {
    /** table of contents html string  */
    tocHtml: string;
    /** post title */
    title: string;
    /** post subtitle */
    subtitle: string;
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
 * @param {PostIndexContainer} props
 *
 * @category Components
 * @class
 */
const PostIndexContainer = (props: PostIndexContainer) => {
    const [showMobileToc, setShowMobileToc] = useState(false);
    const [isMobile, setIsMobile] = useState(useCheckMobileScreen());
    const [btnIcon, setBtnIcon] = useState(faEllipsis);

    const isGloss = props.postType === 'glossary';
    const tocClassName = isGloss ? 'glossary-toc' : 'post-toc';
    const tocSectionClassName = isGloss
        ? 'glossary-toc-box'
            : isMobile
            ? 'mobile-post-toc'
            : 'web-post-toc';

    const handleResize = () => {
        // mobile screen
        if (window.innerWidth < 1024) {
            setIsMobile(true);
        } else {
            // large or tablet screen
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
                title={props.title}
                alignCenter={true}
                hasSocial={true}
                subtitle={props.subtitle}
            />
            {/* main body: ToC, sidebar, post content */}
            <div className="col-multi-wrapper">
                {/* sticky table of contents */}
                <div className={tocClassName}>
                    <section
                        className={tocSectionClassName}
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
                                tocHtml={props.tocHtml}
                                includeTitle={!isGloss}
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
                <>{props.children}</>
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
                        {/* <StickySocialMedia isVertical={isMobile} /> */}
                    </div>
                    <StickySocialMedia isVertical={isMobile} />
                </div>
            </div>
        </Layout>
    );
};

export default PostIndexContainer;
