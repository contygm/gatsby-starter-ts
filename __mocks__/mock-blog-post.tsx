/* istanbul ignore file */
import { HeadProps, PageProps } from 'gatsby';
import { mockHeadProps, mockPageProps } from './test-props';
import { previous, next, featuredOrRelatedPosts, siteData } from './constants';

export const mockBlogPost: IndexFilterWrapperProps<BlogPostElements> = {
    site: {
        siteMetadata: siteData
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
    previous: previous,
    next: next,
    featured: {
        nodes: featuredOrRelatedPosts
    },
    related: {
        nodes: featuredOrRelatedPosts
    }
};

export const mockBlogPostData = mockPageProps(
    mockBlogPost
) as PageProps<IndexFilterWrapperProps<BlogPostElements>>;
export const mockBlogPostHeadData = mockHeadProps(
    mockBlogPost
) as HeadProps<IndexFilterWrapperProps<BlogPostElements>>;
