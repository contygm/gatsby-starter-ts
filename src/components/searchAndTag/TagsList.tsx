import React from 'react';

/**
 * Tag filter props
 * @property {Array<{fieldValue: string, totalCount: number}>} tags - array of all tags with total tag count
 * @property {number} totalPostCount - total amount of posts
 * @property {string} activeTag - the current tag being used for filtering
 * @property {boolean} isSearchActive - true when the user is interacting with the search bar. When true, filter
 * will be disabled.
 * @property {PostType} type - the type of post being filtered/searched
 * @property {void} handleFilterUpdate - void function used as the action when filter is updated
 *
 * @memberof TagsList
 * @category Components
 */
interface TagsListProps {
    tags: {
        fieldValue: string;
        totalCount: number;
    }[];
    totalPostCount: number;
    activeTag: string;
    isSearchActive: boolean;
    type: PostType;
    handleFilterUpdate: (e: any) => void;
}

/**
 * A component used within the SearchFilterRow component. This is the tag filter component, which includes a hard-coded 'all' tag
 * as well as all the tags passed in a parameter.
 * @param {TagsListProps} props
 *
 * @see SearchFilterRow
 * @class
 * @category Components
 */
// TODO Interface containing properties used for search+filter row
export const TagsList = (props: TagsListProps) => {
    const classForAllTag = `tag ${
        props.isSearchActive || 'all' === props.activeTag
            ? 'is-success'
            : 'is-success is-light'
    }`;

    return (
        <div className="field is-grouped is-grouped-multiline">
            <div className="tags has-addons mx-2 tag-align show-pointer">
                <div
                    id="all"
                    data-testid="all"
                    className={`tag ${classForAllTag}`}
                    onClick={props.handleFilterUpdate}
                >
                    All
                </div>
                <span className="tag is-dark">{props.totalPostCount}</span>
            </div>
            {props.tags.map(
                (tag: { fieldValue: string; totalCount: number }) => {
                    const classForTag = props.isSearchActive
                        ? ''
                        : tag.fieldValue === props.activeTag
                        ? 'is-success'
                        : 'is-success is-light';

                    return (
                        <div
                            className="tags has-addons mx-2 tag-align show-pointer"
                            key={tag.fieldValue}
                        >
                            <div
                                id={tag.fieldValue}
                                data-testid={tag.fieldValue}
                                className={`tag ${classForTag}`}
                                onClick={props.handleFilterUpdate}
                            >
                                {tag.fieldValue}
                            </div>
                            <span
                                className={`tag ${
                                    props.isSearchActive
                                        ? 'is-light'
                                        : 'is-dark'
                                }`}
                            >
                                {tag.totalCount}
                            </span>
                        </div>
                    );
                }
            )}
        </div>
    );
};
