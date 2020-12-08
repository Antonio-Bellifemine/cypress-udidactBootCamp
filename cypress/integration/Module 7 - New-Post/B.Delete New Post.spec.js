before(() => {
    cy.login(Cypress.env('UserName'), Cypress.env('Password'), { timeout: 10000 });
    cy.createNewPost()
});

describe("Delete New Post'", () => {

    it("Create New Post and Click Delete", () => {
        cy.get('a').eq(0);
        cy.get('button').contains(' Delete Article ').should('be.visible');
    });

    it('Confirm Back On Home Page', () => {
        let navItems = Cypress.$('a')
        cy.get('a').contains('Your Feed').should('be.visible');
        cy.get('conduit-navbar').within(() => {
            cy.get(navItems).eq(1).should('contain', 'Home')
            cy.get(navItems).eq(2).should('contain', 'New Post')
            cy.get(navItems).eq(3).should('contain', 'Settings')
            cy.get(navItems).eq(4).should('contain', 'UdidactCamp2020')
        });
    });

});

after(() => {
    cy.logout();
});