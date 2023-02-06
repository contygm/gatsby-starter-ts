import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import WikiPost, { Head } from '../../templates/wiki-post';
import {
    mockWikiPostHeadData,
    mockWikiPostData
} from '../../../__mocks__/mock-wiki-post';

const resizeWindow = (x: number) => {
    window.innerWidth = x;
    window.dispatchEvent(new Event('resize'));
};

describe('Wiki Posts Page', () => {
    beforeEach(() => {
        // IntersectionObserver isn't available in test environment
        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
            observe: () => null,
            unobserve: () => null,
            disconnect: () => null
        });
        window.IntersectionObserver = mockIntersectionObserver;
        resizeWindow(1216);
    });

    it('renders correctly', () => {
        const { asFragment } = render(<WikiPost {...mockWikiPostData} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('header meta data renders correctly', () => {
        const { asFragment } = render(<Head {...mockWikiPostHeadData} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders correctly on mobile view', () => {
        resizeWindow(1000);
        const { asFragment } = render(<WikiPost {...mockWikiPostData} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders correctly on medium view', () => {
        resizeWindow(1100);
        const { asFragment } = render(<WikiPost {...mockWikiPostData} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('ToC shows properly on mobile', () => {
        resizeWindow(1000);
        const { asFragment, getByTestId, queryByRole } = render(
            <WikiPost {...mockWikiPostData} />
        );
        expect(asFragment()).toMatchSnapshot('closed table of contents');

        // open with ToC button
        fireEvent.click(getByTestId('blog-toc-mobile-btn'));
        expect(asFragment()).toMatchSnapshot('open table of contents');
        // ToC section has role of widget
        expect(queryByRole('widget', { hidden: false })).toBeDefined();

        // close with ToC button
        fireEvent.click(getByTestId('blog-toc-mobile-btn'));
        expect(asFragment()).toMatchSnapshot('closed table of contents w btn');
        expect(queryByRole('widget', { hidden: false })).toBeNull();
    });
});
