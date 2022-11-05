import { data } from '../fixtures/all-pages.json';

describe('Accessibility Tests', () => {
    beforeEach(() => {
        cy.viewport(1280, 800);
    });

    data.allPages.forEach((link) => {
        it(`${link.name} Page has no detectable accessibility violations`, () => {
            cy.visit(link.url).get('main');
            cy.injectAxe();
            cy.checkA11y();
        });
    });
});
