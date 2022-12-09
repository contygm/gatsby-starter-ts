/* istanbul ignore file */
import { BlogIndexProps } from '../blog';
import { mockHeadProps, mockPageProps } from '../../utils/test-props';
import { HeadProps, PageProps } from 'gatsby';

const mockBlogs: BlogIndexProps = {
    site: {
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
    },
    allTags: {
        distinct: ['one', 'two', 'three']
    },
    index: {
        nodes: [
            {
                excerpt:
                    'Lemon drops pastry danish halvah. Chupa chups fruitcake powder...',
                fields: {
                    slug: '/baking-tutorial/'
                },
                frontmatter: {
                    title: 'Baking Tutorial',
                    date: '3-2-2021',
                    description: 'a baking tutorial',
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
                    date: '12-2-2021',
                    tags: ['one', 'three'],
                    description: 'a list of the ten best things',
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
                    date: '4-2-2021',
                    tags: ['one', 'two', 'three'],
                    description: 'a guide',
                    headerImage: {
                        childImageSharp: {
                            gatsbyImageData: {}
                        }
                    }
                }
            }
        ]
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
                    date: '3-2-2021',
                    description: 'a baking tutorial',
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

export const mockBlogPageData = mockPageProps(
    mockBlogs
) as PageProps<BlogIndexProps>;
export const mockBlogHeadData = mockHeadProps(
    mockBlogs
) as HeadProps<BlogIndexProps>;
