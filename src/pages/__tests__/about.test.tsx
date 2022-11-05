import React from 'react';
import { render } from '@testing-library/react';
import About, { Head } from '../about';

describe('About', () => {
    it('renders correctly', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('header meta data renders correctly', () => {
        const { asFragment } = render(<Head />);
        expect(asFragment()).toMatchSnapshot();
    });
});
