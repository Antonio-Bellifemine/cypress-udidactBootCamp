describe('Angular reactive forms', () => {

    it('should close the "reactive form" list', () => {
        cy.visit('')
        cy.get('ul[id="reactive-form-collapse"]').invoke('hide')
        cy.get('li:eq(8)> ul').children()

    });

    it('should close the "Features form" list', () => {
        cy.get('ul[id="Features-collapse"]').invoke('hide')


    });

    it('should close the "crud form" list', () => {
        cy.get('ul[id="crud-collapse"]').invoke('hide')


    });

    it('should close the "typescript form" list', () => {
        cy.get('ul[id="typescript-collapse"]').invoke('hide')


    });

    it('should close the "bootstrap-prototype form" list', () => {
        cy.get('ul[id="bootstrap-prototype-collapse"]').invoke('hide')


    });

});