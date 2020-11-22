before('visit registration page', () => {
    cy.visit('');
})

describe("We'll cover some basic assertions", () => {

    it('verify nav bar on public landing page contains logo and expected buttons', () => {
        cy.get('a').contains('conduit').should('be.visible');
    });

    it('Confirm home button is visible in nav bar', () => {
        cy.get('a.nav-link').eq(0).should('have.text', 'Home')
    });

    it('Confirm sign up button is visible in nav bar', () => {
        cy.get('a.nav-link').eq(2).should('have.text', 'Sign up')
    });

    it('Confirm sign in button is visible in nav bar', () => {
        cy.get('a.nav-link').eq(1).should('contain', 'Sign in')
    });

});

describe("Dealing with failing tests due to multiple elements being returned", () => {

    it('How do I click the right one!?', () => {
        cy.get('a.nav-link').click()
        // cy.get('a.nav-link').contains('Sign in').click()
        // cy.get('a.nav-link').eq(0).click()
        // cy.get('a.nav-link:eq(0)').click()
    });

});