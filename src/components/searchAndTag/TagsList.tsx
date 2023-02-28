import React from 'react';

export const TagsList = (props: {
    tags: Array<{
        fieldValue: string;
        totalCount: number;
    }>;
    totalPostCount: number;
    activeTag: string;
    isSearchActive: boolean;
    type: PostType;
    handleFilterUpdate: (e: any) => void;
}) => {
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
