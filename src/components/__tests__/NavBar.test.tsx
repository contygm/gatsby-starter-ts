import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { NavBar } from '../NavBar';

describe('NavBar', () => {
    it('renders correctly', () => {
        const { asFragment } = render(<NavBar />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('hamburger button changes classname', () => {
        const { getByTestId } = render(<NavBar />);

        expect(getByTestId('siteNav').classList.contains('is-active')).toBe(
            false
        );
        fireEvent.click(getByTestId('siteNav'));
        expect(getByTestId('siteNav').classList.contains('is-active')).toBe(
            true
        );
        fireEvent.click(getByTestId('siteNav'));
        expect(getByTestId('siteNav').classList.contains('is-active')).toBe(
            false
        );
    });
});
