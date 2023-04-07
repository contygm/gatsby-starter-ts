/* istanbul ignore file */
import { HomeProps } from '../src/pages/index';
import { mockHeadProps, mockPageProps } from './test-props';
import { HeadProps, PageProps } from 'gatsby';
import {
    featuredOrRelatedPosts,
    glossaryDefinitions,
    siteData
} from './constants';

const mockHome: HomeProps = {
    site: siteData,
    blogFeatured: {
        nodes: featuredOrRelatedPosts
    },
    wikiFeatured: {
        nodes: featuredOrRelatedPosts
    },
    glossaryFeatured: {
        nodes: glossaryDefinitions
    }
};

export const mockHomePageData = mockPageProps(mockHome) as PageProps<HomeProps>;

export const mockHomeHeadData = mockHeadProps(mockHome) as HeadProps<HomeProps>;
