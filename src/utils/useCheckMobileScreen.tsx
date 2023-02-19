import { useEffect, useState } from 'react';

const useCheckMobileScreen = () => {
    const hasWindow = typeof window !== "undefined";

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
