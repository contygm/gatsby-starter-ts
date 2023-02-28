import React, { FunctionComponent } from 'react';
import { DefinitionCard } from './DefinitionCard';

export interface GlossaryIndexProps {
    allDefinitions: Array<GlossaryElements>;
    allLetters?: {
        group: Array<{
            fieldValue: string;
        }>;
    };
    // handleFilterUpdate: (e: any) => void;
}

const letterDefinitionObjectArray = (
    allLetters: GlossaryIndexProps['allLetters'],
    allDefinitions: GlossaryIndexProps['allDefinitions']
) => {
    let index = 0;
    const resArray: any[] = [];
    allLetters?.group.forEach((letterObj) => {
        const newLetterDefObj = {
            letter: letterObj.fieldValue,
            definitions: [] as Array<GlossaryElements>
        };

        while (
            index < allDefinitions.length &&
            letterObj.fieldValue === allDefinitions[index].frontmatter.letter
        ) {
            newLetterDefObj.definitions.push(allDefinitions[index]);
            index++;
        }
        resArray.push(newLetterDefObj);
    });
    return resArray;
};

export const GlossaryIndex: FunctionComponent<GlossaryIndexProps> = ({
    allDefinitions,
    allLetters
}: // handleFilterUpdate
GlossaryIndexProps) => {
    const letterDefinitions = letterDefinitionObjectArray(
        allLetters,
        allDefinitions
    );

    return (
        <article className="container">
            {/* post cards */}
            <div className="is-centered">
                {letterDefinitions.length > 0 ? (
                    letterDefinitions.map((defObj) => {
                        if (defObj.definitions.length > 0) {
                            return (
                                <section
                                    className="section pt-0"
                                    key={defObj.letter}
                                >
                                    <h2
                                        className="title is-size-2"
                                        id={`${defObj.letter}`}
                                    >
                                        {defObj.letter}
                                    </h2>
                                    {defObj.definitions.map(
                                        (definition: GlossaryElements) => {
                                            return (
                                                <div
                                                    data-testid={
                                                        'definition-card'
                                                    }
                                                    className=""
                                                    key={definition.frontmatter.title.toLowerCase()}
                                                >
                                                    <DefinitionCard
                                                        definition={definition}
                                                        includeAll={true}
                                                        // handleFilterUpdate={handleFilterUpdate}
                                                    />
                                                </div>
                                            );
                                        }
                                    )}
                                </section>
                            );
                        }
                    })
                ) : (
                    <h2 className="title is-size-3">No results</h2>
                )}
            </div>
        </article>
    );
};

// export default GlossaryIndex;
