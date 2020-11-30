before(() => {
    cy.visit('login')
});

describe('Confirm Headline and Need An Account Redirect Link', () => {

    it('check Headline and redirect link to sign up page is visible', () => {
        cy.get('button').contains('Sign in').click()
        cy.waitUntil(() =>
            cy.get('ul.error-messages'),
        {
            timeout: 2000, // waits up to 2000 ms, default to 5000
            interval: 500, // performs the check every 500 ms, default to 200
            errorMsg: 'This is a custom error message' // overrides the default error message
        });
        cy.get('ul.error-messages > li').contains(' email or password is invalid ').should('have.css', 'color', 'rgb(184, 92, 92)').and('be.visible')
    });

}); 