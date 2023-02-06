import { Link } from 'gatsby';
import React from 'react';

export const TagsList = (props: {
    tags: Array<{
        fieldValue: string;
        totalCount: number;
    }>;
    totalPostCount: number;
    activeTag: string;
    handleFilterUpdate: (e: any) => void;
}) => {
    return (
        <div className="field is-grouped is-grouped-multiline">
            <div className="tags has-addons mx-2 tag-align">
                <Link
                    to={`/blog`}
                    id="all"
                    className={`tag ${
                        'all' === props.activeTag
                            ? 'is-success'
                            : 'is-success is-light'
                    }`}
                    onClick={props.handleFilterUpdate}
                >
                    All
                </Link>
                <span className="tag is-dark">{props.totalPostCount}</span>
            </div>
            {props.tags.map(
                (tag: { fieldValue: string; totalCount: number }) => {
                    return (
                        <div
                            className="tags has-addons mx-2 tag-align"
                            key={tag.fieldValue}
                        >
                            <Link
                                to={`?tag=${tag.fieldValue}`}
                                id={tag.fieldValue}
                                data-testid={tag.fieldValue}
                                className={`tag ${
                                    tag.fieldValue === props.activeTag
                                        ? 'is-success'
                                        : 'is-success is-light'
                                }`}
                                onClick={props.handleFilterUpdate}
                            >
                                {tag.fieldValue}
                            </Link>
                            <span className="tag is-dark">
                                {tag.totalCount}
                            </span>
                        </div>
                    );
                }
            )}
        </div>
    );
};