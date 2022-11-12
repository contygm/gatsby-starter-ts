/* istanbul ignore file */
import { BlogIndexProps } from '../blog';
import { mockHeadProps, mockPageProps } from '../../utils/test-props';
import { HeadProps, PageProps } from 'gatsby';

const mockBlogs: BlogIndexProps = {
    site: {
        title: `Starter`,
        siteUrl: `https://www.domain.com`,
        author: `Writer B. Author`,
        businessName: 'The Company',
        phone: '999-999-9999',
        email: 'email@email.com',
        description: 'a super duper site!',
        image: '/nothing.png'
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
                    date: 'December 02, 2022',
                    title: 'Baking Tutorial',
                    description: 'a baking tutorial',
                    tags: ['one', 'two', 'three']
                }
            },
            {
                excerpt:
                    'Cheesecake lemon drops Cheesecake lemon drops pastry danish halvah...',
                fields: {
                    slug: '/ten-best-things/'
                },
                frontmatter: {
                    date: 'March 02, 2022',
                    title: '10 Best Things',
                    description: 'a list of the ten best things',
                    tags: ['five', 'four', 'three']
                }
            },
            {
                excerpt:
                    'Chupa chups fruitcake powder dessert gingerbread gummies...',
                fields: {
                    slug: '/guide/'
                },
                frontmatter: {
                    date: 'July 02, 2022',
                    title: 'Guide',
                    description: 'a guide',
                    tags: ['one', 'four', 'three']
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
                    date: 'December 02, 2022',
                    title: 'Baking Tutorial',
                    description: 'a baking tutorial',
                    tags: ['one', 'two', 'three']
                }
            },
            {
                excerpt:
                    'Cheesecake lemon drops Cheesecake lemon drops pastry danish halvah...',
                fields: {
                    slug: '/ten-best-things/'
                },
                frontmatter: {
                    date: 'March 02, 2022',
                    title: '10 Best Things',
                    description: 'a list of the ten best things',
                    tags: ['five', 'four', 'three']
                }
            },
            {
                excerpt:
                    'Chupa chups fruitcake powder dessert gingerbread gummies...',
                fields: {
                    slug: '/guide/'
                },
                frontmatter: {
                    date: 'July 02, 2022',
                    title: 'Guide',
                    description: 'a guide',
                    tags: ['one', 'four', 'three']
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
