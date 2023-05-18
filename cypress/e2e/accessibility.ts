import { data } from '../fixtures/all-pages.json';

function terminalLog(violations) {
    cy.task(
      'log',
      `${violations.length} accessibility violation${
        violations.length === 1 ? '' : 's'
      } ${violations.length === 1 ? 'was' : 'were'} detected`
    )
    // pluck specific keys to keep the table readable
    const violationData = violations.map(
      ({ id, impact, description, nodes }) => ({
        id,
        impact,
        description,
        nodes: nodes.length
      })
    )
  
    cy.task('table', violationData)
  }
  

describe('Accessibility Tests', () => {
    beforeEach(() => {
        cy.viewport(1280, 800);
    });

    data.allPages.forEach((link) => {
        it(`${link.name} Page has no detectable accessibility violations`, () => {
            cy.visit(link.url).get('main');
            cy.injectAxe();
            cy.checkA11y(null, {
                runOnly: {
                  type: 'tag',
                  values: ['wcag2a']
                }
              }, terminalLog);
        });
    });
});
