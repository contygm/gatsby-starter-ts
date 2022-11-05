describe('Mobile Tests', () => {
    beforeEach(() => {
		cy.visit('/').get('main');
        cy.viewport(360, 760)
    });

    it('check mobile navigation styling', () => {
        // hamburger exists
        cy.get('[data-cy=nav-hamburger]').should('be.visible')
        
        // no links shown
        cy.fixture('layout-links.json')
            .its('data.navLinks')
            .then((links) => {
                links.forEach((link) => {
                    if(link.name === "Logo") {
                        cy.get(`[data-cy=${link.cyTag}]`).should('be.visible');
                    } else {
                        cy.get(`[data-cy=${link.cyTag}]`).should('be.not.visible');
                    }
                });
            });
        
        // open hamburger
        cy.get('[data-cy=nav-hamburger]').click()

        // all links show
        cy.fixture('layout-links.json')
            .its('data.navLinks')
            .then((links) => {
                links.forEach((link) => {
                    cy.get(`[data-cy=${link.cyTag}]`).should('be.visible');
                });
            });
        
        // close hamburger
        cy.get('[data-cy=nav-hamburger]').click()

        // no links shown
        cy.get(`[data-cy=nav-link-home]`).should('be.not.visible')
        cy.get(`[data-cy=nav-link-logo]`).should('be.visible');
    });

	it('check mobile footer styling', () => {
        // all icon links show
        cy.get(`[data-cy=footer-falink]`)
            .should('be.visible')
            .then((icons) => {
                expect(icons, '3 footer icons').to.have.length(3)
            });
        
        // main footer links show
        cy.fixture('layout-links.json')
            .its('data.mainFooterLinks')
            .then((links) => {
                links.forEach((link) => {
                    cy.get(`[data-cy=${link.cyTag}]`).should('be.visible');
                });
            });
        
        // footer icon shows footer-logo
        cy.get(`[data-cy=footer-logo]`).should('be.visible');

    });
});