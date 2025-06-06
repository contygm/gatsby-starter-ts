/* istanbul ignore file */
import { HeadProps, PageProps } from 'gatsby';
import { mockHeadProps, mockPageProps } from './test-props';
import { featuredOrRelatedPosts, next, previous, siteData } from './constants';

export const mockWikiPost: IndexFilterWrapperProps<WikiPostElements> = {
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
            summary: [
                {
                    field: 'Color',
                    value: 'Green'
                },
                {
                    field: 'Number',
                    value: '0'
                }
            ],
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

export const mockWikiPostData = mockPageProps(mockWikiPost) as PageProps<
    IndexFilterWrapperProps<WikiPostElements>
>;
export const mockWikiPostHeadData = mockHeadProps(mockWikiPost) as HeadProps<
    IndexFilterWrapperProps<WikiPostElements>
>;
