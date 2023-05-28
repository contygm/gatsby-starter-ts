import React, { useEffect, useState } from 'react';
import { SEO, Layout } from '../components';
import { graphql, Link, HeadProps, PageProps } from 'gatsby';
import { DefinitionCard } from '../components/common/DefinitionCard';
import useCheckMobileScreen from '../utils/hooks/useCheckMobileScreen';

/**
 * All props needed for the site-wide home page
 * @property {SiteMetadata} site - site meta data
 * @property {{node: IndexElements[]}} blogFeatured - an array of featured blog info
 * @property {{node: IndexElements[]}} wikiFeatured - an array of featured wiki info
 * @property {{node: GlossaryElements[]}} glossaryFeatured - an array of featured glossary info
 *
 * @see IndexElements
 * @see GlossaryElements
 * @see SiteMetadata
 * @memberof HomePage
 * @category Pages
 */
export interface HomeProps {
    site: SiteMetadata;
    blogFeatured: {
        nodes: IndexElements[];
    };
    wikiFeatured: {
        nodes: IndexElements[];
    };
    glossaryFeatured: {
        nodes: GlossaryElements[];
    };
}

/**
 * A horizontal tile for blog overview information including:
 * - blog header image
 * - blog title
 * - blog publication date
 * - blog description
 * - link to post
 *
 * The image is on the left and the rest of the info sites on the right
 * @param {{ post: IndexElements }} props - a single blog with Index Elements
 *
 * @see IndexElements
 * @memberof HomePage
 */
const BlogTile = (props: { post: IndexElements, isMobile: boolean }) => {
    return (
        <Link 
            className="home-blog-tile"
            to={`/blog${props.post.fields.slug}`}
        >
            <div className="home-blog-tile-fig-wrapper">
                <figure className="home-blog-tile-fig">
                    <p className="home-blog-tile-image-wrapper">
                        <img src="https://bulma.io/images/placeholders/128x128.png" alt={`image for ${props.post.frontmatter.title}`}/>
                    </p>
                </figure>
                <div className="home-blog-tile-content">
                    <div className="content">
                        <p className="title-four">
                            {props.post.frontmatter.title}
                        </p>
                        <p className="subtitle-six">
                            <time dateTime={props.post.frontmatter.date}>
                                {props.post.frontmatter.date}
                            </time>
                        </p>
                        {
                             !props.isMobile && 
                             <div>
                                <p>{props.post.frontmatter.description}</p>
                                <button className='home-read-more-btn'>
                                    Read more...
                                </button>
                             </div>
                        }
                    </div>
                </div>
            </div>
        </Link>
    );
};

/**
 * A vertical tile for wiki overview information including:
 * - wiki header image
 * - wiki title
 * - wiki publication date
 * - wiki description
 * - link to post
 *
 * The image is on the left and the rest of the info sites on the right
 * @param {{ post: IndexElements }} props - a single wiki with Index Elements
 *
 * @see IndexElements
 * @memberof HomePage
 */
const WikiTile = (props: { post: IndexElements }) => {
    return (
        <Link 
            to={`/wiki${props.post.fields.slug}`} 
        >
            <div className="card">
                <div className="card-image">
                    <figure className="image">
                        <p className="is-128x128">
                            <img src="https://bulma.io/images/placeholders/128x128.png" alt={`image for ${props.post.frontmatter.title}`}/>
                        </p>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">
                        <p className="title-four">{props.post.frontmatter.title}</p>
                        <p className="subtitle-six">
                            <time dateTime={props.post.frontmatter.date}>
                                {props.post.frontmatter.date}
                            </time>
                        </p>
                        <p>{props.post.frontmatter.description}</p>
                        <button className='home-read-more-btn'>
                            Read more...
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

/**
 * A component for the feature tile layout on the home page. Displays one large tile to the
 * left and a column for the remaining tiles to the right.
 * @param {{node: IndexElements[]}} props - featured posts at the site wide level
 *
 * @see IndexElements
 * @memberof HomePage
 */
const FeaturedTiles = (props: { nodes: IndexElements[], isMobile: boolean }) => {
    return (
        <div className="home-new-tile-section-wrapper">
            <Link
                to={`/${props.nodes[0].frontmatter.type}${props.nodes[0].fields.slug}`}
                className="home-new-tile-main-wrapper"
            >
                <div className="home-new-tile-card">
                    <div className="card-image">
                        <figure className="home-new-tile-main-card-image">
                            <img src="https://bulma.io/images/placeholders/128x128.png" alt='main featured blog image'/>
                        </figure>
                    </div>
                    <div className="home-new-tile-card-content-overlay">
                        <div className="content">
                            <p className="home-new-tile-card-content-title">
                                {props.nodes[0].frontmatter.title}
                            </p>
                            <p className="home-new-tile-card-content-subtitle">
                                <time
                                    dateTime={props.nodes[0].frontmatter.date}
                                >
                                    {props.nodes[0].frontmatter.date}
                                </time>
                            </p>
                            {
                                !props.isMobile && 
                                <div>
                                    <p className="home-new-tile-card-content-description">
                                        {props.nodes[0].frontmatter.description}
                                    </p>
                                    <button className='home-read-more-btn'>
                                        Read more...
                                    </button>
                                </div>  
                            }
                        </div>
                    </div>
                    <div className="home-new-tile-card-tag-wrapper">
                        <span className={props.isMobile ? 'home-new-tile-card-tag' : 'home-new-tile-main-card-tag'}>
                            FEATURED
                        </span>
                    </div>
                </div>
            </Link>
            <div className="home-new-tile-side-wrapper">
                <div className="">
                    {props.nodes
                        .slice(1)
                        .map((post: IndexElements, i: number) => {
                            return (
                                <Link
                                    to={`/${post.frontmatter.type}${post.fields.slug}`}
                                    key={post.frontmatter.title}
                                >
                                    <div
                                        className={`home-new-tile-card ${
                                            i === props.nodes.length - 2
                                                ? 'mb-0'
                                                : 'mb-5'
                                        }`}
                                    >
                                        <div className="card-image">
                                            <figure className="image is-5by3 ">
                                                <img src="https://bulma.io/images/placeholders/128x128.png" alt={`featured image for ${post.frontmatter.title}`}/>
                                            </figure>
                                        </div>
                                        <div className="home-new-tile-card-content-overlay">
                                            <div className="content">
                                                <p className="home-new-tile-card-content-title-small">
                                                    {post.frontmatter.title}
                                                </p>
                                                <p className="home-new-tile-card-content-subtitle">
                                                    <time
                                                        dateTime={
                                                            post.frontmatter
                                                                .date
                                                        }
                                                    >
                                                        {post.frontmatter.date}
                                                    </time>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="home-new-tile-card-tag-wrapper">
                                            <span className="home-new-tile-card-tag">
                                                FEATURED
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

/**
 * The home page component contains the full layout for the site-wide home page. This is what displays
 * at `www.site-url.com`. This contains featured sections for each post type: wiki, glossary, and blog.
 * Above this, a site wide featured section displays those posts (currently only compatible with wiki and blogs).
 * @param {Object} data
 * @param {{node: IndexElements[]}} data.blogFeatured - an array of featured blog info
 * @param {{node: IndexElements[]}} data.wikiFeatured - an array of featured wiki info
 * @param {{node: GlossaryElements[]}} data.glossaryFeatured - an array of featured glossary info
 *
 * @see HomeProps
 * @class
 * @category Pages
 */
const HomePage = ({
    data: { blogFeatured, wikiFeatured, glossaryFeatured }
}: PageProps<HomeProps>) => {
    const [isMobile, setIsMobile] = useState(useCheckMobileScreen(1024));

    const handleResize = () => {
        setIsMobile(useCheckMobileScreen(1024))
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    }, [window]);

    return (
        <Layout>
            {/* T */}
            <section className="home-page-header">
                <div className="hero-head">
                    <div className="home-page-header-title-wrapper">
                        <p className="home-title">{'Welcome!'}</p>
                        <p className="home-subtitle">
                            A subtitle describing the site
                        </p>
                    </div>
                </div>
                <div className="hero-body">
                    <div className="container">
                        <FeaturedTiles nodes={blogFeatured.nodes} isMobile={isMobile}/>
                    </div>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="level">
                        <div className="level-left">
                            <h2 className="title">Blog Posts</h2>
                        </div>
                    </div>
                    <div className="col-multi-wrapper">
                        {blogFeatured.nodes.map((post: IndexElements) => {
                            return (
                                <div
                                    className="half-col"
                                    key={post.frontmatter.title}
                                >
                                    <BlogTile post={post} isMobile={isMobile}/>
                                </div>
                            );
                        })}
                    </div>
                </section>
                <section className="section">
                    <div className="level">
                        <div className="level-left">
                            <h2 className="title">Wiki Posts</h2>
                        </div>
                    </div>
                    <div className="home-wiki-content">
                        {wikiFeatured.nodes.map((post: IndexElements) => {
                            return (
                                <div
                                    // data-testid={'post-card'}
                                    className="third-col"
                                    key={post.frontmatter.title}
                                >
                                    <WikiTile post={post} />
                                </div>
                            );
                        })}
                    </div>
                </section>
                <section className="section">
                    <div className="level">
                        <div className="level-left">
                            <h2 className="title">Glossary Posts</h2>
                        </div>
                    </div>
                    <div className="col-multi-wrapper">
                        {glossaryFeatured.nodes.map((def: GlossaryElements) => {
                            return (
                                <div
                                    className="half-col"
                                    key={def.frontmatter.title}
                                >
                                    <Link 
                                        to={`/glossary#${def.frontmatter.title}`}
                                        
                                    >
                                        <DefinitionCard
                                            definition={def}
                                            includeAll={false}
                                        />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default HomePage;

/**
 * A basic component for SEO focused information
 * @param {HeadProps<HomeProps>} site - site meta data
 *
 * @see HomeProps
 * @memberof HomePage
 */
export function Head({ data: { site } }: HeadProps<HomeProps>) {
    return <SEO title={site.title} />;
}

export const pageQuery = graphql`
    query HomeQuery {
        site: site {
            ...SiteMetadata
        }
        blogFeatured: allMarkdownRemark(
            limit: 4
            sort: { fields: [frontmatter___date], order: DESC }
            filter: {
                frontmatter: { type: { eq: "blog" }, featured: { eq: true } }
            }
        ) {
            nodes {
                ...IndexElements
            }
        }
        wikiFeatured: allMarkdownRemark(
            limit: 4
            sort: { fields: [frontmatter___date], order: DESC }
            filter: {
                frontmatter: { type: { eq: "wiki" }, featured: { eq: true } }
            }
        ) {
            nodes {
                ...IndexElements
            }
        }
        glossaryFeatured: allMarkdownRemark(
            limit: 4
            sort: { fields: [frontmatter___date], order: DESC }
            filter: {
                frontmatter: {
                    type: { eq: "glossary" }
                    featured: { eq: true }
                }
            }
        ) {
            nodes {
                ...GlossaryElements
            }
        }
    }
`;
