const { Chance } = require("chance");
let chance = new Chance()

let articleTitle = chance.word();
let articleAbout = chance.word();
let randomSentance = chance.sentence();
let randomTag = chance.word();

before(() => {
    cy.login(Cypress.env('UserName'), Cypress.env('Password'), { timeout: 10000 });
});

describe("Click 'New Post'", () => {
    it("confirm clicking 'New Post' redirects to correct page", () => {
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
        // we will confirm we successfully created a post by validating against the URL
        cy.intercept('GET', `**/**/${articleTitle}-*`).as('newPostHref');
        cy.get('button').contains(' Publish Article ').click();
        
        cy.wait('@newPostHref');
    });
});

after(() => {
    cy.logout();
});