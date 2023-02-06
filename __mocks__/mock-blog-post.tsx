/* istanbul ignore file */
import { HeadProps, PageProps } from 'gatsby';
import { BlogPostProps } from '../src/templates/blog-post';
import { mockHeadProps, mockPageProps } from '../src/utils/test-props';

export const mockBlogPost: BlogPostProps = {
    site: {
        siteMetadata: {
            title: `Starter`,
            siteUrl: `https://www.domain.com`,
            author: {
                name: `Writer B. Author`,
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit'
            },
            businessName: 'The Company',
            phone: '999-999-9999',
            email: 'email@email.com',
            description: 'a super duper site!',
            image: '/nothing.png'
        }
    },
    markdownRemark: {
        id: 'slkj-dsjflks-dflkjl',
        excerpt:
            'Lemon drops pastry danish halvah. Chupa chups fruitcake powder...',
        html: `<h2>Header</h2><p>Lemon drops pastry danish halvah. Lemon drops pastry danish halvah. Lemon drops pastry danish halvah. Lemon drops pastry danish halvah.</p>`,
        tableOfContents: `<ul><li><p><a href="#liquorice-topping">Liquorice topping</a></p><ul><li><p><a href="#pastry-halvah-caramels">Pastry halvah caramels</a></p><ul> <li><a href="#wafer-oat-cake">Wafer oat cake</a></li></ul></li></ul></li></ul>`,
        frontmatter: {
            date: 'December 02, 2022',
            title: 'Baking Tutorial',
            description: 'a baking tutorial',
            related: ['/one-url/', '/two-url/', '/three-url/'],
            tags: ['one', 'two', 'three'],
            headerImage: {
                childImageSharp: {
                    gatsbyImageData: {}
                }
            }
        }
    },
    previous: {
        fields: {
            slug: '/blog-post-before'
        },
        frontmatter: {
            title: 'Before - A Blog About Things'
        }
    },
    next: {
        fields: {
            slug: '/blog-post-after'
        },
        frontmatter: {
            title: 'After - A Blog About Things'
        }
    },
    featured: {
        nodes: [
            {
                excerpt:
                    'Lemon drops pastry danish halvah. Chupa chups fruitcake powder...',
                fields: {
                    slug: '/baking-tutorial/'
                },
                frontmatter: {
                    title: 'Baking Tutorial',
                    description: 'a baking tutorial',
                    date: '3-2-2021',
                    tags: ['two', 'three'],
                    headerImage: {
                        childImageSharp: {
                            gatsbyImageData: {}
                        }
                    }
                }
            },
            {
                excerpt:
                    'Cheesecake lemon drops Cheesecake lemon drops pastry danish halvah...',
                fields: {
                    slug: '/ten-best-things/'
                },
                frontmatter: {
                    title: '10 Best Things',
                    description: 'a list of the ten best things',
                    date: '12-2-2021',
                    tags: ['one', 'three'],
                    headerImage: {
                        childImageSharp: {
                            gatsbyImageData: {}
                        }
                    }
                }
            },
            {
                excerpt:
                    'Chupa chups fruitcake powder dessert gingerbread gummies...',
                fields: {
                    slug: '/guide/'
                },
                frontmatter: {
                    title: 'Guide',
                    description: 'a guide',
                    date: '4-2-2021',
                    tags: ['one', 'two', 'three'],
                    headerImage: {
                        childImageSharp: {
                            gatsbyImageData: {}
                        }
                    }
                }
            }
        ]
    },
    related: {
        nodes: [
            {
                excerpt:
                    'Lemon drops pastry danish halvah. Chupa chups fruitcake powder...',
                fields: {
                    slug: '/baking-tutorial/'
                },
                frontmatter: {
                    title: 'Baking Tutorial',
                    description: 'a baking tutorial',
                    date: '3-2-2021',
                    tags: ['two', 'three'],
                    headerImage: {
                        childImageSharp: {
                            gatsbyImageData: {}
                        }
                    }
                }
            },
            {
                excerpt:
                    'Cheesecake lemon drops Cheesecake lemon drops pastry danish halvah...',
                fields: {
                    slug: '/ten-best-things/'
                },
                frontmatter: {
                    title: '10 Best Things',
                    description: 'a list of the ten best things',
                    tags: ['one', 'two', 'three'],
                    date: '2-2-2021',
                    headerImage: {
                        childImageSharp: {
                            gatsbyImageData: {}
                        }
                    }
                }
            },
            {
                excerpt:
                    'Chupa chups fruitcake powder dessert gingerbread gummies...',
                fields: {
                    slug: '/guide/'
                },
                frontmatter: {
                    title: 'Guide',
                    description: 'a guide',
                    tags: ['one', 'two'],
                    date: '5-2-2021',
                    headerImage: {
                        childImageSharp: {
                            gatsbyImageData: {}
                        }
                    }
                }
            }
        ]
    }
};

export const mockBlogPostData = mockPageProps(
    mockBlogPost
) as PageProps<BlogPostProps>;
export const mockBlogPostHeadData = mockHeadProps(
    mockBlogPost
) as HeadProps<BlogPostProps>;
