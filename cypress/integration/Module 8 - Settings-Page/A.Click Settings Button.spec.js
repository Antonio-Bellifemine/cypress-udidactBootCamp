before(() => {
    cy.login(Cypress.env('UserName'), Cypress.env('Password'), { timeout: 10000 });
});

describe("Settings", () => {

    it("Confirm settings button redirect", () => {
        cy.clickSettings();
        cy.get('h1').should('be.visible').and('contain.text','Your Settings');
    });

});

after(() => {
    cy.logout();
});