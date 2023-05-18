import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import IndexFilterWrapper from '../IndexFilterWrapper';
import { mockBlogs } from '../../../../__mocks__/mock-blog-page';
import { mockGlossary } from '../../../../__mocks__/mock-glossary-page';

describe('IndexFilterWrapper', () => {
    it('searches blog correctly and clears search bar', () => {
        const location = { search: '' };
        const { asFragment, getByTestId, getAllByTestId } = render(
            <IndexFilterWrapper
                allTags={mockBlogs.allTags}
                index={mockBlogs.index}
                type={'blog'}
                location={location}
            />
        );

        expect(asFragment()).toMatchSnapshot();
        expect(getAllByTestId('post-card').length).toEqual(3);

        const input = getByTestId('searchPost') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'baking' } });
        expect(input.value).toBe('baking');

        fireEvent.click(getByTestId('searchPostSubmit'));
        waitFor(() => expect(getAllByTestId('post-card').length).toEqual(2));
    });

    it('searches glossary correctly', () => {
        const location = { search: '' };
        const { asFragment, getByTestId, getAllByTestId } = render(
            <IndexFilterWrapper
                allTags={mockGlossary.allTags}
                allLetters={mockGlossary.allLetters}
                index={mockGlossary.index}
                type={'glossary'}
                location={location}
            />
        );

        expect(asFragment()).toMatchSnapshot();
        expect(getAllByTestId('definition-card').length).toEqual(5);

        const input = getByTestId('searchPost') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'Moon' } });
        expect(input.value).toBe('Moon');

        fireEvent.click(getByTestId('searchPostSubmit'));
        waitFor(() =>
            expect(getAllByTestId('definition-card').length).toEqual(1)
        );
    });

    it('searches glossary html correctly', () => {
        const location = { search: '' };

        const { asFragment, getByTestId, getAllByTestId } = render(
            <IndexFilterWrapper
                allTags={mockGlossary.allTags}
                allLetters={mockGlossary.allLetters}
                index={mockGlossary.index}
                type={'glossary'}
                location={location}
            />
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

    it('filters based on tag from query correctly', () => {
        const location = { search: '?tag=one' };
        const { asFragment, getAllByTestId } = render(
            <IndexFilterWrapper
                allTags={mockBlogs.allTags}
                index={mockBlogs.index}
                type={'blog'}
                location={location}
            />
        );

        expect(asFragment()).toMatchSnapshot();
        expect(getAllByTestId('post-card').length).toEqual(2);
    });
});
