/* istanbul ignore file */
import { mockHeadProps, mockPageProps } from './test-props';
import { HeadProps, PageProps } from 'gatsby';
import { featuredOrRelatedPosts } from './constants';

const mockWikis: GenericPageProps = {
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
        group: [
            { fieldValue: 'three', totalCount: 3 },
            { fieldValue: 'two', totalCount: 2 },
            { fieldValue: 'one', totalCount: 1 }
        ]
    },
    index: {
        totalCount: 3,
        nodes: featuredOrRelatedPosts
    },
    featured: {
        nodes: featuredOrRelatedPosts
    }
};

export const mockWikiPageData = mockPageProps(
    mockWikis
) as PageProps<GenericPageProps>;

export const mockWikiHeadData = mockHeadProps(
    mockWikis
) as HeadProps<GenericPageProps>;
