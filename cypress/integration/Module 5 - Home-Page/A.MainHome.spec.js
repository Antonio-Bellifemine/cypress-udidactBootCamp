before(() => {
    cy.login('test9118@testing.com', 'UdidactCamp2020')
});

describe('Main Home Page', () => {

    it('log in', () => {
        cy.get('a').contains('Your Feed').should('be.visible')
    });
    
});

after(() => {
    cy.logout();
})

