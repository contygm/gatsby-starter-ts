/// <reference types="Cypress" />
import { data } from '../fixtures/layout-links.json';

describe('Legal pages', () => {
    beforeEach(() => {
        cy.visit('/legal').get('main');
        cy.viewport(1280, 800);
    });

    data.legalIndexLinks.forEach((link) => {
        it(`${link.name} tile routes correctly`, () => {
            cy.get(`[data-cy=${link.cyTag}]`).click();
            cy.url().should('include', link.url);
        });
    });
});
