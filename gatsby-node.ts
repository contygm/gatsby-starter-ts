import { GatsbyNode } from 'gatsby';
import path from 'path';
import { createFilePath } from 'gatsby-source-filesystem';

type GraphQLNode = {
    id: string;
    fields:  {
        slug: string
    }
    frontmatter: {
        title: string
        type: string
        related: string[]
    }
}

interface GraphQLResult {
    errors?: any;
    data?: {
        blogs: {
            nodes: GraphQLNode[]
        },
        wikis: {
            nodes: GraphQLNode[]
        }
    }
}

export const createPages: GatsbyNode['createPages'] = async ({
    graphql,
    actions,
    reporter
}) => {
    const { createPage } = actions;

    // Define a templates for posts
    const blogTemplate = path.resolve(`./src/templates/blog-post.tsx`);
    const wikiTemplate = path.resolve(`./src/templates/wiki-post.tsx`);

    // Get all markdown posts
    const result: GraphQLResult = await graphql(`
        {
            blogs: allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
                limit: 1000
                filter: { frontmatter: { type: { eq: "blog" } } }
            ) {
                nodes {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        type
                        related
                    }
                }
            }
            wikis: allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
                limit: 1000
                filter: { frontmatter: { type: { eq: "wiki" } } }
            ) {
                nodes {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        type
                        related
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panicOnBuild(
            `There was an error loading your blog posts`,
            result.errors
        );
        return;
    }

    // Create blog posts pages
    // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
    // `context` is available in the template as a prop and as a variable in GraphQL
    const allBlogs = result.data?.blogs.nodes;
    if (allBlogs && allBlogs.length > 0) {
        allBlogs.forEach((post, index)  => {
            const previousPostId = index === 0 ? null : allBlogs[index - 1].id;
            const nextPostId =
                index === allBlogs.length - 1 ? null : allBlogs[index + 1].id;
            createPage({
                path: `blog${post.fields.slug}`,
                component: blogTemplate,
                context: {
                    id: post.id,
                    slug: post.fields.slug,
                    previousPostId,
                    nextPostId,
                    relatedPosts: post.frontmatter.related
                }
            });
        });
    }

    const allWikis = result.data?.wikis.nodes;
    if (allWikis && allWikis.length > 0) {
        allWikis.forEach((post, index)  => {
            const previousPostId = index === 0 ? null : allWikis[index - 1].id;
            const nextPostId =
                index === allWikis.length - 1 ? null : allWikis[index + 1].id;
            createPage({
                path: `wiki${post.fields.slug}`,
                component: wikiTemplate,
                context: {
                    id: post.id,
                    slug: post.fields.slug,
                    previousPostId,
                    nextPostId,
                    relatedPosts: post.frontmatter.related
                }
            });
        });
    }
};

export const onCreateNode: GatsbyNode['onCreateNode'] = async ({
    node,
    getNode,
    actions
}) => {
    const { createNodeField } = actions;

    // Change the node internal type from 'allMarkdownRemark' to 'MarkdownRemark'
    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: `slug`,
            node,
            value
        });
    }
};
