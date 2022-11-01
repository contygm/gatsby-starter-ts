import React from 'react';
import { render } from '@testing-library/react';
import NotFoundPage from '../404';

describe('404 - NotFoundPage', () => {
    it('renders correctly', () => {
        const { asFragment } = render(<NotFoundPage />);
        expect(asFragment()).toMatchSnapshot();
    });
});
