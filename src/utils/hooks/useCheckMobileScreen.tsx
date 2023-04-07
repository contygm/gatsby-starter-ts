import { useEffect, useState } from 'react';

// TODO combine with big screen

/**
 * a quick hook to check if the screen is mobile
 * @function useCheckMobileScreen
 * @returns {boolean}
 */
const useCheckMobileScreen = () => {
    const hasWindow = typeof window !== 'undefined';

    if (hasWindow) {
        const [width, setWidth] = useState(window.innerWidth);

        const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
        };

        useEffect(() => {
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            };
        }, []);

        return width <= 1023;
    }
    return false;
};

export default useCheckMobileScreen;
