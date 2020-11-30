before(() => {
    cy.visit('')
});

describe('Confirm Headline and Need An Account Redirect Link', () => {

    it('check Headline and redirect link to sign up page is visible', () => {
        cy.get('a').contains("Sign in").click();
        cy.get('input:eq(0)').should('have.attr', 'placeholder').and('eql', 'Username');
        cy.get('input:eq(1)').should('have.attr', 'placeholder').and('eql', 'Password');
        cy.get('button').contains('Sign in').should('be.enabled').and('be.visible').and('have.css', 'background-color').and('equal', 'rgb(92, 184, 92)')
    });

}); 