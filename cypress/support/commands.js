const Chance = require('chance')
const chance = new Chance()

Cypress.Commands.add('checkTypscriptPageButton', (index, value) => {
    cy.get(`button:eq(${index})`).should('be.visible').and('contain.text', `${value}`)
});