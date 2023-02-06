import React from 'react';
import { render } from '@testing-library/react';
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
});
