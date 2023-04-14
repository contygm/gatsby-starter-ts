import React, { SyntheticEvent } from 'react';

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
    handleFilterUpdate: (e: SyntheticEvent) => void;
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
export const TagsList = (props: TagsListProps) => {
    const classForAllTag =
        props.isSearchActive || 'all' === props.activeTag
            ? 'tag-active'
            : 'tag-inactive';

    // TODO get rid of  tag query param
    return (
        <div className="tag-list-wrapper">
            <div className="tag-wrapper">
                <div
                    id="all"
                    data-testid="all"
                    className={`${classForAllTag}`}
                    onClick={props.handleFilterUpdate}
                >
                    All
                </div>
                <span className="tag is-dark">{props.totalPostCount}</span>
            </div>
            {/* TODO ? tag component */}
            {props.tags.map(
                (tag: { fieldValue: string; totalCount: number }) => {
                    const classForTag = props.isSearchActive
                        ? 'tag-base'
                        : tag.fieldValue === props.activeTag
                        ? 'tag-active'
                        : 'tag-inactive';

                    const classForTagCount = props.isSearchActive
                        ? 'tag-count-disabled'
                        : 'tag-count-enabled';

                    return (
                        <div
                            className="tag-wrapper"
                            key={tag.fieldValue}
                        >
                            <div
                                id={tag.fieldValue}
                                data-testid={tag.fieldValue}
                                className={`${classForTag}`}
                                onClick={props.handleFilterUpdate}
                            >
                                {tag.fieldValue}
                            </div>
                            <span className={classForTagCount}>
                                {tag.totalCount}
                            </span>
                        </div>
                    );
                }
            )}
        </div>
    );
};
