import type { GatsbyConfig } from 'gatsby';
import path from 'path';

// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
// @es-ignore
const gatsbyRequiredRules = path.join(
    process.cwd(),
    'node_modules',
    'gatsby',
    'dist',
    'utils',
    'eslint-rules'
);

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Starter`,
        siteUrl: `https://www.domain.com`,
        author: {
            name: `Writer B. Author`,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit'
        },
        description: 'a super duper site!',
        businessName: 'The Company',
        phone: '999-999-9999',
        email: 'email@email.com',
        image: '/src/images/icon.png'
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    // graphqlTypegen: true,
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-netlify-cms',
        'gatsby-plugin-image',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png'
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590
                        }
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-autolink-headers`
                ]
            }
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`
            },
            __key: 'images'
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/wiki`,
                name: `wiki`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/glossary`,
                name: `glossary`
            }
        },
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                // Gatsby required rules directory
                rulePaths: [gatsbyRequiredRules],
                // Default settings that may be omitted or customized
                stages: ['develop'],
                extensions: ['js', 'jsx', 'ts', 'tsx'],
                exclude: [
                    'node_modules',
                    'bower_components',
                    '.cache',
                    'public'
                ]
                // Any additional eslint-webpack-plugin options below
            }
        }
    ]
};

export default config;
