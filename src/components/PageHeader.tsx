import * as React from 'react';

/**
 * @description Page header for standard pages
 * @param title - the page title to be displayed
 * @param alignCenter - boolean;
 */
const PageHeader = (props: { title: string; alignCenter?: boolean }) => {
    const centerClass = props.alignCenter ? 'has-text-centered' : '';

    return (
        <header className="hero is-medium">
            <div className="hero-body has-background-black">
                <div className={`container ${centerClass}`}>
                    <h1 className="title has-text-white is-1">
                        {props.title}
                        <span className="pg-header-period">.</span>
                    </h1>
                </div>
            </div>
        </header>
    );
};

export default PageHeader;
