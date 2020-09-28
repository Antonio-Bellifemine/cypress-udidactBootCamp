before('visit baseUrl', () => {
    cy.visit('')
})


describe('Angular reactive forms', () => {

    it('should open the "bootstrap-prototype form" list', () => {
        cy.get('ul[id="bootstrap-prototype-collapse"]').invoke('show')

        cy.get('li[class="my-1 active"]:eq(4) > ul')
        cy.get('li').contains('buttons').click();
        cy.get('button:eq(10)').should('be.visible').and('contain.text', 'Primary')
    });
});