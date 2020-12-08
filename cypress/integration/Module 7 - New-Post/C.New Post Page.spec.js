before(() => {
    cy.login(Cypress.env('UserName'), Cypress.env('Password'), { timeout: 10000 });
    cy.createNewPost()
});

describe("New Post Page'", () => {
    //TODO fix this broken ass shit
    it("Check to see if new post page has expected elements", () => {
        cy.get('a').eq(0);
        cy.get('a.author').eq(1).should('contain', ' UdidactCamp2020 ');
        cy.get('a[class="btn btn-sm btn-outline-secondary"]').contains(' Edit Article ').should('be.visible')
        cy.get('button').contains(' Delete Article ').should('be.visible');
    });
});

after(() => {
    cy.logout();
});