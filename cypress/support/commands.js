import 'cypress-wait-until';
const Chance = require('chance')
const chance = new Chance()

Cypress.Commands.add('login', (userName, pswd) => {
    let homeUrl = "https://conduit-af252.firebaseapp.com/#/"
    cy.visit('login');
    cy.get('input:eq(0)').type(userName, {delay: 100});
    cy.get('input:eq(1)').type(pswd, {delay: 100});
    cy.get('button').contains('Sign in').click();
    cy.waitUntil(() =>
        cy.url().should('eql', homeUrl),
        {
            timeout: 6000, // waits up to 2000 ms, default to 5000
            interval: 1000, // performs the check every 1000 ms, default to 200
            errorMsg: 'This is a custom error message' // overrides the default error message
        });
});

Cypress.Commands.add('logout', () => {
    let settingsUrl = 'https://conduit-af252.firebaseapp.com/#/profile/UdidactCamp2020'
    cy.get('li.nav-item').contains(' UdidactCamp2020 ').click()
    cy.waitUntil(() =>
        cy.location('href').should('eql', settingsUrl),
        {
            timeout: 6000, // waits up to 2000 ms, default to 5000
            interval: 1000, // performs the check every 1000 ms, default to 200
            errorMsg: 'This is a custom error message' // overrides the default error message
        })
    cy.get('a').contains(' Edit Profile Settings ').click();
    cy.get('button.btn-outline-danger').contains(' Or click here to logout. ').click();
});