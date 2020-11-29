before(() => {
    cy.visit('')
});

describe("Confirm clicking your feed link redirects to the sign in page while logged in", () => {

    it("check to see if 'your feed' link is visible and click it", () => {
        cy.get('a.nav-link').contains('Your Feed').should('be.visible').click();
    });

    it('confirm proper redirect to log in page by verifying URL', () => {
        cy.url().should('equal', 'https://conduit-af252.firebaseapp.com/#/login')
        cy.url().should('include', '#/login')
    });

    it('confirm expected elements display on login page', () => {
        cy.get('h1').should('have.text', 'Sign in').and('be.visible');
        // when using confirming a css color property, Cypress will return and match on rgb rather than hex so we'll need to convert hex to rgb
        cy.get('a').contains('Need an account?').should('have.css', 'color').and('equal', 'rgb(92, 184, 92)')
        cy.get('a').eq(4).should('have.attr', 'href').and('equal', '#/register')
    });

});
