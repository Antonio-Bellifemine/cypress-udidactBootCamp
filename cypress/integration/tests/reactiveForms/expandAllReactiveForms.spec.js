

before('visit baseUrl', () => {
    cy.visit('')
})

describe('Angular reactive forms', () => {

    it('should open the "reactive form" list', () => {
        cy.get('ul[id="reactive-form-collapse"]').invoke('show');
        cy.get('li:eq(8)> ul').children();       
    });

    it('should open the "Features form" list', () => {
        cy.get('ul[id="Features-collapse"]').invoke('show');
        cy.get('li:eq(8)> ul').children();
        
    });

    it('should open the "crud form" list', () => {
        cy.get('ul[id="crud-collapse"]').invoke('show');
        cy.get('li:eq(8)> ul').children();
        
    });

    it('should open the "typescript form" list', () => {
        cy.get('ul[id="typescript-collapse"]').invoke('show');
        cy.get('li:eq(8)> ul').children();
        
    });

    it('should open the "bootstrap-prototype form" list', () => {
        cy.get('ul[id="bootstrap-prototype-collapse"]').invoke('show');
        cy.get('li:eq(8)> ul').children();
        
    });

});