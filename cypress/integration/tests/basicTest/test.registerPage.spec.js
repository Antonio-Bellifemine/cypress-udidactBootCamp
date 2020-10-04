
describe('test conduit webapp', () => {

    it('display the log in page', () => {
        cy.viewport(1920, 1080);
        cy.visit('register');
        cy.get('a:contains("Sign in")').click()
        cy.get('a:contains("Need an account?")').click()
        cy.get('input:eq(0)').should('be.visible')
        cy.get('input:eq(1)').should('be.visible')
        cy.get('input:eq(2)').should('be.visible')
    });

    it('display the log in page', () => {
        cy.viewport(1920, 1080);
        cy.visit('register');
        cy.get('a:contains("Sign in")').click()
        cy.get('a:contains("Need an account?")').click()
        cy.get('input[placeholder="Username"]').should('be.visible')
        cy.get('input[placeholder="Email"]').should('be.visible')
        cy.get('input[type="password"]').should('be.visible')
    });

 
});