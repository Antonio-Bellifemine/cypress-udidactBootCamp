before(() => {
    cy.visit('')
});

describe('Creating a new user', () => {

    it('Successfully create new user', () => {
        cy.get('a').contains("Sign in").click();
        cy.get('a').contains("Need an account?").click();
        cy.get('input').eq(0).should('be.visible');
        cy.get('input').eq(1).should('be.visible');
        cy.get('input').eq(2).should('be.visible');
    });

}); 