// start using cypress without intellisense. after writing describe and it block, then explain intellisense and 3 slash directive

/*

You need a triple slash reference
When you are referencing JavaScript type definitions e.g. definitions for node, jQuery, etc.

/// <reference types="Cypress" />


    explain it.only and how it's useful while creating a more complex test / as well as
    debugging. it.only will tell cypress to only run this it block rather than executing all
    other it blocks. 

    it will however, execute all plumbing code i.e: before/before all/ after hooks.
    
    test it.only by copy and pasting this and running this test. it should run only one it block 
    and finish executing. 
    
*/

describe('test  web app', () => {

    it('display the log in page', () => {
        cy.viewport(1920, 1080);
        cy.visit('');
        cy.get('a:contains("Sign in")').click()
        cy.get('input:eq(0)').type('UDIDACT')
    });

    // it.only('should display the webapp home page', () => {
    //     cy.viewport(1920, 1080);
    //     cy.visit('https://angular.ganatan.com/');
    //     cy.get('span').contains('ganatan')
    //     cy.get('div[id="navbarsExampleDefault"]')
    // });

});