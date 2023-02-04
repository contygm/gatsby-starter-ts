import React, { FunctionComponent } from 'react';
import DefinitionCard from './DefinitionCard';

interface GlossaryIndexProps {
    allDefinitions: Array<GlossaryElements>;
    // handleFilterUpdate: (e: any) => void;
}

const GlossaryIndex: FunctionComponent<GlossaryIndexProps> = ({
    allDefinitions
}: // handleFilterUpdate
GlossaryIndexProps) => {
    return (
        <article className="section">
            <section className="container is-max-desktop">
                {/* post cards */}
                <div className="columns is-multiline is-centered">
                    {allDefinitions.length > 0 ? (
                        allDefinitions.map((def: GlossaryElements) => {
                            return (
                                <div
                                    data-testid={'post-card'}
                                    className="column is-4"
                                    key={def.frontmatter.title.toLowerCase()}
                                >
                                    <DefinitionCard
                                        definition={def}
                                        // handleFilterUpdate={handleFilterUpdate}
                                    />
                                </div>
                            );
                        })
                    ) : (
                        // TODO make no results look like something
                        <div>No results</div>
                    )}
                </div>
            </section>
        </article>
    );
};

export default GlossaryIndex;
