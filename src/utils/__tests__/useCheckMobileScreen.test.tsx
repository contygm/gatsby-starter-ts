import { act, render } from '@testing-library/react';
import React from 'react';
import useCheckMobileScreen from '../useCheckMobileScreen';

const resizeWindow = (x: number) => {
    window.innerWidth = x;
    window.dispatchEvent(new Event('resize'));
}

function TestComponent() {
	if (useCheckMobileScreen()) {
	  return <div>SMALL SCREEN</div>;
	}
	return <div>BIG SCREEN</div>;
}

describe('useCheckBigScreen', () => {
	beforeEach(() => {
        resizeWindow(900)

    })

    it('return siteMetadata', () => {
		const { asFragment } = render(<TestComponent />);
        expect(asFragment()).toMatchSnapshot('small');
		
		act(() => {
			resizeWindow(1216)
		});
		expect(asFragment()).toMatchSnapshot('big');
    });
});