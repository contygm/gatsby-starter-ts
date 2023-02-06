/* istanbul ignore file */
import { BlogIndexProps } from '../src/pages/blog';
import { mockHeadProps, mockPageProps } from '../src/utils/test-props';
import { HeadProps, PageProps } from 'gatsby';
import { featuredOrRelatedPosts, siteData } from './constants';

const mockBlogs: BlogIndexProps = {
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
) as PageProps<BlogIndexProps>;

export const mockBlogHeadData = mockHeadProps(
    mockBlogs
) as HeadProps<BlogIndexProps>;
