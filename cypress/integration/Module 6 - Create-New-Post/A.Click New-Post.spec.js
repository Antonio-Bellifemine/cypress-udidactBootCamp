before(() => {
    cy.login(Cypress.env('UserName'), Cypress.env('Password'), {timeout: 10000});
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
        cy.get('input[placeholder="Article Title"]').should('be.visible')
        cy.get('input[placeholder="What\'s this article about?"]').should('be.visible')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').should('be.visible')
        cy.get('input[placeholder="Enter Tags"]').should('be.visible')
    });
});

after(() => {
    cy.logout();
});