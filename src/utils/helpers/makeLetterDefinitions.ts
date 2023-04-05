import { GlossaryIndexProps } from '../../components';

/**
 * An object containing a letter and definitions that begin with that letter.
 *
 * @typedef {LetterWithDefinitions}
 *
 * @see GlossaryElements
 * @see makeLetterDefinitions
 */
type LetterWithDefinitions = {
    /** The letter all definitions begin with. */
    letter: string;
    /** An array of all the definitions that begin with the letter. */
    definitions: GlossaryElements[];
};

/**
 * A function that takes all the glossary definitions (sorted alphabetically) and splits the definitions based on the word's first letter.
 * The function returns an array of objects, each containing a letter and all definitions starting with that letter.
 *
 * @export
 * @function makeLetterDefinitions
 * @param {GlossaryIndexProps.allLetters} allLetters - All letters used by the glossary. Unused letters should not be included.
 * @param {GlossaryIndexProps.allDefinitions} allDefinitions - All definitions in the glossary. Needs to be sorted alphabetically.
 * @return {LetterWithDefinitions[]} - An array of objects with definitions sorted by letter
 *
 * @see GlossaryElements
 * @see GlossaryIndexProps
 */
export const makeLetterDefinitions = (
    allLetters: GlossaryIndexProps['allLetters'],
    allDefinitions: GlossaryIndexProps['allDefinitions']
): LetterWithDefinitions[] => {
    let index = 0;
    const resArray: LetterWithDefinitions[] = [];
    allLetters?.group.forEach((letterObj) => {
        const newLetterDefObj: LetterWithDefinitions = {
            letter: letterObj.fieldValue,
            definitions: []
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
