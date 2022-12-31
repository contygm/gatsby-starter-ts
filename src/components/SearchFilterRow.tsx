import React from 'react';
import TagsList from './TagsList';

const SearchFilterRow = (props: {
    tags: Array<{
        fieldValue: string;
        totalCount: number;
    }>;
    totalPostCount: number;
    activeTag: string;
    handleFilterUpdate: (e: any) => void;
    handleSubmitSearch: (e: any) => void;
}) => {

    return (
        <section className="section ">
            <div className="container is-max-desktop">
                <div className="columns">
                    <div className="column">
                        <form className="field has-addons" onSubmit={props.handleSubmitSearch}>
                            <p className="control">
                                <input
                                    className="input"
                                    name="searchPost"
                                    type="text"
                                    placeholder="Find a post"
                                />
                            </p>
                            <p className="control">
                                <button className="button">Search</button>
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

export default SearchFilterRow;
