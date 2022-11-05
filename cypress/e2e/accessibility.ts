/// <reference types="Cypress" />

describe('Accessibility Tests', () => {
    beforeEach(() => {
        // TODO view port
    });

    // TODO
    it.skip('check accessibility for all pages', () => {
        cy.fixture('all-pages.json')
            .its('data.allPages')
            .then((links) => {
                links.forEach((link) => {
                    cy.visit(link.url).get('main');
                    cy.injectAxe();
                    cy.checkA11y();
                });
            });
    });
});
