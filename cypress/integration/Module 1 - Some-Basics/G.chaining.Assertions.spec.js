/// <reference types="Cypress" />




before('visit registration page', () => {

    cy.visit('');
    cy.viewport(1920, 1080);

})

describe('Chaining Assertions: Check public landing page displays properly', () => {

    it('confirm conduit logo is visible and has correct sub headline', () => {
        cy.get('div.container').eq(1).children().eq(0).should('be.visible').and('have.text', 'conduit')
        cy.get('div.container').eq(1).children().eq(1).should('be.visible').and('have.text', 'A place to share your knowledge.')
    });

    it('check the first post to confirm an author and timeStamp is included', () => {
        cy.get('div.info').eq(0).should('have.descendants', 'a.author').and('have.descendants', 'span.date');
    });

    it('make sure date is todays date and in correct format', () => {
        cy.get('div.info').eq(0).children().eq(1).should('have.class', 'date');
    });

    it('check the first post is visible and has a like button', () => {
        cy.get('div.article-meta').eq(0).children().eq(2).should('be.visible').and('have.descendants', 'i.ion-heart')
    });

});