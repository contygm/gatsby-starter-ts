/* istanbul ignore file */
import { HeadProps, PageProps } from 'gatsby';
import { BlogPostProps } from '../../templates/blog-post';
import { mockHeadProps, mockPageProps } from '../../utils/test-props';

const mockBlogPost: BlogPostProps = {
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
    markdownRemark: {
        id: 'slkj-dsjflks-dflkjl',
        excerpt:
            'Lemon drops pastry danish halvah. Chupa chups fruitcake powder...',
        html: `<h2>Header</h2><p>Lemon drops pastry danish halvah. Lemon drops pastry danish halvah. Lemon drops pastry danish halvah. Lemon drops pastry danish halvah.</p>`,
        frontmatter: {
            date: 'December 02, 2022',
            title: 'Baking Tutorial',
            description: 'a baking tutorial'
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
    }
};

export const mockBlogPostPageData = mockPageProps(
    mockBlogPost
) as PageProps<BlogPostProps>;
export const mockBlogPostHeadData = mockHeadProps(
    mockBlogPost
) as HeadProps<BlogPostProps>;
