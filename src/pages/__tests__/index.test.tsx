import React from 'react';
import { render } from '@testing-library/react';
import IndexPage from '../index';

describe('IndexPage', () => {
    it('renders correctly', () => {
        const { asFragment } = render(<IndexPage />);
        expect(asFragment()).toMatchSnapshot();
    });
});
