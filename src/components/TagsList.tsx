import { Link } from 'gatsby';
import React from 'react';

const TagsList = (props: {
    tags: Array<string>;
    handleFilterUpdate: (e: any) => void;
}) => {
    return (
        <div className="tags">
            <Link
                to={`/blog`}
                id="all"
                className="tag is-success is-light is-medium"
                onClick={props.handleFilterUpdate}
            >
                All
            </Link>
            {props.tags.map((tag: string) => {
                return (
                    <Link
                        to={`?tag=${tag}`}
                        key={tag}
                        id={tag}
                        data-testid={tag}
                        className="tag is-success is-light is-medium"
                        onClick={props.handleFilterUpdate}
                    >
                        {tag}
                    </Link>
                );
            })}
        </div>
    );
};

export default TagsList;
