before(() => {
    cy.login(Cypress.env('UserName'), Cypress.env('Password'));
});

describe('Main Home Page', () => {

    it('log in', () => {
        let navItems = Cypress.$('a')
        cy.get('a').contains('Your Feed').should('be.visible');
        cy.get('conduit-navbar').within(() => {
            // turn these into commands
            cy.get(navItems).eq(1).should('contain', 'Home')
            cy.get(navItems).eq(2).should('contain', 'New Post')
            cy.get(navItems).eq(3).should('contain', 'Settings')
            cy.get(navItems).eq(4).should('contain', 'UdidactCamp2020')
        });
    });
    
});

after(() => {
    let settingsUrl = "https://conduit-af252.firebaseapp.com/#/profile/UdidactCamp2020";
    cy.get('a[href="#/profile/UdidactCamp2020"]').eq(0).click({ force: true });
    cy.waitUntil(() =>
        cy.url().should('eql', settingsUrl),
        {
            timeout: 6000, // waits up to 2000 ms, default to 5000
            interval: 1000, // performs the check every 1000 ms, default to 200
            errorMsg: 'This is a custom error message' // overrides the default error message
        });
    cy.get('a').contains(' Edit Profile Settings ').click({ force: true });
    cy.get('button.btn-outline-danger').contains(' Or click here to logout. ').click({ force: true });
});