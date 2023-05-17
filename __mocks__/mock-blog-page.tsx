/* istanbul ignore file */
import { mockHeadProps, mockPageProps } from './test-props';
import { HeadProps, PageProps } from 'gatsby';
import { featuredOrRelatedPosts, siteData } from './constants';

export const mockBlogs: GenericPageProps = {
    site: siteData,
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

export const mockBlogPageData = mockPageProps(
    mockBlogs
) as PageProps<GenericPageProps>;

export const mockBlogHeadData = mockHeadProps(
    mockBlogs
) as HeadProps<GenericPageProps>;
