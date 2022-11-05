/// <reference types="Cypress" />

describe('Links + Routing Tests', () => {
    beforeEach(() => {
        cy.visit('/').get('main');
        cy.viewport(1280, 800);
    });

    it('check navigation links', () => {
        cy.fixture('layout-links.json')
            .its('data.navLinks')
            .then((links) => {
                links.forEach((link) => {
                    cy.get(`[data-cy=${link.cyTag}]`).click();
                    cy.url().should('include', link.url);
                });
            });
    });

    it('check main footer links', () => {
        cy.fixture('layout-links.json')
            .its('data.mainFooterLinks')
            .then((links) => {
                links.forEach((link) => {
                    cy.get(`[data-cy=${link.cyTag}]`).click({ force: true });
                    cy.url().should('include', link.url);
                });
            });
    });

    it('check legal dropdown footer links', () => {
        cy.fixture('layout-links.json')
            .its('data.legalFooterLinks')
            .then((links) => {
                links.forEach((link) => {
                    cy.get(`[data-cy=footer-link-legal]`).realHover();
                    cy.get(`[data-cy=${link.cyTag}]`)
                        .should('exist')
                        .trigger('mouseenter', { force: true })
                        .invoke('show')
                        .click({ force: true });
                    cy.url().should('include', link.url);
                });
            });
    });

    it('non-existent url lands on 404', () => {
        const invalidUrl = 'not-valid-url';
        cy.request({ url: `/${invalidUrl}`, failOnStatusCode: false })
            .its('status')
            .should('equal', 404);
    });
});
