before('visit registration page', () => {
    cy.visit('');
})

describe("Covering some basic assertions", () => {

    it('confirm conduit logo visible', () => {
        cy.get('a').contains('conduit').should('be.visible');
    });

    it('Confirm home button visible', () => {
        cy.get('a.nav-link').eq(0).should('have.text', 'Home')
    });

    it('Confirm sign up button visible', () => {
        cy.get('a.nav-link').eq(2).should('have.text', 'Sign up')
    });

    it('Confirm sign in button visible', () => {
        cy.get('a.nav-link').eq(1).should('contain', 'Sign in')
    });

});