before(() => {
    cy.visit('')
});

describe("Clicking a UserProfile link while not logged in", () => {

    it("click UserProfile to confirm redirect to 'Sign In' Page", () => {
        cy.get('a.author').eq(0).click();
        cy.get('h1.text-xs-center').should('have.text', 'Sign in');
        cy.get('a').contains("Need an account?");
        cy.get('input:eq(0)').should('have.attr', 'placeholder').and('eql', 'Username');
        cy.get('input:eq(1)').should('have.attr', 'placeholder').and('eql', 'Password');
    });

});
