before(() => {
    cy.visit('')
});

describe('', () => {

    it('verify h1 contains sign in and "have an account" link appear', () => {
        cy.get('a').contains('conduit').should('be.visible');
        cy.get('a').contains('Have an account?').should('be.visible')
    });
    
})

