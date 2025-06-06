import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import GlossaryPage, { Head } from '../glossary';
import {
    mockGlossaryPageData,
    mockGlossaryPageHeadData
} from '../../../__mocks__/mock-glossary-page';

const resizeWindow = (x: number) => {
    window.innerWidth = x;
    window.dispatchEvent(new Event('resize'));
};

describe('Glossary Page', () => {
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
        const { asFragment } = render(
            <GlossaryPage {...mockGlossaryPageData} />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('header meta data renders correctly', () => {
        const { asFragment } = render(<Head {...mockGlossaryPageHeadData} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('filters correctly', () => {
        const { asFragment, getByTestId, getAllByTestId } = render(
            <GlossaryPage {...mockGlossaryPageData} />
        );
        expect(asFragment()).toMatchSnapshot();
        expect(getAllByTestId('definition-card').length).toEqual(5);
        fireEvent.click(getByTestId('three'));
        expect(getAllByTestId('definition-card').length).toEqual(2);

        fireEvent.click(getByTestId('all'));
        expect(getAllByTestId('definition-card').length).toEqual(5);
    });

    it('renders correctly on mobile view', () => {
        resizeWindow(1000);
        const { asFragment } = render(
            <GlossaryPage {...mockGlossaryPageData} />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders correctly on medium view', () => {
        resizeWindow(1100);
        const { asFragment } = render(
            <GlossaryPage {...mockGlossaryPageData} />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('ToC shows properly on mobile', () => {
        resizeWindow(1000);
        const { asFragment, getByTestId, queryByRole } = render(
            <GlossaryPage {...mockGlossaryPageData} />
        );
        expect(asFragment()).toMatchSnapshot('closed table of contents');

        // open with ToC button
        fireEvent.click(getByTestId('post-toc-mobile-btn'));
        expect(asFragment()).toMatchSnapshot('open table of contents');
        // ToC section has role of widget
        expect(queryByRole('widget', { hidden: false })).toBeDefined();

        // close with ToC button
        fireEvent.click(getByTestId('post-toc-mobile-btn'));
        expect(asFragment()).toMatchSnapshot('closed table of contents w btn');
        expect(queryByRole('widget', { hidden: false })).toBeNull();
    });

    it('searches glossary html correctly', () => {
        const { asFragment, getByTestId, getAllByTestId } = render(
            <GlossaryPage {...mockGlossaryPageData} />
        );

        expect(asFragment()).toMatchSnapshot();
        expect(getAllByTestId('definition-card').length).toEqual(5);

        const input = getByTestId('searchPost') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'lemon' } });
        expect(input.value).toBe('lemon');

        fireEvent.click(getByTestId('searchPostSubmit'));
        waitFor(() =>
            expect(getAllByTestId('definition-card').length).toEqual(5)
        );
    });
});
