before(() => {
    cy.login(Cypress.env('UserName'), Cypress.env('Password'), { timeout: 10000 });
});

describe("User Profile Page'", () => {
    it("Confirm My Articles is visible", () => {
        cy.clickUserProfile();
        cy.waitUntil(() => 
            cy.get('i[class="ion-heart"]').should('be.visible'),
        {
            timeout: 6000, // waits up to 2000 ms, default to 5000
            interval: 1000, // performs the check every 1000 ms, default to 200
            errorMsg: 'This is a custom error message' // overrides the default error message
        });
        cy.get('a').contains('My Articles').should('be.visible')
    });
});

after(() => {
    cy.logout();
});