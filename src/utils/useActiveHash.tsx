import { useEffect, useState } from 'react';

export const useActiveHash = (
    itemIds: Array<string>,
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

        return () => {
            itemIds.forEach((id) => {
                observer.unobserve(document.getElementById(id) as Element);
            });
        };
    }, []);

    return activeHash;
};
