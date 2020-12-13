before(() => {
    cy.login('test9118@testing.com', 'UdidactCamp2020');
});

describe('Main Home Page', () => {

    it('log in', () => {
        cy.get('a').contains('Your Feed').should('be.visible');
        cy.get('conduit-navbar').within(() => {
            // turn these into commands
            cy.get('a.nav-link').contains('Home').should('be.visible');
            cy.get('a.nav-link').contains('New Post').should('be.visible');
            cy.get('a.nav-link').contains('Settings').should('be.visible');
            cy.get('a.nav-link').contains('UdidactCamp2020').should('be.visible');
        });
    });
    
});

// we'll log out of every test to start in a clean application state
after(() => {
    let settingsUrl = "https://conduit-af252.firebaseapp.com/#/profile/UdidactCamp2020";
    cy.get('a.nav-link[href="#/profile/UdidactCamp2020"]').eq(0).click({ force: true });
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