// ---- explain triple slash directive for intellisense, syntax completion
/// <reference types="Cypress" />
// ---- now we can add the before block so we can separate the set up code from the test cases
// before('visit registration page', () => {
    
//     cy.visit('register');
//     cy.viewport(1920, 1080);

// })

describe('Checking Registration Page Displays Properly', () => {
    // Move these settings to a before Block
    cy.visit('register');
    cy.viewport(1920, 1080);
    it('click sign in link', () => {
        cy.visit('');
        cy.get('a:contains("Sign in")').click();
        cy.get('input').eq(0).type('UDIDACT');
        cy.get('input').eq(1).type('Password');
    });

    it('check username, email, password input fields', () => {
        cy.visit('register');
        cy.get('input').eq(0).should('be.visible').type("Test Tester");
        cy.get('input').eq(1).should('be.visible').type('Tester@templateSettings.com');
        cy.get('input').eq(2).should('be.visible').type('password12345', {delay: 300});
    });

});