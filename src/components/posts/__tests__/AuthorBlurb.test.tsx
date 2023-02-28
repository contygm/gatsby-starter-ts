import React from 'react';
import { render } from '@testing-library/react';
import { AuthorBlurb, AuthorBlurbProps } from '../AuthorBlurb';

const mockData: AuthorBlurbProps = {
    author: {
        name: 'Luke Skywalker',
        description: "Let's save the galaxy one more time!"
    },
    postTags: ['one', 'two', 'three'],
    postDate: 'March 28, 2000',
    previousPost: {
        fields: {
            slug: '/blog-post-before'
        },
        frontmatter: {
            title: 'Before - A Blog About Things'
        }
    },
    nextPost: {
        fields: {
            slug: '/blog-post-before'
        },
        frontmatter: {
            title: 'Next - A Blog About Things'
        }
    }
};

describe('PageHeader', () => {
    let testProps: AuthorBlurbProps;

    beforeEach(() => {
        testProps = mockData;
    });

    it('default renders correctly', () => {
        const { asFragment } = render(<AuthorBlurb {...testProps} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders when previousPost is undefined', () => {
        testProps.previousPost = undefined;
        const { asFragment } = render(<AuthorBlurb {...testProps} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders when previousPost is defined', () => {
        testProps.nextPost = undefined;
        const { asFragment } = render(<AuthorBlurb {...testProps} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
