describe('Angular reactive forms', () => {

    it('should open the "typescript form" list', () => {
        cy.get('ul[id="typescript-collapse"]').invoke('show')
        let x = cy.get('li:eq(8)> ul').children()
        // .get(`li:eq(${9}) > a`).click();
    });

});