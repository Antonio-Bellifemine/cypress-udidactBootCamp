describe('Angular reactive forms', () => {

    it('should open the "crud form" list', () => {
        cy.get('ul[id="crud-collapse"]').invoke('show')
    });

});