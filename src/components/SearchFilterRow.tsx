import React, { useState } from 'react';
import { TagsList } from './TagsList';

export const SearchFilterRow = (props: {
    tags: Array<{
        fieldValue: string;
        totalCount: number;
    }>;
    totalPostCount: number;
    activeTag: string;
    searchQuery: string;
    clearSearchQuery: () => void;
    handleFilterUpdate: (e: any) => void;
    handleSubmitSearch: (e: any) => void;
}) => {
    const [value, setValue] = useState(props.searchQuery);

    const handleChange = (event: any) => {
        const val = event.target.value;
        setValue(val);
    };

    // TODO: make X button work
    //     const hasQuery = props.searchQuery !== "";
    // const btnContent = hasQuery
    //     ? <FontAwesomeIcon icon={faX} />
    //     : "Search";

    const btnContent = 'Search';

    return (
        <section className="section ">
            <div className="container is-max-desktop">
                <div className="columns">
                    <div className="column">
                        <form
                            className="field has-addons"
                            onSubmit={props.handleSubmitSearch}
                        >
                            <p className="control">
                                <input
                                    className="input"
                                    name="searchPost"
                                    data-testid="searchPost"
                                    type="text"
                                    placeholder="Find a post"
                                    value={value}
                                    onChange={handleChange}
                                />
                            </p>
                            <p className="control">
                                <button
                                    className="button"
                                    data-testid="searchPostSubmit"
                                >
                                    {btnContent}
                                </button>
                            </p>
                        </form>
                    </div>

                    <div className="column is-two-thirds m-auto">
                        <TagsList
                            totalPostCount={props.totalPostCount}
                            tags={props.tags}
                            activeTag={props.activeTag}
                            handleFilterUpdate={props.handleFilterUpdate}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
