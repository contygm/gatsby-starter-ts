import React from 'react';
import { render } from '@testing-library/react';
import IndexPage, { Head } from '../index';

describe('IndexPage', () => {
    it('renders correctly', () => {
        const { asFragment } = render(<IndexPage />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('header meta data renders correctly', () => {
        const { asFragment } = render(<Head />);
        expect(asFragment()).toMatchSnapshot();
    });
});
