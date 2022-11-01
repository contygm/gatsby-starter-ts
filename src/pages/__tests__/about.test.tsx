import React from 'react';
import { render } from '@testing-library/react';
import About from '../about';

describe('About', () => {
    it('renders correctly', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
});
