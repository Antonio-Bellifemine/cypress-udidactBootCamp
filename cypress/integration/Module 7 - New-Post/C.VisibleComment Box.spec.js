before(() => {
    cy.login(Cypress.env('UserName'), Cypress.env('Password'), { timeout: 10000 });
    cy.createNewPost()
});

describe("Make Sure Comment Box is Visible'", () => {

    it('Check for comment box', () => {
        
        // we'll check to seee if the comment box is visible
        cy.get('textarea[placeholder="Write a comment..."]').should('be.visible');
        // Validate
        cy.get('button[type="submit"]').should('have.css', 'color', 'rgb(255, 255, 255)').and('have.text', ' Post Comment ');

    });

});

after(() => {
    cy.logout();
});