import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import PostPage, { Head } from '../../templates/post-page';
import { mockBlogs } from '../../../__mocks__/mock-blog-page';
import { mockGlossary } from '../../../__mocks__/mock-glossary-page';

describe('Posts Page', () => {
    it('searches blog correctly and clears search bar', () => {
        const { asFragment, getByTestId, getAllByTestId } = render(
            <PostPage
                allTags={mockBlogs.allTags}
                index={mockBlogs.index}
                type={'blog'}
            />
        );

        expect(asFragment()).toMatchSnapshot();
        expect(getAllByTestId('post-card').length).toEqual(3);

        const input = getByTestId('searchPost') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'baking' } });
        expect(input.value).toBe('baking');

        fireEvent.click(getByTestId('searchPostSubmit'));
        waitFor(() => expect(getAllByTestId('post-card').length).toEqual(2));
        // expect(asFragment()).toMatchSnapshot('has clear btn');
        // fireEvent.click(getByTestId('clearSearch'));

        // waitFor(() => expect(getAllByTestId('post-card').length).toEqual(3));
        // expect(input.value).toBe('')
    });

    it('searches glossary correctly', () => {
        const { asFragment, getByTestId, getAllByTestId } = render(
            <PostPage
                allTags={mockGlossary.allTags}
                allLetters={mockGlossary.allLetters}
                index={mockGlossary.index}
                type={'glossary'}
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
        const { asFragment, getByTestId, getAllByTestId } = render(
            <PostPage
                allTags={mockGlossary.allTags}
                allLetters={mockGlossary.allLetters}
                index={mockGlossary.index}
                type={'glossary'}
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

    // TODO wiki
    // TODO disabled search on tag
    // TODO disabled tag on search
});
