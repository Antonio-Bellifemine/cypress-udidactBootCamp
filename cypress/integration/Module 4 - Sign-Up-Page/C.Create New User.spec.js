/*
    explain Chance.JS will help by allowing us to dynamically test the new user registration.
    -- dynamically allow us to test new user registration
    -- we would otherwise need to hard code a different value every time we wanted to test this, making automation almost impossible.
*/ 

const userLastName = chance.last({ nationality: 'it' });
const userEmail = chance.email({ domain: 'example.com' })
const passWord = chance.string({ length: 10, casing: 'upper', alpha: true, numeric: true });

before(() => {
    cy.visit('')
});

describe('Creating a new user', () => {

    it('Successfully create new user', () => {
        cy.get('a').contains("Sign in").click();
        cy.get('a').contains("Need an account?").click();
        cy.get('input').eq(0).type(`A${userLastName}`);
        cy.get('input').eq(1).type(userEmail);
        cy.get('input').eq(2).type(passWord);

        // Use this as a fix for cypress entering password if too fast to process 
        // cy.get('input').eq(2).should('be.visible').type(passWord, {delay: 75});

        cy.get('button').contains('Sign up').click();
        cy.waitUntil(() => 
                cy.url().should('eq', 'https://conduit-af252.firebaseapp.com/#/'),
            {
                timeout: 2000, // waits up to 2000 ms, default to 5000
                interval: 500, // performs the check every 500 ms, default to 200
                errorMsg: 'This is a custom error message' // overrides the default error message
            });
        cy.get('a.nav-link').contains('Your Feed').should('be.visible')
    });
}); 