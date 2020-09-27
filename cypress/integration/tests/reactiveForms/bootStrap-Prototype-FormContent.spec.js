describe('Angular reactive forms', () => {

    it('should open the "bootstrap-prototype form" list', () => {
        cy.get('ul[id="bootstrap-prototype-collapse"]').invoke('show')
        let x = cy.get('li:eq(8)> ul').children()
        // .get(`li:eq(${9}) > a`).click();
    });

});