before(() => {
    cy.login(Cypress.env('UserName'), Cypress.env('Password'), {timeout: 10000});
});

describe("Click 'New Post'", () => {
    it("confirm clicking 'New Post' redirects to correct page", () => {
        cy.get('a[href="#/editor"]').click();
        cy.get('button').contains(' Publish Article ').click();
        cy.waitUntil(() => 
            cy.get('ul[class="error-messages"]'),
        {

        }).within(() => {
            cy.get('li').eq(0).should('have.text', ' title can\'t be blank,is too short (minimum is 1 character) ')
            cy.get('li').eq(1).should('have.text', ' body can\'t be blank ')
            cy.get('li').eq(2).should('have.text', " description can't be blank,is too short (minimum is 1 character) ")
        });
    });
});

after(() => {
    cy.logout();
});