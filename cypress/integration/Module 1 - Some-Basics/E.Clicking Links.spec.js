
describe('Click Sign In link', () => {
    it('Make sure log in page displays', () => {
        cy.viewport(1920, 1080);
        cy.visit('');
        cy.get('a').contains("Sign in").click()
    });
});