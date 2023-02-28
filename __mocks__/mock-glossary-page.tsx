/* istanbul ignore file */
import { GlossaryPageProps } from '../src/pages/glossary';
import { mockHeadProps, mockPageProps } from '../src/utils/test-props';
import { HeadProps, PageProps } from 'gatsby';
import {
    glossaryDefinitions,
    featuredOrRelatedPosts,
    siteData
} from './constants';

export const mockGlossary: GlossaryPageProps = {
    site: siteData,
    allTags: {
        group: [
            { fieldValue: 'three', totalCount: 3 },
            { fieldValue: 'two', totalCount: 4 },
            { fieldValue: 'one', totalCount: 2 }
        ]
    },
    allLetters: {
        group: [
            { fieldValue: 'A' },
            { fieldValue: 'C' },
            { fieldValue: 'M' },
            { fieldValue: 'W' }
        ]
    },
    index: {
        totalCount: 5,
        nodes: glossaryDefinitions
    },
    blogFeatured: {
        nodes: featuredOrRelatedPosts
    },
    wikiFeatured: {
        nodes: featuredOrRelatedPosts
    }
};

export const mockGlossaryPageData = mockPageProps(
    mockGlossary
) as PageProps<GlossaryPageProps>;

export const mockGlossaryPageHeadData = mockHeadProps(
    mockGlossary
) as HeadProps<GlossaryPageProps>;
