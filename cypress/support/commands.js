import 'cypress-wait-until';
const { Chance } = require("chance");
let chance = new Chance();
//--------------------------------------------------------------------------------------------------------------------

// Login
Cypress.Commands.add('login', (userName, pswd) => {
    let homeUrl = "https://conduit-af252.firebaseapp.com/#/";
    cy.visit('login');
    cy.get('input').eq(0).type(userName, {delay: 100});
    cy.get('input').eq(1).type(pswd, {delay: 100});
    cy.get('button').contains('Sign in').click();
    cy.waitUntil(() =>
        cy.location('href').should('eql', homeUrl),
        {
            timeout: 6000, // waits up to 2000 ms, default to 5000
            interval: 1000, // performs the check every 1000 ms, default to 200
            errorMsg: 'This is a custom error message' // overrides the default error message
        });
});
//--------------------------------------------------------------------------------------------------------------------

// Logout
Cypress.Commands.add('logout', () => {
    let settingsUrl = "https://conduit-af252.firebaseapp.com/#/profile/UdidactCamp2020";
    cy.get('a.nav-link[href="#/profile/UdidactCamp2020"]').eq(0).click({force: true});
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


//--------------------------------------------------------------------------------------------------------------------
/* 
create this after completing module 6.C
*/

// Create New Post
Cypress.Commands.add('createNewPost', () => {
    let articleTitle = chance.word();
    let articleAbout = chance.word();
    let randomSentance = chance.sentence();
    let randomTag = chance.word();
    cy.get('a[href="#/editor"]').click();
    cy.waitUntil(() =>
        cy.get('div[class="container page"]'),
        {
            timeout: 5000, // waits up to 2000 ms, default to 5000
            interval: 500, // performs the check every 500 ms, default to 200
            errorMsg: 'This is a custom error message' // overrides the default error message
        });
    cy.get('input[placeholder="Article Title"]').type(articleTitle);
    cy.get('input[placeholder="What\'s this article about?"]').type(articleAbout);
    cy.get('textarea[placeholder="Write your article (in markdown)"]').type(randomSentance);
    cy.get('input[placeholder="Enter Tags"]').type(randomTag);
    cy.get('button').contains(' Publish Article ').click();
});

//--------------------------------------------------------------------------------------------------------------------
/* 
create this after completing module 
*/

// 
Cypress.Commands.add('clickHome', () => {
    cy.get('a.nav-link').eq(0).should('contain', 'Home');
    let settingsUrl = "https://conduit-af252.firebaseapp.com/#/";
    cy.get('a[href="#/"]').eq(0).click({ force: true });
    cy.waitUntil(() =>
        cy.url().should('eql', settingsUrl),
        {
            timeout: 6000, // waits up to 2000 ms, default to 5000
            interval: 1000, // performs the check every 1000 ms, default to 200
            errorMsg: 'This is a custom error message' // overrides the default error message
        });
});

/* 
create these after completing module 5
*/

Cypress.Commands.add('clickNewPost', () => {
    cy.get('a.nav-link').eq(1).should('contain', 'Home').click({ force: true });
    let settingsUrl = "https://conduit-af252.firebaseapp.com/#/editor";
    cy.waitUntil(() =>
        cy.url().should('eql', settingsUrl),
        {
            timeout: 6000, // waits up to 2000 ms, default to 5000
            interval: 1000, // performs the check every 1000 ms, default to 200
            errorMsg: 'This is a custom error message' // overrides the default error message
        });
});

Cypress.Commands.add('clickSettings', () => {
    let settingsUrl = "https://conduit-af252.firebaseapp.com/#/settings";
    cy.get('a.nav-link').eq(2).should('contain', 'Settings').click({ force: true });
    cy.waitUntil(() =>
        cy.url().should('eql', settingsUrl),
        {
            timeout: 6000, // waits up to 2000 ms, default to 5000
            interval: 1000, // performs the check every 1000 ms, default to 200
            errorMsg: 'This is a custom error message' // overrides the default error message
        });
});
 
Cypress.Commands.add('clickUserProfile', () => {
    let settingsUrl = "https://conduit-af252.firebaseapp.com/#/profile/UdidactCamp2020";
    cy.get('a[href="#/profile/UdidactCamp2020"]').click({ force: true });
    cy.waitUntil(() =>
        cy.url().should('eql', settingsUrl),
        {
            timeout: 6000, // waits up to 2000 ms, default to 5000
            interval: 1000, // performs the check every 1000 ms, default to 200
            errorMsg: 'This is a custom error message' // overrides the default error message
        });
});

