before(() => {
    cy.visit('')
});

describe('Confirm expected user inputs on', () => {

    it('check user inputs are available', () => {
        cy.get('a').contains("Sign up").click();
        cy.get('a').contains("Have an account?").click();
        cy.get('input').eq(0).should('be.visible');
        cy.get('input').eq(1).should('be.visible');
        cy.get('input').eq(2).should('be.visible');
    });

}); 