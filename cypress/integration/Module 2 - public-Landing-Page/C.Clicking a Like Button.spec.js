before(() => {
    cy.visit('')
});

describe("Clicking a like button while not logged in", () => {

    it("click like to confirm redirect to 'Sign In' Page", () => {
        cy.get('button').eq(0).click();
        cy.get('h1').should('have.text', 'Sign in');
        cy.get('a').contains("Need an account?");
        cy.get('input:eq(0)').should('have.attr', 'placeholder').and('eql', 'Username');
        cy.get('input:eq(1)').should('have.attr', 'placeholder').and('eql', 'Password');
    });

});