before(() => {
    cy.login(Cypress.env('UserName'), Cypress.env('Password'), { timeout: 10000 });
});

describe("New Post Page'", () => {
    it("Confirm settings button redirect", () => {
        cy.clickSettings();
        cy.get('input[placeholder="URL of profile picture"]').should('be.visible');
        cy.get('input[placeholder="Your Name"]').should('be.visible');
        cy.get('textarea[placeholder="Short bio about you"]').should('be.visible');
        cy.get('input[placeholder="New Password"]').should('be.visible');
    });
});

after(() => {
    cy.logout();
});