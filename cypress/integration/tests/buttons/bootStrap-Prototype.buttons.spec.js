//explain the 3 slash directive for intellisense before showing global intellisense
/// <reference types="cypress" />

before('visit baseUrl', () => {
    cy.visit('')
})


describe('Angular reactive forms', () => {

    it('should open the "bootstrap-prototype form" list', () => {
        cy.get('ul[id="bootstrap-prototype-collapse"]').invoke('show')

        cy.get('li[class="my-1 active"]:eq(4) > ul')
        cy.get('li').contains('buttons').click();
        // confirm expected & Actual Buttons
        // ****** Command Opportunity For Cleaner Code*******
        cy.get('button:eq(1)').should('be.visible').and('contain.text', 'Primary')
        cy.get('button:eq(2)').should('be.visible').and('contain.text', 'Secondary')
        cy.get('button:eq(3)').should('be.visible').and('contain.text', 'Success')
        cy.get('button:eq(4)').should('be.visible').and('contain.text', 'Danger')
        cy.get('button:eq(5)').should('be.visible').and('contain.text', 'Warning')
        cy.get('button:eq(6)').should('be.visible').and('contain.text', 'Info')
        cy.get('button:eq(7)').should('be.visible').and('contain.text', 'Light')
        cy.get('button:eq(8)').should('be.visible').and('contain.text', 'Dark')
        cy.get('button:eq(9)').should('be.visible').and('contain.text', 'Link')
        cy.get('button:eq(10)').should('be.visible').and('contain.text', 'Primary')
        cy.get('button:eq(11)').should('be.visible').and('contain.text', 'Secondary')
        cy.get('button:eq(12)').should('be.visible').and('contain.text', 'Success')
        cy.get('button:eq(13)').should('be.visible').and('contain.text', 'Danger')
        cy.get('button:eq(14)').should('be.visible').and('contain.text', 'Warning')
        cy.get('button:eq(15)').should('be.visible').and('contain.text', 'Info')
        cy.get('button:eq(16)').should('be.visible').and('contain.text', 'Light')
        cy.get('button:eq(17)').should('be.visible').and('contain.text', 'Dark')
        cy.get('button:eq(18)').should('be.visible').and('contain.text', 'Large button')
        cy.get('button:eq(19)').should('be.visible').and('contain.text', 'Large button')
        cy.get('button:eq(20)').should('be.visible').and('contain.text', 'Small button')
        cy.get('button:eq(21)').should('be.visible').and('contain.text', 'Small button')
    });

    it('should open the "bootstrap-prototype form" list', () => {
        cy.get('ul[id="bootstrap-prototype-collapse"]').invoke('show')

        cy.get('li[class="my-1 active"]:eq(4) > ul')
        cy.get('li').contains('buttons').click();
        // confirm expected & Actual Buttons
        // Code looks much cleaner after being transferred to a command
        cy.checkTypscriptPageButton(1, 'Primary');
        cy.checkTypscriptPageButton(2, 'Secondary');
        cy.checkTypscriptPageButton(3, 'Success');
        cy.checkTypscriptPageButton(4, 'Danger');
        cy.checkTypscriptPageButton(5, 'Warning');
        cy.checkTypscriptPageButton(6, 'Info');
        cy.checkTypscriptPageButton(7, 'Light');
        cy.checkTypscriptPageButton(8, 'Dark');
        cy.checkTypscriptPageButton(9, 'Link');
        cy.checkTypscriptPageButton(10, 'Primary');
        cy.checkTypscriptPageButton(11, 'Secondary');
        cy.checkTypscriptPageButton(12, 'Success');
        cy.checkTypscriptPageButton(13, 'Danger');
        cy.checkTypscriptPageButton(14, 'Warning');
        cy.checkTypscriptPageButton(15, 'Info');
        cy.checkTypscriptPageButton(16, 'Light');
        cy.checkTypscriptPageButton(17, 'Dark');
        // here is a bug
        cy.checkTypscriptPageButton(18, 'Larg button');
        cy.checkTypscriptPageButton(19, 'Large button');
        cy.checkTypscriptPageButton(20, 'Small button');
        cy.checkTypscriptPageButton(21, 'Small button');
    });



});