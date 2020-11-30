before(() => {
    cy.visit('')
});

describe('Confirm Headline and Need An Account Redirect Link', () => {

    it('check Headline and redirect link to sign up page is visible', () => {
        cy.get('a').contains("Sign in").click();
        cy.get('h1').should('have.text', 'Sign in');
        cy.get('a').contains("Need an account?").should('be.visible')
    });

}); 