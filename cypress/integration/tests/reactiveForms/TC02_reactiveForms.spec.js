describe('working with lists', () => {
    it('should open the reactive form list', () => {
        cy.visit('')
        cy.get('ul[id="reactive-form-collapse"]').invoke('show')
            .get(`li:eq(${9}) > a`).click();
    });

});