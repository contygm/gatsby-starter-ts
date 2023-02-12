import React from 'react';
import { render } from '@testing-library/react';
import { GlossaryIndex } from '../GlossaryIndex';
import { glossaryDefinitions } from '../../../__mocks__/constants';
import { mockGlossaryPageData } from '../../../__mocks__/mock-glossary-page';

describe('GlossaryIndex', () => {
    it('default renders correctly', () => {
        const { asFragment, getAllByTestId } = render(
            <GlossaryIndex allDefinitions={glossaryDefinitions} allLetters={mockGlossaryPageData.data.allLetters}/>
        );
        expect(asFragment()).toMatchSnapshot();
        expect(getAllByTestId('definition-card').length).toEqual(5);
    });

    it('default renders correctly with no results', () => {
        const { asFragment, getAllByTestId } = render(
            <GlossaryIndex allDefinitions={[]} />
        );
        expect(asFragment()).toMatchSnapshot();
        try {
            /**
             * NOTE: This should fail because allDefinitions is an empty array,
             * so there is no instance of a definition-card. Jest doesn't have a
             * built-in way to fail gracefully, so we have to use a try catch.
             *
             * If there is a definition-card for some reason, this test will still fail,
             * because in this try, we export().toBeUndefined().
             */
            expect(getAllByTestId('definition-card')).toBeUndefined();
        } catch (e) {
            // This should succeed, as we expect an undefined error
            expect(e.message).toContain('Unable to find an element by');
        }
    });
});
