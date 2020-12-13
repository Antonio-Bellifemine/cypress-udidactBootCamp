before(() => {
    cy.login(Cypress.env('UserName'), Cypress.env('Password'), { timeout: 10000 });
});

describe("Settings Page'", () => {

    it("Confirm settings page expected elements", () => {
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