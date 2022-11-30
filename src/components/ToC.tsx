import React, { useEffect, useMemo } from 'react';
import { useActiveHash } from '../utils/useActiveHash';

export default function TableOfContents(props: { tocHtml: string }) {
    const targetedIds = useMemo(() => {
        // extract anchor hrefs
        // NOTE: can't use 'postive lookbehind' because of browser compatibility
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

        // find actice link and set class
        const activeLink = document.querySelectorAll(
            `.toc-links a[href$="${'#' + activeHash}"]`
        );

        if (activeLink.length) {
            activeLink[0].classList.add('is-active');
        }
    }, [activeHash]);

    const tocHtmlWtihHeading = `<h6>Table of Contents</h6>${props.tocHtml}`;

    return (
        <div className="toc-wrapper" data-testid={"toc-wrapper"} role="widget">
            <div
                className="container toc-links"
                dangerouslySetInnerHTML={{ __html: tocHtmlWtihHeading }}
            />
        </div>
    );
}
