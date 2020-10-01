describe('Angular reactive forms', () => {

    it('should open the "typescript form" list', () => {
        cy.get('ul[id="typescript-collapse"]').invoke('show')

        // .get(`li:eq(${9}) > a`).click();
    });

});