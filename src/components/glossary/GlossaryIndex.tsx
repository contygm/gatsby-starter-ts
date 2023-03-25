import React from 'react';
import { makeLetterDefinitions } from '../../utils/helpers/makeLetterDefinitions';
import { DefinitionCard } from './DefinitionCard';

/**
 * Props for the Glossary Index component
 * @interface GlossaryIndexProps
 * 
 * @property {GlossaryElements[]} allDefinitions - all glossary definitions 
 * @property {Object} [allLetters] - nesting that will be REMOVEd 
 * @property {Array<{fieldValue: string}>} allLetters.group - all starting letters using in the glossary in alphabetical order
 * @see GlossaryElements
 * @see GlossaryIndex
 */
// TODO just pass the group
export interface GlossaryIndexProps {
    allDefinitions: GlossaryElements[];
    allLetters?: {
        group: Array<{
            fieldValue: string;
        }>;
    };
}

/**
 * Props for the Glossary Index component
 * @component
 * 
 * @property {GlossaryIndexProps} props - includes all available definitions and all letters used
 * @see GlossaryIndexProps
 */
export const GlossaryIndex = ({
    allDefinitions,
    allLetters
}: GlossaryIndexProps) => {
    const letterDefinitions = makeLetterDefinitions(
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