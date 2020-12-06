before(() => {
    cy.login(Cypress.env('UserName'), Cypress.env('Password'));
});

describe('Main Home Page', () => {

    it('log in', () => {
        let navItems = Cypress.$('a')
        cy.get('a').contains('Your Feed').should('be.visible');
        cy.get('conduit-navbar').within(() => {
            cy.get(navItems).eq(1).should('contain', 'Home')
            cy.get(navItems).eq(2).should('contain', 'New Post')
            cy.get(navItems).eq(3).should('contain', 'Settings')
            cy.get(navItems).eq(4).should('contain', 'UdidactCamp2020')
        })
    });
    
});

after(() => {
    cy.logout();
});