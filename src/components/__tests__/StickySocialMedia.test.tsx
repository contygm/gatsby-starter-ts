import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import StickySocialMedia from '../StickySocialMedia';

describe('Sticky Social Media bar', () => {
    it('renders correctly horizontally', () => {
        const { asFragment } = render(<StickySocialMedia isVertical={false}/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders correctly vertically', () => {
        const { asFragment, getByTestId } = render(<StickySocialMedia isVertical={true}/>);
        expect(asFragment()).toMatchSnapshot("open vertical bar");

		fireEvent.click(getByTestId('sticky-social-hide'))
        expect(asFragment()).toMatchSnapshot("closed vertical bar");

		fireEvent.click(getByTestId('sticky-social-show-more'))
		expect(asFragment()).toMatchSnapshot("open vertical bar");
    });
});
