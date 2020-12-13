before(() => {
    cy.login(Cypress.env('UserName'), Cypress.env('Password'), { timeout: 10000 });
});

describe("Settings Page'", () => {

    it("Confirm expected Buttons are visible and enabled", () => {
        cy.clickSettings();
        cy.get('button[type="submit"]').should('contain', ' Update Settings ').and('be.enabled');
        cy.get('button[class="btn btn-outline-danger"]').should('contain', ' Or click here to logout. ').and('be.enabled');
    });
    
});

after(() => {
    cy.logout();
});