import React, { useRef, useEffect } from 'react';

// REVIEW should this be in the hooks folder?
/**
 * A custom hook for determining if the user has clicked outside of the wrapped element.
 * @param {React.RefObject<HTMLElement>} ref - reference object
 * @param {void} callback - callback used as action for when user clicks outside of the component
 *
 * @category Components
 * @memberOf OutsideClicker
 * @function useOutsideClick
 */
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

/**
 * A wrapper component to make the ToC aware of when the user clicks outside of it.
 * @param {React.ReactNode} children - the elements to be wrapped
 * @param {void} [callback] - callback used as action for when user clicks outside of the component
 * @returns {JSX.Element}
 *
 * @see ToC
 * @category Components
 */
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
