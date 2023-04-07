import { useEffect, useState } from 'react';

/**
 * A hook to find the current active element in a Table of contents. The function takes all the anchors (itemIds) from the ToC
 * and registers when the active element is interacted with / changes.
 * @function useActiveHash
 * @param {string[]} itemIds - list of anchor tags connected to the ToC[]
 * @param {string} [rootMargin=undefined] - 
 * @returns {string} 
 */
export const useActiveHash = (
    itemIds: string[],
    rootMargin = undefined
) => {
    const [activeHash, setActiveHash] = useState(``);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveHash(entry.target.id);
                    }
                });
            },
            { rootMargin: rootMargin || `0% 0% -80% 0%` }
        );

        itemIds.forEach((id) => {
            observer.observe(document.getElementById(id) as Element);
        });

        return () => observer.disconnect();
    }, []);

    return activeHash;
};
