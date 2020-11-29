before(() => {
    cy.visit('')
});

describe('Sign In Page for non logged in user', () => {

    it('verify h1 contains sign in and "have an account" link appear', () => {
        cy.get('a').contains('conduit').should('be.visible');
        cy.get('a').contains('Have an account?').should('be.visible')
        // expected to fail. Explain how to report the bug to the developer/BA/Product Owner
        cy.get('h1').should('contain', 'Sign Up');
    });
    
});

