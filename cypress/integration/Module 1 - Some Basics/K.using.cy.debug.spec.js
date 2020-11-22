const userLastName = chance.last({ nationality: 'it' });
const userEmail = chance.email({ domain: 'example.com' })
const passWord = chance.sentence({ words: 5 });

before(() => {
    cy.visit('')
});

describe('debugging in cypress', () => {
    it('use cy.debug to debug',() => {
            cy.get('a:contains("Sign in")').click();
            cy.get('a:contains("Need an account?")').click();
            cy.get('input:eq(0)').should('be.visible').type(`A${userLastName}`);
            cy.debug();
            cy.get('input').eq(1).should('be.visible').type(userEmail);
            cy.debug();
            cy.get('input').eq(2).should('be.visible').type(passWord);
    });
})