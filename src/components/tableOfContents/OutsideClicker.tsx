import React, { useRef, useEffect } from 'react';

const useOutsideClick = (
    ref: React.RefObject<HTMLElement>,
    callback: () => void
) => {
    useEffect(() => {
        function handleClickOutside(event: Event) {
            const element = event.target as HTMLElement;

            if (
                ref.current &&
                !ref.current.contains(event.target as Node) &&
                callback &&
                element.id !== 'toc-button' &&
                element.id !== 'toc-button-icon' &&
                element.parentElement?.id !== 'toc-button-icon'
            ) {
                callback();
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
};

export function OutsideClicker(props: {
    children: React.ReactNode;
    callback?: () => void;
}) {
    if (props.callback) {
        const wrapperRef = useRef(null);
        useOutsideClick(wrapperRef, props.callback);

        return <div ref={wrapperRef}>{props.children}</div>;
    }

    return <div>{props.children}</div>;
}
