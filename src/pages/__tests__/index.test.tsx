import React from 'react';
import { render } from '@testing-library/react';
import HomePage, { Head } from '../index';
import {
    mockHomeHeadData,
    mockHomePageData
} from '../../../__mocks__/mock-home-page';

describe('HomePage', () => {
    it('renders correctly', () => {
        const { asFragment } = render(<HomePage {...mockHomePageData} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('header meta data renders correctly', () => {
        const { asFragment } = render(<Head {...mockHomeHeadData} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
