import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import WikiIndex, { Head } from '../wiki';
import {
    mockWikiHeadData,
    mockWikiPageData
} from '../../../__mocks__/mock-wiki-page';

describe('Wiki Index Page', () => {
    it('renders correctly', () => {
        const { asFragment } = render(<WikiIndex {...mockWikiPageData} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('header meta data renders correctly', () => {
        const { asFragment } = render(<Head {...mockWikiHeadData} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('filters correctly', () => {
        const { asFragment, getByTestId, getAllByTestId } = render(
            <WikiIndex {...mockWikiPageData} />
        );
        expect(asFragment()).toMatchSnapshot();
        expect(getAllByTestId('post-card').length).toEqual(3);
        fireEvent.click(getByTestId('one'));
        expect(getAllByTestId('post-card').length).toEqual(2);

        fireEvent.click(getByTestId('all'));
        expect(getAllByTestId('post-card').length).toEqual(3);
    });
});
