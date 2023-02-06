import { Link } from 'gatsby';
import React from 'react';

<details>
<summary>Seeder onion</summary>

Seeder onion. Quack hammers eggplant is utters nails garden. Post pounder calf, hay or duck is, tool shed horse. . Coo with rabbits ect. Blue berries pigeons buzz and bean prairie dogs nails at est. Outhouse at nails mower.

</details>

const DefinitionCard = (props: {
    definition: GlossaryElements;
    // handleFilterUpdate: (e: any) => void;
}) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <h2 className="title is-4">
                            {props.definition.frontmatter.title}
                        </h2>
                    </div>
                </div>
                <div className="content">
                    <div
                        className="container"
                        dangerouslySetInnerHTML={{
                            __html: props.definition.html
                        }}
                    />
                </div>
                <div className="card-footer">
                    <p className="mt-2 ml-2 mr-2">Tags:</p>

                    <div className="tags">
                        {props.definition.frontmatter.tags.map(
                            (tag: string) => {
                                return (
                                    <Link
                                        to={`?tag=${tag}`}
                                        id={tag}
                                        className="tag mt-2"
                                        key={tag}
                                        // onClick={props.handleFilterUpdate}
                                    >
                                        {tag}
                                    </Link>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DefinitionCard;
