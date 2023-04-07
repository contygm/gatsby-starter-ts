import { useEffect, useState } from 'react';

// TODO combine with small screen
/**
 * a quick hook to check if the screen is web
 * @function useCheckBigScreen
 * @returns {boolean}
 */
const useCheckBigScreen = () => {
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

        return width >= 1216;
    }

    return true;
};

export default useCheckBigScreen;
