import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { TagsList } from './TagsList';

// TODO interface
/**
 * A component with search and filter based functionalities. The search and
 * filter functionalities cannot be used at the same time. The component can be used with all
 * post types and is meant to be used on an index style page.
 *
 * `Filter:` The filter is based on the posts' tags. All tags used are display on the right and
 * the user can filter the displayed posts by clicking on the tag button.
 *
 * `Search:` The search has a clear button and will search when the user presses enter or clicks
 * the search button. The search returns results if the user's query is found in the post title,
 * or description
 *
 * **NOTE: The search functionality is currently not implemented**
 * @param {{fieldValue: string, totalCount: number}[]} tags - array of all tags with total tag count
 * @param {number} totalPostCount - total amount of posts
 * @param {string} activeTag - the current tag being used for filtering
 * @param {boolean} isSearchActive - true when the user is interacting with the search bar. When true, filter
 * will be disabled.
 * @param {PostType} type - the type of post being filtered/searched
 * @param {void} clearSearchQuery - void function used as the action when search is cleared
 * @param {void} handleFilterUpdate - void function used as the action when filter is updated
 * @param {void} handleSubmitSearch - void function used as the action when search is submitted
 *
 * @see TagsList
 * @see PostPage
 * @category Components
 */
export const SearchFilterRow = (props: {
    tags: {
        fieldValue: string;
        totalCount: number;
    }[];
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

    const hasQuery = props.searchQuery !== '';

    return (
        <section className="section ">
            <div className="container is-max-desktop">
                <div className="columns">
                    <div className="column">
                        <form
                            className="field has-addons"
                            onSubmit={props.handleSubmitSearch}
                        >
                            <p className="control has-icons-right">
                                <input
                                    className="input"
                                    name="searchPost"
                                    data-testid="searchPost"
                                    type="search"
                                    placeholder="Find a post"
                                    value={value}
                                    key={props.searchQuery}
                                    onChange={handleChange}
                                    disabled={
                                        props.activeTag !== '' &&
                                        props.activeTag !== 'all'
                                    }
                                />

                                {hasQuery && (
                                    <span>
                                        <FontAwesomeIcon
                                            size="2xs"
                                            className="icon is-small is-right search-clear-btn"
                                            data-testid="clearSearch"
                                            icon={faCircleXmark}
                                            onClick={props.clearSearchQuery}
                                        />
                                    </span>
                                )}
                            </p>
                            <p className="control">
                                <button
                                    className="button is-success"
                                    data-testid="searchPostSubmit"
                                    disabled={
                                        props.activeTag !== '' &&
                                        props.activeTag !== 'all'
                                    }
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
