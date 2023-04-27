import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { TagsList } from './TagsList';

/**
 * search + filter rows props
 * @property {Array<{fieldValue: string, totalCount: number}>} tags - array of all tags with total tag count
 * @property {number} totalPostCount - total amount of posts
 * @property {string} activeTag - the current tag being used for filtering
 * @property {boolean} isSearchActive - true when the user is interacting with the search bar. When true, filter
 * will be disabled.
 * @property {PostType} type - the type of post being filtered/searched
 * @property {void} handleFilterUpdate - void function used as the action when filter is updated
 * @property {void} handleSubmitSearch - void function used as the action when search is submitted
 *
 * @memberof SearchFilterRow
 * @category Components
 */
interface SearchFilterRowProps {
    tags: {
        fieldValue: string;
        totalCount: number;
    }[];
    totalPostCount: number;
    activeTag: string;
    searchQuery: string;
    type: PostType;
    handleFilterUpdate: (e: SyntheticEvent) => void;
    handleSubmitSearch: (e: any) => void;
}
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
 * @param {SearchFilterRowProps} props
 *
 * @see TagsList
 * @see IndexFilterWrapper
 * @class
 * @category Components
 */
export const SearchFilterRow = (props: SearchFilterRowProps) => {
    const [value, setValue] = useState(props.searchQuery);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value;
        setValue(val);
    };

    useEffect(() => {
        setValue(props.searchQuery);
    }, [props.searchQuery]);

    const hasQuery = props.searchQuery !== '';

    return (
        <section className="section">
            <div className="search-filter-wrapper">
                <div className="columns">
                    <div className="column">
                        <form
                            className="search-form"
                            onSubmit={props.handleSubmitSearch}
                        >
                            <p className="search-form-input-wrapper">
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
                            </p>
                            <p className="control">
                                <button
                                    className="primary-button"
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

                    <div className="search-row-tags-wrapper">
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
