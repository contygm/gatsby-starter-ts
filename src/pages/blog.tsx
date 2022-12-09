import { Link, graphql, HeadProps, PageProps } from 'gatsby';
import * as React from 'react';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

export interface BlogIndexProps {
    site: SiteMetadata;
    allTags: {
        distinct: Array<string>
    };
    index: {
        nodes: Array<IndexElements>;
    };
    featured: {
        nodes: Array<IndexElements>;
    };
}

const BlogIndex = ({ data: { index, allTags } }: PageProps<BlogIndexProps>) => {
    const INCREMENT = 6;
    const tags = allTags.distinct;
    const allPosts = index.nodes;
    const [displayPosts, setDisplayPosts] = useState([...allPosts.slice(0, INCREMENT)]);
    const [loadMore, setLoadMore] = useState(false);
    const [hasMore, setHasMore] = useState(allPosts.length > INCREMENT);

    const handleLoadMore = () => {
        setLoadMore(true)
    }

    useEffect(() => {
        console.log("set display posts")
        if (loadMore && hasMore) {
            const length = displayPosts.length;
            const isMore = length < allPosts.length
            const nextResults = isMore
                ? allPosts.slice(length, length + INCREMENT)
                : []
            // combine old displayPosts with next batch of posts
            setDisplayPosts([...displayPosts, ...nextResults])
            setLoadMore(false)
        }
    }, [loadMore, hasMore])

    useEffect(() => {
        const isMore = displayPosts.length < allPosts.length
        setHasMore(isMore)
    }, [displayPosts])

    return (
        <Layout>
            <PageHeader
                title={`Blog Index`}
                alignCenter={true}
            />
            <section className="section ">
                <div className='container is-max-desktop'>
                    <div className="columns">
                        <div className="column">
                            <div className="field has-addons">
                                <p className="control">
                                <input className="input" type="text" placeholder="Find a post" />
                                </p>
                                <p className="control">
                                <button className="button">
                                    Search
                                </button>
                                </p>
                            </div>
                        </div>

                        <div className='column is-two-thirds'>
                            <div className='tags'>
                            {
                                tags.map((tag: string) => {
                                    return (
                                        <span key={tag} id={tag} className='tag is-success is-light is-medium'>
                                            {tag}
                                        </span>
                                    )
                                })
                            }
                            {
                                tags.map((tag: string) => {
                                    return (
                                        <span key={tag} id={tag} className='tag is-success is-light is-medium'>
                                            {tag}
                                        </span>
                                    )
                                })
                            }
                            {
                                tags.map((tag: string) => {
                                    return (
                                        <span key={tag} id={tag} className='tag is-success is-light is-medium'>
                                            {tag}
                                        </span>
                                    )
                                })
                            }
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                
                
            </section>
            <article className="section">            
                <section className='container is-max-desktop'>
                    {/* post cards */}
                    <div className="columns is-multiline is-centered">
                        {displayPosts.map((post: IndexElements) => {
                            return (
                                <div className='column is-4' key={post.frontmatter.title}>
                                    <div className="card" >
                                        <div className="card-image">
                                        <span className="tag is-primary sticky-tag">{post.frontmatter.tags[0]}</span>
                                            <figure className="image is-4by3 blog-card-image">
                                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                            </figure>
                                        </div>
                                        <div className="card-content">
                                            <div className="media">
                                                <div className="media-content">
                                                    <p className="title is-4">{post.frontmatter.title}</p>
                                                    <p className="subtitle is-6">
                                                        <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    {post.frontmatter.description}
                                                </p>
                                                <Link to={`/blog${post.fields.slug}`}>
                                                    Read more...
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {hasMore && 
                        <div className='columns is-mobile is-centered'>
                            <button className='button is-dark' onClick={handleLoadMore}>
                                Load more...
                            </button>
                        </div>
                    }
                </section>
            </article>
        </Layout>
    );
};

export default BlogIndex;
export function Head({ data: { site } }: HeadProps<BlogIndexProps>) {
    return <SEO title={site.title} />;
}

export const pageQuery = graphql`
    query BlogQuery {
        site: site {
            ...SiteMetadata
        }
        allTags: allMarkdownRemark {
            distinct(field: frontmatter___tags)
        }
        index: allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { type: { eq: "blog" } } }
        ) {
            nodes {
                ...IndexElements
            }
        }
        featured: allMarkdownRemark(
            limit: 5
            sort: { fields: [frontmatter___date], order: DESC }
            filter: {
                frontmatter: { type: { eq: "blog" }, featured: { eq: true } }
            }
        ) {
            nodes {
                ...IndexElements
            }
        }
    }
`;
