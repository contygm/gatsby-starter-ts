import React, { useEffect, useMemo } from 'react';
import { useActiveHash } from '../../utils/useActiveHash';

/**
 * A table of contents component. This takes the ToC html returned via gatsby query and build an 
 * anchor tag to the appropriate heading. When a heading is at the top of the page, the corresponding
 * ToC link will be highlighted. This will update as the user scrolls through the page.
 * @component
 * 
 * @param {Object} props 
 * @param {string} props.tocHtml - the nested html for table of contents provided from gatsby graphql query. 
 * @param {boolean} props.includeTitle - option to include the title or not. When true, the following is added to 
 * the top of the ToC: `<h6>Table of Contents</h6>`
 * 
 * @see OutsideClicker
 */
export function ToC(props: { tocHtml: string; includeTitle: boolean }) {
    const targetedIds = useMemo(() => {
        // extract anchor hrefs
        // NOTE: can't use 'positive lookbehind' because of browser compatibility
        // so must leave in # instead of using `(?<=\#)(.*?)(?=\")`
        const anchors = props.tocHtml.match(/#(.*?)(?=")/gi) ?? [];

        // remove # from anchors
        anchors.forEach((a, i) => (anchors[i] = a.replace('#', '')));
        return anchors;
    }, []);

    const activeHash = useActiveHash(targetedIds);

    useEffect(() => {
        // get all links and remove active class
        const links = document.querySelectorAll(`.toc-links a`);
        links.forEach((a) => {
            a.classList.remove('is-active');
        });

        // find active link and set class
        const activeLink = document.querySelectorAll(
            `.toc-links a[href$="${'#' + activeHash}"]`
        );

        if (activeLink.length) {
            activeLink[0].classList.add('is-active');
        }
    }, [activeHash]);

    const tocHtmlWithHeading = props.includeTitle
        ? `<h6>Table of Contents</h6>${props.tocHtml}`
        : props.tocHtml;

    return (
        <div
            className="toc-wrapper"
            data-testid={'toc-wrapper'}
            role="widget"
        >
            <div
                className="container toc-links"
                dangerouslySetInnerHTML={{ __html: tocHtmlWithHeading }}
            />
        </div>
    );
}
