import React from 'react';

const TagsList = (props: {
    tags: Array<string>;
    handleFilterUpdate: (e: any) => void;
}) => {
    return (
        <div className="tags">
            <span
                id="all"
                className="tag is-success is-light is-medium"
                onClick={props.handleFilterUpdate}
            >
                All
            </span>
            {props.tags.map((tag: string) => {
                return (
                    <span
                        key={tag}
                        id={tag}
                        data-testid={tag}
                        className="tag is-success is-light is-medium"
                        onClick={props.handleFilterUpdate}
                    >
                        {tag}
                    </span>
                );
            })}
        </div>
    );
};

export default TagsList;
