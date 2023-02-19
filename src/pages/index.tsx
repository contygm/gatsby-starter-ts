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

const BlogTile = (props: {
    post: IndexElements;
}) => {
    return (
        <div className='box home-blog-tile'>
            <div className="media p-2 m-2">
            <figure className="media-left">
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

const WikiTile = (props: {
    post: IndexElements;
}) => {
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
                    <p className="title is-4">
                        {props.post.frontmatter.title}
                    </p>
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

const NewTile = (props: {
    nodes: Array<IndexElements>;
}) => {
    return (
        <div className="columns">
            <div className="column is-8 ">
                <div className="box home-blog-tile">
                    <p className="">{props.nodes[0].frontmatter.title}</p>
                    <p>{props.nodes[0].frontmatter.description}</p>
                </div>
            </div>
            <div className="column is-4">
                <div className="">
                    <div className=""> 
                        {
                            props.nodes.slice(1).map((post: IndexElements) => {
                                return (
                                    <div
                                        // data-testid={'post-card'}
                                        className="box"
                                        key={post.frontmatter.title}
                                    >
                                        <p className="">{post.frontmatter.title}</p>
                                        <p>{post.frontmatter.description}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
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
    data: {blogFeatured, wikiFeatured, glossaryFeatured}
    // wikiFeatured,
    // glossaryFeatured
}: PageProps<HomeProps>) => {
    return (
        <Layout>
            <section className="hero is-dark is-fullheight ">
                <div className='hero-head'>
                    <div className="container has-text-centered section has-text-white">
                        <p className="title home-title">
                        {"Welcome!"}
                        </p>
                        <p className="subtitle is-size-2">
                            A subtitle describing the site
                        </p>
                    </div>
                </div>
                <div className="hero-body">
                    <div className="container">
                        <NewTile nodes={blogFeatured.nodes}/>
                    </div>
                    
                    
                </div>
            </section>
            
            <div className="container">
            {/* <NewTile post={blogFeatured.nodes[0]}/> */}
                <section className='section'>
                    <div className='level'>
                        <div className='level-left'>
                            <h2  className='title'>Blog Posts</h2>
                        </div>
                    </div>
                    <div className="columns is-multiline is-mobile">
                        {
                            blogFeatured.nodes.map((post: IndexElements) => {
                                return (
                                    <div
                                        // data-testid={'post-card'}
                                        className="column is-half"
                                        key={post.frontmatter.title}
                                    >
                                        <BlogTile
                                            post={post}
                                        />
                                    </div>
                                );
                            })
                        }
                    </div>
                </section>
                <section className='section'>
                    <div className='level'>
                        <div className='level-left'>
                            <h2  className='title'>Wiki Posts</h2>
                        </div>
                    </div>
                    <div className="columns is-multiline is-centered">
                    {
                        wikiFeatured.nodes.map((post: IndexElements) => {
                            return (
                                <div
                                    // data-testid={'post-card'}
                                    className="column is-3"
                                    key={post.frontmatter.title}
                                >
                                    <WikiTile
                                        post={post}
                                    />
                                </div>
                            );
                        })
                    }
                    </div>
                </section>
                <section className='section'>
                    <div className='level'>
                        <div className='level-left'>
                            <h2  className='title'>Glossary Posts</h2>
                        </div>
                    </div>
                    <div className="columns is-multiline is-mobile">
                    {
                        glossaryFeatured.nodes.map((def: GlossaryElements) => {
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
                        })
                    }
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
                frontmatter: { type: { eq: "glossary" }, featured: { eq: true } }
            }
        ) {
            nodes {
                ...GlossaryElements
            }
        }
    }
`;
