const userLastName = chance.last({ nationality: 'it' });
const userEmail = chance.email({ domain: 'example.com' })
const passWord = chance.string({ length: 10, casing: 'upper', alpha: true, numeric: true });

before(() => {
    cy.visit('')
});

describe('Creating a new user', () => {

    it('Successfully create new user', () => {
        cy.get('a:contains("Sign in")').click();
        cy.get('a:contains("Need an account?")').click();
        cy.get('input:eq(0)').should('be.visible').type(`A${userLastName}`);
        cy.get('input').eq(1).should('be.visible').type(userEmail);
        cy.get('input').eq(2).should('be.visible').type(passWord);

        // Use this as a fix for cypress entering password if too fast to process 
        // cy.get('input').eq(2).should('be.visible').type(passWord, {delay: 75});

        cy.get('button').contains('Sign up').click();
    });
});