import React, { FunctionComponent } from 'react';
import { SEO, Layout } from '../components';
import { graphql, Link, HeadProps, PageProps } from 'gatsby';
import { DefinitionCard } from '../components/DefinitionCard';

export interface HomeProps {
    site: SiteMetadata;
    blogFeatured: {
        nodes: Array<IndexElements>;
    };
    wikiFeatured: {
        nodes: Array<IndexElements>;
    };
    glossaryFeatured: {
        nodes: Array<GlossaryElements>;
    };
}

const BlogTile = (props: { post: IndexElements }) => {
    return (
        <div className="box home-blog-tile">
            <div className="media p-2 m-2">
                <figure className="media-left my-auto">
                    <p className="image is-128x128">
                        <img src="https://bulma.io/images/placeholders/128x128.png" />
                    </p>
                </figure>
                <div className="media-content m-auto">
                    <div className="content">
                        <p className="title is-4">
                            {props.post.frontmatter.title}
                        </p>
                        <p className="subtitle is-6">
                            <time dateTime={props.post.frontmatter.date}>
                                {props.post.frontmatter.date}
                            </time>
                        </p>
                        <p>{props.post.frontmatter.description}</p>
                        <Link to={`/blog${props.post.fields.slug}`}>
                            Read more...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const WikiTile = (props: { post: IndexElements }) => {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image ">
                    <p className="is-128x128">
                        <img src="https://bulma.io/images/placeholders/128x128.png" />
                    </p>
                </figure>
            </div>
            <div className="card-content">
                <div className="content">
                    <p className="title is-4">{props.post.frontmatter.title}</p>
                    <p className="subtitle is-6">
                        <time dateTime={props.post.frontmatter.date}>
                            {props.post.frontmatter.date}
                        </time>
                    </p>
                    <p>{props.post.frontmatter.description}</p>
                    <Link to={`/wiki${props.post.fields.slug}`}>
                        Read more...
                    </Link>
                </div>
            </div>
        </div>
    );
};

const NewTile = (props: { nodes: Array<IndexElements> }) => {
    return (
        <div className="columns is-vcentered is-multiline">
            <div className="column is-9-desktop is-full-tablet">
                <div className="card is-radiusless footer-logo">
                    <div className="card-image">
                        <figure className="image is-3by2">
                            <img src="https://bulma.io/images/placeholders/128x128.png" />
                        </figure>
                    </div>
                    <div className="card-content is-overlay home-header-tile-overlay">
                        <div className="content">
                            <p className="title is-size-3 has-text-black">
                                {props.nodes[0].frontmatter.title}
                            </p>
                            <p className="subtitle is-size-6 has-text-black">
                                <time
                                    dateTime={props.nodes[0].frontmatter.date}
                                >
                                    {props.nodes[0].frontmatter.date}
                                </time>
                            </p>
                            <p className="is-size-5">
                                {props.nodes[0].frontmatter.description}
                            </p>
                            <Link
                                to={`/${props.nodes[0].frontmatter.type}${props.nodes[0].fields.slug}`}
                            >
                                Read more...
                            </Link>
                        </div>
                    </div>
                    <div className="card-content is-overlay">
                        <span className="tag is-link is-large">FEATURED</span>
                    </div>
                </div>
            </div>
            <div className="column is-3-desktop is-full-tablet">
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
                                        className={`card footer-logo is-radiusless ${
                                            i === props.nodes.length - 2
                                                ? 'mb-0'
                                                : 'mb-5'
                                        }`}
                                    >
                                        <div className="card-image ">
                                            <figure className="image is-5by3 ">
                                                <img src="https://bulma.io/images/placeholders/128x128.png" />
                                            </figure>
                                        </div>
                                        <div className="card-content is-overlay home-header-tile-overlay">
                                            <div className="content">
                                                <p className="title is-size-5 has-text-black">
                                                    {post.frontmatter.title}
                                                </p>
                                                <p className="subtitle is-size-6 has-text-black">
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
                                        <div className="card-content is-overlay">
                                            <span className="tag is-link">
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
 * @description Main landing page for the site
 * @note place holder content and styles
 */
const HomePage: FunctionComponent<PageProps<HomeProps>> = ({
    data: { blogFeatured, wikiFeatured, glossaryFeatured }
}: PageProps<HomeProps>) => {
    return (
        <Layout>
            <section className="hero is-dark is-fullheight ">
                <div className="hero-head">
                    <div className="container has-text-centered section has-text-white">
                        <p className="title home-title">{'Welcome!'}</p>
                        <p className="subtitle is-size-2">
                            A subtitle describing the site
                        </p>
                    </div>
                </div>
                <div className="hero-body">
                    <div className="container">
                        <NewTile nodes={blogFeatured.nodes} />
                    </div>
                </div>
            </section>

            <div className="container">
                {/* <NewTile post={blogFeatured.nodes[0]}/> */}
                <section className="section">
                    <div className="level">
                        <div className="level-left">
                            <h2 className="title">Blog Posts</h2>
                        </div>
                    </div>
                    <div className="columns is-multiline">
                        {blogFeatured.nodes.map((post: IndexElements) => {
                            return (
                                <div
                                    // data-testid={'post-card'}
                                    className="column is-half"
                                    key={post.frontmatter.title}
                                >
                                    <BlogTile post={post} />
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
                    <div className="columns is-multiline is-centered">
                        {wikiFeatured.nodes.map((post: IndexElements) => {
                            return (
                                <div
                                    // data-testid={'post-card'}
                                    className="column is-3"
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
                    <div className="columns is-multiline">
                        {glossaryFeatured.nodes.map((def: GlossaryElements) => {
                            return (
                                <div
                                    // data-testid={'post-card'}
                                    className="column is-half"
                                    key={def.frontmatter.title}
                                >
                                    <DefinitionCard
                                        definition={def}
                                        includeAll={false}
                                    />
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
