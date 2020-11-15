before('visit registration page', () => {
    cy.visit('register');
})

describe('Registration Page Displays Properly', () => {

    it('verify conduit logo appears', () => {
        cy.get('a').contains('conduit').should('be.visible');
        cy.get('h1').contains('Sign in').should('be.visible')
    });

    it('verify sign in h1 and "have an account" link appear', () => {
        cy.get('a').contains('conduit').should('be.visible');
        cy.get('a').contains('Have an account?').should('be.visible')
    });
    
});