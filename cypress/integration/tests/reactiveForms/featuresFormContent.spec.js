describe('Angular reactive forms', () => {

    it('should open the "Features form" list', () => {
        cy.get('ul[id="Features-collapse"]').invoke('show')

        // .get(`li:eq(${9}) > a`).click();
    });


});