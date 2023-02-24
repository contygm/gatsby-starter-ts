import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { TagsList } from './TagsList';

export const SearchFilterRow = (props: {
    tags: Array<{
        fieldValue: string;
        totalCount: number;
    }>;
    totalPostCount: number;
    activeTag: string;
    searchQuery: string;
    type: PostType;
    clearSearchQuery: () => void;
    handleFilterUpdate: (e: any) => void;
    handleSubmitSearch: (e: any) => void;
}) => {
    const [value, setValue] = useState(props.searchQuery);

    const handleChange = (event: any) => {
        const val = event.target.value;
        setValue(val);
    };

    useEffect(() => {
        setValue(props.searchQuery);
    }, [props.searchQuery]);

    const hasQuery = props.searchQuery !== "";

    return (
        <section className="section ">
            <div className="container is-max-desktop">
                <div className="columns">
                    <div className="column">
                        <form
                            className="field has-addons"
                            onSubmit={props.handleSubmitSearch}
                        >
                            <p className="control has-icons-right is-100-wide">
                                <input
                                    className="input is-100-wide"
                                    name="searchPost"
                                    data-testid="searchPost"
                                    type="search"
                                    placeholder="Find a post"
                                    value={value}
                                    key={props.searchQuery}
                                    onChange={handleChange}
                                    disabled={props.activeTag !== '' && props.activeTag !== 'all'}
                                />

                                {hasQuery && 
                                    <span>
                                        <FontAwesomeIcon 
                                        size="2xs" 
                                        className="icon is-small is-right search-clear-btn" 
                                        icon={faCircleXmark} 
                                        onClick={props.clearSearchQuery}
                                    />
                                    </span>
                                }
                                 
                            </p>
                            <p className="control is-100-wide">
                                <button
                                    className="button is-60-wide is-success"
                                    data-testid="searchPostSubmit"
                                    disabled={props.activeTag !== '' && props.activeTag !== 'all'}
                                >
                                    Search
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
                            type={props.type}
                            isSearchActive={hasQuery}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
