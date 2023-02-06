import React, { FunctionComponent } from 'react';
import { DefinitionCard } from './DefinitionCard';

export interface GlossaryIndexProps {
    allDefinitions: Array<GlossaryElements>;
    // handleFilterUpdate: (e: any) => void;
}

export const GlossaryIndex: FunctionComponent<GlossaryIndexProps> = ({
    allDefinitions
}: // handleFilterUpdate
GlossaryIndexProps) => {
    return (
        <article className="section">
            <section className="container">
                {/* post cards */}
                <div className="is-centered">
                    {allDefinitions.length > 0 ? (
                        allDefinitions.map((def: GlossaryElements) => {
                            return (
                                <div
                                    data-testid={'definition-card'}
                                    className="my-5"
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

// export default GlossaryIndex;
