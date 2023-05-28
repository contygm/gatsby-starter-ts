import { useEffect, useState } from 'react';

/**
 * a quick hook to check if the screen is mobile or tablet size
 * @function useCheckMobileScreen
 * @returns {boolean}
 */
const useCheckMobileScreen = ( breakpoint = 1216 ) => {
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

        return width < breakpoint;
    }
    return false;
};

export default useCheckMobileScreen;
