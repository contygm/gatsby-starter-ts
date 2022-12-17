import React from 'react';
import TagsList from './TagsList';

const SearchFilterRow = (props: {
    tags: Array<string>;
    handleFilterUpdate: (e: any) => void;
}) => {
    return (
        <section className="section ">
            <div className="container is-max-desktop">
                <div className="columns">
                    <div className="column">
                        <div className="field has-addons">
                            <p className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Find a post"
                                />
                            </p>
                            <p className="control">
                                <button className="button">Search</button>
                            </p>
                        </div>
                    </div>

                    <div className="column is-two-thirds">
                        <TagsList
                            tags={props.tags}
                            handleFilterUpdate={props.handleFilterUpdate}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchFilterRow;
