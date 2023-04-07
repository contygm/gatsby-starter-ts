import { act, render } from '@testing-library/react';
import React from 'react';
import useCheckBigScreen from '../hooks/useCheckBigScreen';

const resizeWindow = (x: number) => {
    window.innerWidth = x;
    window.dispatchEvent(new Event('resize'));
};

function TestComponent() {
    if (useCheckBigScreen()) {
        return <div>BIG SCREEN</div>;
    }
    return <div>SMALL SCREEN</div>;
}

describe('useCheckBigScreen', () => {
    beforeEach(() => {
        resizeWindow(1216);
    });

    it('return siteMetadata', () => {
        const { asFragment } = render(<TestComponent />);
        expect(asFragment()).toMatchSnapshot('big');

        act(() => {
            resizeWindow(900);
        });
        expect(asFragment()).toMatchSnapshot('small');
    });

    it('return window undefined', () => {
        // @ts-ignore
        delete global.window;
        expect(useCheckBigScreen()).toBe(true);
    });
});
