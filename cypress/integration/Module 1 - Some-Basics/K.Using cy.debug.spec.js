before(() => {
    cy.visit('')
});

describe('debugging in cypress', () => {
    it('use cy.debug to debug',() => {
            cy.get('a:contains("Sign in")').click();
            cy.get('a:contains("Need an account?")').click();
            cy.get('input:eq(0)').should('be.visible').type('ATester');
            // cy.debug();
            cy.get('input').eq(1).should('be.visible').type('Tester@templateSettings.com');
            // cy.debug();
            cy.get('input').eq(2).should('be.visible').type('passWord12345');
    });
})